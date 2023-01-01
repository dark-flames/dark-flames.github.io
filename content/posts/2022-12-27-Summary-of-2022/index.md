---
title: "2022 年终总结"
category: "Summary"
date: "2023-01-02"
slug: "sumary-of-2022"
cover: "cover.jpg"
author: "darkflames"
tags:
    - "2022"
    - Summary
---

每到年末，都会有巨大的空虚感，感觉自己又摸了一整年。所以虽然有过冲动也尝试过动笔，但每次开头写几个字就回忆起初中写作文斟酌字句的感觉，所以也并没有真的写一篇文章来总结一年。本科毕业、搬家、master 入学、学过的各种新东西和科研，仔细想来也会感慨其实做了很多事情，值得详细的写一篇流水账来总结一下。

## 本科毕业

如果不是翻看手机相册，我几乎不记得上一个跨年夜是在函馆度过的。依稀记得去年的最后一晚，这个不大的城市几乎所有的餐厅都已经关门，在函馆朝市仅剩的一家门前排了两个小时的队才吃到了鱼生、牛肉和啤酒。函馆也几乎是2021年末旅行的最后一站，在小樽海边拍到了2021最满意的一张照片，吹雪之中阴沉的港口仓库：

![otaru](/images/2021-otaru.jpg)

彼时的我，正在完成 thesis 最后的工作。我的 undergraduate thesis 是一个使用了一些FP的概念的ORM框架，这对我来说是一个有点特殊的项目，因为它可以算作是我4年半本科经历的一个缩影：最初在国内的两年基本在写 Web，从最基础的 CRUD 到最后沉迷造轮子折腾各种框架；来到日本的两年半慢慢开始对这些感到厌烦，花了很多时间跳出舒适区，也曾经深度自我怀疑，最后开始接触FP和各种类型论。开始的时候我的目标是，不能随便找一个简单的课题混毕业，而是做一个足够让自己感到满足和快乐的项目。中间经历过几次大幅度的重构和调整，花了大量的时间去写代码。
总的来说，它确实达到了我理想中的性能和优雅程度。

其实刚上大学的时候一直觉得自己的思维更加工业化，没有想过会对科研和学术感兴趣。一开始想读 master 更多的是出于对于未来的不安和对改变学生身份的恐惧感。因为有大量做 Programming Language 方面的群友，在他们的影响下，投了这一领域日本比较强的研究室的 master。当时也从未想过自己真的会真心喜欢并全心投入的做这方面的研究。

2021年申请 master 的时候我完全没考虑过本校，最后拿到了京都大学的 offer，但我本科的教授对这件事情有些意见，所以关系一直不太融洽。答辩的时候我觉得自己的项目不管是 idea 还是复杂程度都比其他人高了不止一个层次，但是最后我教授的评分并不高，也算是小小的遗憾了。

## 春假与搬家

正式毕业之前就已经通过中介租到了京都的房子，结束了 thesis 答辩之后就开始准备从熊本搬家到京都。花了几天时间把东西打包然后交给搬家公司，在熊本的最后一天去上学路上用大画幅拍了一张黑白胶片，冲洗的时候还失手打碎了水印温度计：

![kumamoto](/images/2022-kumamoto.jpg)

从17年开始，大概陆续去过京都四五次，去过几乎所有一般游客都会去的地方，总体印象就是：日本数一数二好看的车站、各种佛寺和神社、红叶樱花、以及京阿尼。但其实在京都住了大半年之后，反而没有多少为了游览在京都附近转。

新房子相比以前大了不少，可以分开工作学习和休息的空间，有不用蜷缩的浴缸，更大的厨房对于料理爱好者也算是福音。花了大概一周时间才完全布置好新家，紧接着办完入学手续，然后忐忑不安地给未来的教授发了第一封邮件。

