import React from "react";
import "./FriendFormatting.css";

class FriendFormatting extends React.Component {
  render() {
    const { children } = this.props;
    return <div className="friend">{children}</div>;
  }
}

export default FriendFormatting;
