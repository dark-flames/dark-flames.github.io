import React from "react";
import classNames from "classnames";
import "./MainHeader.css";
import DynamicBackgroundImage from '../FluidBackgroundImage/DynamicBackgroundImage'

class MainHeader extends React.Component {
  render() {
    const { children, cover, className } = this.props;
    const classes = classNames("main-header", className, {
      "no-cover": !cover
    });

    if(cover) {
      return (
        <header className={classes}>
          <DynamicBackgroundImage imagePath={cover} />
          {children}
        </header>
      )
    } else {
      return (
        <header className={classes}>
          {children}
        </header>
      )
    }
  }
}

export default MainHeader;