虽说从2021年就断断续续学了许多 PL 相关的东西，但是每次想读一些感兴趣的东西都会因为自己对一些基础知识的不了解而放弃。因为 master 真的要全心做这方面的研究，所以我决定在剩下的假期读一些基础性的资料。大概一个多月的空闲时间里，读了 PFPL(Practical Foundations for Programming Languages) 的前半本，并且依照去年做完一部分 SF 的记忆写完了 PLFA(Programming Language Foundations in Agda) 的第一部分。 除此之外还继续给 [Aya](https://www.aya-prover.org/) 做了一点微小的工作，但是那时的我对 dependent type 理解的并不好，所以也遇到了很多困难。


## 第一学期

我的 program 大概要在两年时间通过上课拿到20个学分，差不多10门课，一般都在第一年修完。不过感兴趣的内容不是很多，我从本科开始对学校的课程都比较摆烂，时间主要花在研究自己喜欢的内容。

除了上课之外，研究室还有各种轮讲，一个是比较经典的 TAPL(Type and Programming Languages)，内容跟春假读过的 PFPL 基本一致，但是老一些；另一个是数学练习，每周选一道题目来做，主要是集合论、一些代数结构、比较基础的范畴论。

我很喜欢每周研究会的 seminar，每个人差不多一个学期要做两次 presentation。我整个第一学期学习和研究的内容基本都是按照 seminar presentation划分的。首先开学的两个月主要根据千里冰封的 note（[Type theories in category theory](https://arxiv.org/abs/2107.13242) ）来学习范畴论和类型论的范畴语义。虽说前后差不多有两个月时间，但是密度最高的是临近 presentation 前的两周。一方面写完了 STLC 部分的 slide，另一方面嫌内容太少加上了后面 dependent type 的部分。其实这是第一次讲类似的 presentation，也没有时间准备稿子，总体来说流利度和内容都比较满意，但是因为时间问题最后一部分没讲完。紧接着趁着天气还没完全热起来，花了一个周末去和歌山泡了一次温泉。

在这段时间，我开始注意到自己的注意力问题，克服自己的不怎么流利的日语去看了精神科医生，确诊了 ADHD，并开始吃药，确实改善了一部分专注力的问题。

第二个 presentation 是之前一直想学但是没时间学的东西，HoTT(Homotopy Type Theory)，因为两个 presentation 之间只有一个半月的时间，内容的量和难度也更大，所以花了差不多一个月的时间看 The HoTT Book 和各种 Talk。整个过程比我预想的顺利，topological 的类型论模型好像出乎意料的易于理解，感觉也是从这开始，我才真正意义上理解了 MLTT。最后两周准备了 slide，因为时间关系 higher inductive type 的部分讲的比较粗略。最后感觉比第一次更满意，对于没准备过的问题也回答的比较流畅。

之后时间来到七月，基本都在准备期末和各种课的 final report。其中我教授的课有一个 assignment 需要写大量关于编程语言 evaluation 的导出树，于是开了一个项目花了一周用 Rust 实现了自动推导， 顺便实现了 System F 以下的各种类型系统。

## 暑假

暑假首先跟朋友去了一趟北陆（富山、金泽，巡礼了冰菓，吃了”咸死卖盐的“的黑拉面。但是因为日本夏季高温高湿的天气实在过于反人类，所以玩的并不算开心。

之后又为 Aya 迁移到 cubical type theory 做了一点微小的贡献。然后去冲绳待了几天，基本都在酒店里写代码和打刚发售的《Splatoon 3》。回来之后花了大概两周时间为国内兼职的公司用 Rust 实现了一套基于消息队列的异步 worker，在开学后成功上线。

在暑假末，研究室也开始根据兴趣划分不同的小组，我选择了 algebraic effects 和 gradual typing 的组，也开始花时间快速浏览相关的论文。

开学前补完了整个京吹系列，无比羡慕高中生们的青春，趁着最后的几天去旁边的宇治完成了巡礼，坐在久美子椅上对着宇治川发呆了一小时。拜 Sony a1 所赐，拍到了宇治川里，起飞的苍鹭：
![uji](/images/2022-uji.jpg)

## 第二学期

第二学期课比第一学期少，也没有轮讲，只需要参加 seminar 和每周小组的会议。开始的两个月主要开始大量阅读关于 algebraic-effects 和 gradual typing 的资料和论文，因为没有什么 idea，所以更接近漫无目的的浏览。

当时的我还在犹豫 master 毕业的去向：就职或者读 doc，当时更偏向于就职恰钱，然后随便投了实习简历并参加了某血汗工厂的就职 workshop。参加完之后感觉大厂 SDE 的无聊程度超乎我的想象。糊墙、各种炼丹、跟上司/客户扯皮需求，有趣程度被搞科研碾压，甚至还不如刚上大学的那几年的工作内容。之后的面试也是完全没花时间准备地参加了，依靠高中算法竞赛的一些记忆做对了所有的算法题，但是大概因为 behavior questions 和比较少的 hc（至今仍不清楚具体挂在哪里）并没有通过。这些经历让我越来越倾向于读 doc，一方面不想跟转码人一起卷基础算法题和小作文，另一方面也真的对学术和科研感兴趣。

因为当时正在研究 algebraic effect，又读了 call-by-push-value 的论文，于是这学期第一个 presentation 是关于 algebra 和 PL 的，主要内容基于 Guest0x0 的 note ([代数与 PL 之恋](https://guest0x0.xyz/PL-and-universal-algebra/PL-and-universal-algebra.pdf)). 大概花了一周时间查阅相关资料准备 slide。虽然内容有点多，但讲的时候因为有同学请假，很幸运的获得了两倍的时间。

这之后趁着周末和学园祭去了东京，见到了 Inoki 跟史莱姆。此时正值日本完全放开入境，东京被外国游客塞满，这几天感受到了前所未有的压抑感和对大城市的厌恶，突然发现生活在京都这样宽敞的城市是一件非常美好的事。之后去了青森，沿着满是青苔和枯木的奥入濑溪流徒步，拍到了2022年最满意的照片：
![aomori](/images/2022-aomori.jpg)

第二个 presentation 的内容也是一直想学但是没有专门花时间的东西，cubical type theory。虽然之前写 Aya 的时候读过千里冰封的 note ([A tutorial on implementing De Morgan cubical type theory](https://arxiv.org/abs/2210.08232)), 但是一直没抽出时间来系统学习。开始准备的时候只剩两周，这段时间效率拉满，堪称一年中的高光。大概花了一周时间读完了包括 [CCHM](https://arxiv.org/abs/1611.02108) 在内的论文和一些关于实现细节的 note。然后花了半周去听了 HoTTEST 关于 CuTT 的所有 talk，在只剩两天的时候才开始准备 slide。从结果上来说，无论是理解程度还是流利程度上都算是我这一年最满意的一次 presentation。

年末开始入坑钢笔，开始用笔记本并把论文打印出来看，体验确实吊打一切 iPad 或电子纸。本想着一年差不多结束，但是做第二次 presentation 的时候想到了一些不错的 idea，所以最后一个月都在研究 gradual typing 和 dependent type 相关的内容。

因为游客太多，寒假并没有计划出行，跟到访的 DVD 约了饭。

## 其他
关于摄影，今年其实器材比较稳定，仅买了 a1 和一些大画幅镜头，大概未来也没有什么再买镜头的动力了。

关于料理，其实现在越来越熟练了，吃到外面好吃的东西回家也能还原的差不多，但是每次做完都没什么动力分享。

## 总结
开始写之前还在斟酌情绪，写完之后发现自己写了一篇名副其实的流水账。可能现在彻底麻木之后越来越不擅长感性的去表达情绪。仔细想来每年的空虚感更多的是因为我习惯了进入状态之后突击式的学习，虽然效率很高，但是总会因为浪费了很多时间内心不安。 专注力的问题并没有完全得到解决，中间怀疑过自己因为焦虑之类的原因分心，尝试过 SSRI 之后被巨大的副作用劝退。

总的来看 2022 可以说各方面都是我大学生涯最好的一年，希望明年年终总结的时候也能再说出这样的话。

真心想要感谢的人很多，给了我很多建议的教授，听了我很多脑洞、回答了很多问题的千里冰封，一直陪伴我的蛋挞，还有强强而可爱友善的群友们……

## 2023展望

* **学业**：希望自己能强迫自己交流和分享来督促自己学更多东西，也希望能减少在奶头乐和社交媒体上花费的时间，改善专注力之类的问题，下一个年末能更有充实感。 
* **科研**：希望有更多有价值的 idea，能有成果诞生，并着手做 publication 相关的事情。
* **语言**：日语(其实英语也有点)的词汇量对生活产生了或多或少的影响，希望能不那么懒，恶补一下词汇量。
* **摄影和旅行**：日本大部分地方都去的差不多了，可能回更多的以放松的目的旅行，但希望能拍到更多让自己内心高潮的照片。
* **其他**：希望能有机会回国几周，想贴到更多的朋友。









