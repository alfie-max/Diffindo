import React from 'react';
import { keys, findKey, values } from 'lodash';
import { selectFriendNamesFromSplit } from '../../../reducers/selectors';

export default class SplitWith extends React.Component {
  constructor(props) {
    super(props);

    // splits_attributes has all friends objects that are currently
    // splitting and is passed up to bill_modals so it can add to its
    // state, which will be submitted as a new/updated bill

    this.state = {
      inputVal: '',
      splits_attributes: [],
    };

    this.splitAmount = 0;

    this.splitsToDestroy = {};

    this.renderFriendsList = false;

    this.addSplit = this.addSplit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.userFriends = this.props.userFriends;
    this.matches = this.matches.bind(this);
  }

  componentWillReceiveProps(newProps) {
    // When the receiveSingleBill API call returns on bills_modal, it will
    // send in the splits_attributes. We need to update our state with them
    this.setState(
      {splits_attributes: newProps.billDetail.splits_attributes}
    );
  }

  componentDidUpdate() {
    // Keeps this.splitAmount always up to date, which is then used when
    // making the splits array
    this.updateSplitAmount();

    // Adds splits to destroy to the new splits_attrs and pass them back
    // to bills_modal
    const splitsToDestroy = values(this.splitsToDestroy);
    const addedSplits =
      this.state.splits_attributes.concat(splitsToDestroy);

    this.props.handleAddSplit(addedSplits, this.splitAmount);
  }

  updateSplitAmount() {
    //setState is async, so we pass in splits from either
    // addSplit or removeSplit so we can aupdate the splitAmount.

    // When we submit, we'll add payer_id to the splits array.
    // For now, we compensate by adding 1 to the numberOfSplits.
    const numberOfSplits = this.state.splits_attributes.length + 1;
    const billAmount = this.props.billAmount;
    if (billAmount > 0) {
      const splitAmount = (billAmount/numberOfSplits).toFixed(2);
      //Rounding with toFixed returns a string, so we have to convert it back to float
      this.splitAmount = parseFloat(splitAmount);
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

    const shouldDisplayName = (friendName, friendId) => {
      //Returns true if friendName:
      // • is not currentUser (self);
      // • matches the query string;
      // • hasn't been added to the list to be displayed
      let sub = friendName.slice(0, this.state.inputVal.length);

      const queryString = this.state.inputVal.toLowerCase();
      const namesOnList =
        selectFriendNamesFromSplit(this.state.splits_attributes);

      return (
        friendId != this.props.currentUser.id &&
        sub.toLowerCase() === queryString &&
        !namesOnList.includes(friendName)
      )
    }

    keys(this.props.userFriends).forEach( friendId => {
      // Only display the friend if they match the query
      // and have not been added to the splits list yet.
      const friendName = this.props.userFriends[friendId].username;
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
    const name = event.currentTarget.innerText;
    let newSplits;

    if (this.splitsToDestroy[name]) {
      // If the split is on the db and we just removed it, put it back,
      // reset the _destroy flag and delete from obj
      delete this.splitsToDestroy[name]._destroy;
      newSplits = this.state.splits_attributes.concat(
        this.splitsToDestroy[name]
      );
      delete this.splitsToDestroy[name];

    } else {
      // If not, add to splits_attrs as a new split
      const friendId = findKey(this.props.userFriends, {username: name});
      newSplits = this.state.splits_attributes.concat(
        {user_id: friendId, amount: 0, username: name}
      );
    }

    // Prepping the splits objs array. On bills_modal#submit, the payer_id,
    // as well as the split amounts for all splits, will be added

    this.setState(
      {splits_attributes: newSplits}
    );

  }

  removeSplit(idx) {
    return e => {
      let newSplits = this.state.splits_attributes;
      //.splice returns an array, so we take the first element from it
      const splitToDelete = newSplits.splice(idx, 1)[0];
      // If the splits exists in the db, we set it to destroy and add it
      // to helper array.
      if (splitToDelete.id) {
        splitToDelete._destroy = true;
        this.splitsToDestroy[splitToDelete.username] = splitToDelete;
      }

      this.setState(
        {splits_attributes: newSplits}
      );
    }
  }

  render() {

    let results = this.matches().map((result, i) => {
      return (
        <li key={i} onClick={this.addSplit}>{result}</li>
      );
    });

    let splitsList = this.state.splits_attributes.map( (split, idx) => {
      return (
        <li key={`split-${idx}`}>
          <i className="fa fa-times" aria-hidden="true"
            onClick={this.removeSplit(idx)}/>{split.username}
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
