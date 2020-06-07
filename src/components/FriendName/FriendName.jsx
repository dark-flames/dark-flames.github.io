import React from 'react'

class FriendName extends React.Component {
  render () {
    const { children } = this.props;

    return (
      <header className="friend-name">{children}</header>
    );
  }
}

export default FriendName