import React from 'react';
import { keys, findKey, merge } from 'lodash';
import { selectFriendIdsFromSplit } from '../../../reducers/selectors';


export default class SplitWith extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputVal: ""
    }

    this.renderFriendsList = false;
    this.handleInput = this.handleInput.bind(this);
    this.addSplit = this.addSplit.bind(this);
    this.removeSplit = this.removeSplit.bind(this);
  }

  handleInput(event) {
    if (event.currentTarget.value.length > 0) {
      this.renderFriendsList = true;
    } else {
      this.renderFriendsList = false;
    }
    this.setState({inputVal: event.currentTarget.value});
  }

  matches() {
    const matches = [];

    const shouldDisplayName = (friendName, friendId) => {
      //Returns true if friendName:
      // • is not currentUser (self);
      // • matches the query string;
      // • hasn't been added to splitsAttributes
      let sub = friendName.slice(0, this.state.inputVal.length);
      const queryString = this.state.inputVal.toLowerCase();
      const usersOnList =
        selectFriendIdsFromSplit(this.props.splitsAttributes);
      return (
        friendId != this.props.currentUser.id &&
        sub.toLowerCase() === queryString &&
        !usersOnList.includes(parseInt(friendId))
        // friendId came from keys(userFriends), which returns an array of strings, even if the keys are ints.
      )
    }

    const userFriends = this.props.currentUser.friends;

    keys(userFriends).forEach( friendId => {
      // Only display the friend if they match the query
      // and have not been added to the splits list yet.
      const friendName = userFriends[friendId].username;
      if (shouldDisplayName(friendName, friendId)) {
        matches.push(friendName);
      }
    });

    if (matches.length === 0) {
      matches.push('No matches');
    }

    return matches;
  }

  addSplit(event) {
    // Prepping the displayed names array
    const username = event.currentTarget.innerText;

    const userFriends = this.props.currentUser.friends;
    const friendId = parseInt(findKey(userFriends, {username}));
    const newSplits = this.props.splitsAttributes.concat(
      {user_id: friendId, amount: 0, username}
    );

    this.props.handleUpdateSplits(newSplits);
  }

  removeSplit(idx) {
    return e => {
      // If we don't merge and only assign, the splice method mutates the original splitsAttributes, which mutates the this.state.splits_attributes on bill_modal, which were set by the store's state, so the store's state will also mutate.
      let newSplits = merge([], this.props.splitsAttributes);

      newSplits.splice(idx, 1)[0];

      this.props.handleUpdateSplits(newSplits);
    }
  }

  render() {

    let splitsList = this.props.splitsAttributes.map( (split, idx) => {
      if (split.user_id !== this.props.currentUser.id) return (
        <li key={`split-${idx}`}>
          <i className="fa fa-times" aria-hidden="true"
            onClick={this.removeSplit(idx)}/>{split.username}
        </li>
      );
    });

    let results = this.matches().map((result, i) => {
      return (
        <li key={i} onClick={this.addSplit}>{result}</li>
      );
    });

    return(
      <div>

        <ul className="splits-list clearfix">
          { splitsList }
        </ul>

        <div className="splits-with-form">
          <input
            onChange={this.handleInput}
            value={this.state.inputVal}
            placeholder='Split with...'
            className="split-with-input"/>

          <ul className=
            { this.renderFriendsList ? "friends-list" : "hide-friends-list" }>
            {results}
          </ul>


        </div>


      </div>
    );
  }
}
