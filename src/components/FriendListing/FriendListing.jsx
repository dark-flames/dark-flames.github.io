import React from 'react'
import FriendMeta from '../FriendMeta/FriendMeta'
import FriendName from '../FriendName/FriendName'
import FriendAvatar from '../FriendAvatar/FriendAvatar'
import { Link } from 'gatsby'
import FriendBiography from '../FriendBiography/FriendBiography'

const getFriendList = (friendEdges) =>
  friendEdges.map(friendEdge => ({
    name: friendEdge.node.name,
    url: friendEdge.node.url,
    image: friendEdge.node.image,
    bio: friendEdge.node.bio
  }));

class FriendListing extends React.Component {
  render () {
    const { friends } = this.props;
    const friendList = getFriendList(friends);

    return (
      <div>
        {
          friendList.map(friend => {
            return (
              <div className="friend-list">
                <FriendAvatar name={friend.name} image={friend.image} url={friend.url}/>
                <FriendMeta>
                  <FriendName>
                    <h4 className="friend-name">
                      <Link to={friend.url}>{friend.name}</Link>
                    </h4>
                  </FriendName>
                  <FriendBiography>
                    <p>{friend.bio}</p>
                  </FriendBiography>
                </FriendMeta>
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default FriendListing