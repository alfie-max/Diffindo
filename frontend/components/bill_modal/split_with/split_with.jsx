import React from 'react';
import { keys } from 'lodash';

export default class SplitWith extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: '',
      splits: []
    };

    this.renderFriendsList = false;

    this.selectName = this.selectName.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.userFriends = this.props.userFriends;
    this.matches = this.matches.bind(this);
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
    // if (this.state.inputVal.length === 0) {
    //   return this.props.names;
    // }

    keys(this.props.userFriends).forEach( friendName => {
      let sub = friendName.slice(0, this.state.inputVal.length);
      // Only display the friend if they match the query
      // and have not been added to the splits list yet.
      if (sub.toLowerCase() === this.state.inputVal.toLowerCase() &&
        !this.state.splits.includes(friendName) ) {
        matches.push(friendName);
      }
    });

    if (matches.length === 0) {
      matches.push('No matches');
    }

    return matches;
  }

  selectName(event) {
    let name = event.currentTarget.innerText;
    this.setState({splits: this.state.splits.concat(name)});
  }

  removeSplit(idx) {
    return e => {
      console.log(`removing ${idx}`);
      let newSplits = this.state.splits;
      newSplits.splice(idx, 1);
      this.setState({splits: newSplits});
    }
  }

  render() {
    let results = this.matches().map((result, i) => {
      return (
        <li key={i} onClick={this.selectName}>{result}</li>
      );
    });

    console.log(this.state.splits);

    let splitsList = this.state.splits.map( (friend, idx) => {
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
