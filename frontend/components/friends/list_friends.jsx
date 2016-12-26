import React from 'react';
import Modal from 'react-modal';

export default class ListFriends extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.userFriends.map( friend => (
            <li>{friend.username}</li>
          ))}
        </ul>
      </div>
    )
  }
}