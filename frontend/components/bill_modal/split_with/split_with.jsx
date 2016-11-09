import React from 'react';
import { keys } from 'lodash';

export default class SplitWith extends React.Component {
  constructor(props) {
    super(props);

    // splits has all friends objects that are currently splitting.
    // splits is passed up to bill_modals so it can add to its state,
    // which will be submitted as a new/updated bill

    // splitsNames is an array os friends username,
    // to make the logic easier for maitaining the split list
    this.state = {
      inputVal: '',
      splitsNames: [],
      splits: [],
    };

    this.splitAmount = 0;

    this.renderFriendsList = false;

    this.addSplit = this.addSplit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.userFriends = this.props.userFriends;
    this.matches = this.matches.bind(this);
  }

  componentDidUpdate() {
    // Keeps this.splitAmount always up to date, which is then used when
    // making the splits array
    this.updateSplitAmount();

    //Pass the splits array to bill_modal
    this.props.handleAddSplit(this.state.splits, this.splitAmount);
  }

  updateSplitAmount() {
    //setState is async, so we pass in splits from either
    // addSplit or removeSplit so we can aupdate the splitAmount.

    // When we submit, we'll add payer_id to the splits array.
    // For now, we compensate by adding 1 to the numberOfSplits.
    const numberOfSplits = this.state.splits.length + 1;
    const billAmount = this.props.billAmount;
    if (billAmount > 0) {
      this.splitAmount = billAmount/numberOfSplits;
    }
  };


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
    // if (this.state.inputVal.length === 0) {
    //   return this.props.names;
    // }

    const shouldDisplayName = friendName => {
      //Returns true if friendName:
      // • is not currentUser (self);
      // • matches the query string;
      // • hasn't been added to the list to be displayed
      let sub = friendName.slice(0, this.state.inputVal.length);

      const friendId = this.props.userFriends[friendName].id;
      const queryString = this.state.inputVal.toLowerCase();
      const namesOnList = this.state.splitsNames;

      return (
        friendId != this.props.currentUser.id &&
        sub.toLowerCase() === queryString &&
        !namesOnList.includes(friendName)
      )
    }

    keys(this.props.userFriends).forEach( friendName => {
      // Only display the friend if they match the query
      // and have not been added to the splits list yet.
      if (shouldDisplayName(friendName)) {
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
    const name = event.currentTarget.innerText;
    const newSplitsNames = this.state.splitsNames.concat(name);

    // Prepping the splits objs array. On bills_modal#submit, the payer_id,
    // as well as the split amounts for all splits, will be added
    const friend = this.props.userFriends[name];
    const newSplits = this.state.splits.concat({id: friend.id});

    this.setState({splitsNames: newSplitsNames, splits: newSplits});

  }

  removeSplit(idx) {
    return e => {
      let newSplitsNames = this.state.splitsNames;
      newSplitsNames.splice(idx, 1);

      let newSplits = this.state.splits;
      newSplits.splice(idx, 1);

      this.setState({splitsNames: newSplitsNames, splits: newSplits});
    }
  }

  render() {


    let results = this.matches().map((result, i) => {
      return (
        <li key={i} onClick={this.addSplit}>{result}</li>
      );
    });

    let splitsList = this.state.splitsNames.map( (friend, idx) => {
      return (
        <li key={`split-${idx}`}>
          <i className="fa fa-times" aria-hidden="true"
            onClick={this.removeSplit(idx)}/>{friend}
        </li>
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
};
