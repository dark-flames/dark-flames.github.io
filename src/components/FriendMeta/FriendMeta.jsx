import React from 'react'
import './FriendMeta.css'

class FriendMeta extends React.Component {
  render () {
    const { children } = this.props;

    return (
      <div className="friend-meta">{children}</div>
    );
  }
}

export default FriendMeta