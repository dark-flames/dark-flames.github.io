import React from 'react'
import './FriendBiography.css'

class FriendBiography extends React.Component {
  render () {
    const { children } = this.props;

    return <div className="friend-biography">{children}</div>
  }
}

export default FriendBiography;