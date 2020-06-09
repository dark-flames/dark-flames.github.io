---
title: "Yui 项目简介"
category: "Rust"
date: "2020-06-08"
slug: "Yui-introduction"
cover: "cover.jpg"
author: "darkflames"
tags:
    - 编程
    - Rust
    - Yui
---

[Yui](https://github.com/dark-flames/Yui) 是笔者使用`Rust`编写的第一个项目，本来是准备写一个ORM，但是在处理attribute的过程中写了很多重复的代码，所以决定将这一部分单独抽象成一个lib。

### 核心功能
Yui 的核心功能是根据 AttributeStructure 定义的 attribute pattern 匹配 `syn`中的 attribute 结构
#### 定义AttributeStructure

Yui 可以使用 Rust 中的`struct`定义 AttributeStructure，匹配过程中将会依照 AttributeStructure 作为 pattern 进行处理。同时，`Struct Struct`、`Tuple Struct`和`NoField Struct`均可以用于定义 AttributeStructure。

Yui 提供了名为`yui::YuiAttribute`的 derive 宏，会为 AttributeStructure 生成 `yui::AttributeStructure`、`quote::ToTokens`和`syn::parse_macro_input::ParseMacroInput`的相关实现。所有使用了这个宏的 struct 均可以作为 AttributeStructure 使用。

```rust
use yui::YuiAttribute;

#[derive(YuiAttribute)]
struct NoField;

#[derive(YuiAttribute)]
struct Tuple(i32, String);

#[derive(YuiAttribute)]
struct Struct {
    int: i32,
    float: f64,
    bool: bool,
}
```

#### AttributeField的类型

AttributeStructure 的每一个 field 均对应了所匹配 attribute 中的一个字段。可以使用如下类型：

* String: Rust 中的 `String`类型。
* Bool: Rust 中的 `bool`类型。
* Integer: Rust 中任意整数类型如`i32`、`u32`等。
* Float: Rust 中任意浮点类型如 `f32  `、`f64`等。
* Enum: 已经定义的 EnumValue，详见 [EnumValue](#enumvalue)。
* Object: 其他已经定义的 AttributeStructure。
* Vec\<T>: 包含 T 类型的 Vec（T不可为 Object、Vec 或者 HashMap）。
* HashMap<String, T>: 以 String 作为键的T类型HashMap。

如果想要将一个字段设为可选字段，只需要将其对应 field 的类型标记为`Option<T>`即可。

```rust
use yui::{YuiEnumValue, YuiAttribute};

#[derive(YuiAttribute)]
struct Bar;

#[derive(YuiEnumValue)]
enum SomeEnum {
    A,
    B
}

#[derive(YuiAttribute)]
struct Foo {
    string: String,
    bool: bool,
    int: i32,
    float: f32,
    object: Bar,
    #[attribute_field(enum_value=true)]
    enum_field: SomeEnum,
    list: Vec<i32>,
    map: std::collections::HashMap<String, SomeEnum>,
    optional: Option<i32> // 可选字段
}
```
#### EnumValue

在 `enum` 上使用`yui::YuiEnumValue`后，可以将其作为 EnumValue 使用。在解析 attribute 时，会将字段的字符串值自动转换为字符串对应的 variant。

同时，也可以在每一个 variant 上使用`variant_value` attribute 来定义它所对应的字符串值。对于未定义的 variant，Yui 将会使用它的标识符（转换为 `snake_case`）作为它对应的字符串值。

```rust
use yui::YuiEnumValue;

#[derive(YuiEnumValue)]
enum SomeEnum {
    #[variant_value("aaa")]
    A, // 对应的字符串为"aaa"
    B  // 对应的字符串为"b"
}
```
注意，将 field 设为`Enum`类型时，需要为其添加`enum_value=true`的选项，以与`Object`类型区别，详见[选项](#选项)。
除此之外，`variant_value`暂时仅支持字符串值。

#### 选项
在 field 上使用`attribute_field`可以设置相关选项：
* alias\
重新设置 field 对应的字段名，默认为 field 的标识符(转换为`snake_case`)。
    ```rust
        #[derive(YuiAttribute)]
        struct Foo {
            #[attribute_field(alias = "i32")]
            pub int32: i32,
        }
    ```
* default\
默认值，如果 attribute 中这个字段未给出，则将其设置为默认值。对于可选的字段，将会以`Some(default_value)`的形式给出。如果一个非可选字段在 attribute 中未被赋值并且没有设置默认值，处理过程中将会报错。\
`Object`、`Vec`和`HashMap`类型无法设置默认值，对于`Enum`类型的字段，请将默认值设置为 variant 对应的字符串值。
    ```rust
        #[derive(YuiAttribute)]
        struct Foo {
            #[attribute_field(default = 1024)]
            pub int32: i32,
            #[attribute_field(default = "string")]
            pub string: String,
            #[attribute_field(default = "aaa", enum_value=true]
            pub enum_value: SomeEnum
        }
    ```
* enum_value\
用于区别`Enum`和`Object`类型。如果这个字段为`Enum`类型，请将这个字段设置为`true`。

#### 关于`Object`类型
由于 Rust attribute 语法所限。当一个字段类型为`Object`时，其所对应的 AttributeStructure 的标识符将会失去作用。具体匹配的 attribute 请参照如下例子。
```rust
use yui::YuiAttribute;

// 这一 AttributeStruture 匹配的 attribute 为 #[Fool(test=114514)]
#[derive(YuiAttribute)]
struct Foo {
    test: i32
}

// 这一 AttributeStruture 匹配的 attribute 为 #[Bar(fool_field(test=114514))]
#[derive(YuiAttribute)]
struct Bar {
    foo_field: Fool;
}
```

#### 使用`syn` 读取 attribute
* 使用`syn`解析`TokenStream`\
    如果你只需要读取最外层结构（`struct`、`enum`或`tuple`）上的 attribute, 可以直接使用 `syn::parse_macro_input!`。
    同时，Yui 提供了`yui::AttributeStructures`用来包裹多个 AttributeStructure。
    ```rust
    let attributes = syn::parse_macro_inpit!(input as yui::AttributeStructs<Foo>);
    ```
* 从`syn::Meta`创建 AttributeStructure\
    如果你想解析其他位置的 attribute，请获取其对应的`syn::Meta`对象后使用`yui::AttributeStructure::from_meta()`方法。
    ```rust
    let meta = attr.parse_meta();
    let attributes = Foo::from_meta(&meta);
    ```
* 从`syn::AttributeArgs`创建 AttributeStructure\
    如果你已经获取了 attribute 对应的`syn::AttributeArgs`对象，可以使用`yui::AttributeStructure::from_attribute_args()`方法获取 AttributeStructure。
    ```rust
    let attributes = Foo::::from_attribute_args(attribute_args)
    ```
 
#### 使用`quote`符号化 AttributeStructure
AttributeStructure 被自动实现了 `quote::ToTokens`，可以直接使用`quote::quote!`将其符号化。

注意，如果要使用此功能，需要将 AttributeStructure 的所有 field 设置为`pub`，并且为其添加`Clone` derive 宏。

由于输出的 TokenStream 是 AttributeStructure 的构造表达式，所以无法将其赋值给`static`或者`const`，请使用`lazy_static`或者将其作为函数的返回值。
```rust
let attributes = Foo::from_meta(&meta);

quote::quote! {
    fn get_attrs() -> Foo {
        #attributes
    }
}
```

### 扩展功能：Reader Generator
提供了用于生成默认 Reader 的过程宏 `yui::generate_reader!`。同时提供了运行时读取attribute的工具宏`yui::get_attribute!`和`yui::has_attribute!`。

如果要使用此功能，请打开`generate-reader` feature。
##### 生成 Derive 宏
如果想要使用`yui::get_attribute`和`yui::has_attribute`。首先需要使用`yui::generate_reader!`生成一个 derive 宏，任何使用了这个宏的对象均可以使用`yui::get_attribute`和`yui::has_attribute`。
```rust
yui::generate_reader!(DeriveName, [StructAttr], [FieldAttr]);
```
第一个参数为 Derive 的标识符。第二个参数为读取结构上 AttributeStructure 的列表，第三个可选参数为读取 Field 上 AttributeStructure 的列表。
请在这一文件中`use`所需要的所有 AttributeStructure。

`yui::generate_reader!`将会生成一个`pub`的 derive 宏，所以请为你的 lib 打开`proc_macro`。

#### 读取 attribute
将`yui::generate_reader!`生成的 derive 宏作用在任意`struct`、`enum` 或` union` 上，即可对其使用`yui::get_attribute`和`yui::has_attribute`。
```rust
use yui::{get_attribute, has_attribute};

#[derive(MyDerive)]
#[StructAttr("some parameters")]
struct Foo {
    #[FieldAttr("some parameters")]
    field: i32
}

fn some_fn() {
    assert!(has_attribute!(Foo, StructAttr));
    assert!(has_attribute!(Foo::field, FieldAttr));
    let struct_attr1: Option<StructAttribute1> = get_attribute!(Foo, StructAttr);
    let field_attr1: Option<StructAttribute1> = get_attribute!(Foo::field, StructAttr);
}
```
其中`yui::has_attribute!`返回`bool`, `yui::get_attribute!(_, T)`返回`Option<T>`。