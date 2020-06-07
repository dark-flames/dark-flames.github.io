import React from 'react'
import './FriendAvatar.css'

class FriendAvatar extends React.Component {
  render() {
    const {
      name, image, url
    } = this.props;
    if (image) {
      return (
        <div className="friend-image">
          <a
            className="img"
            href={url}
            style={{ backgroundImage: `url("${image}")` }}
          >
            <span className="hidden">{`${name}'s Picture`}</span>
          </a>
        </div>
      );
    }
    return null;
  }
}

export default FriendAvatar;