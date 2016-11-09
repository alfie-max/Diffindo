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
      if (sub.toLowerCase() === this.state.inputVal.toLowerCase()) {
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
    this.setState({inputVal: name});
  }

  render() {
    let results = this.matches().map((result, i) => {
      return (
        <li key={i} onClick={this.selectName}>{result}</li>
      );
    });
    return(
      <div>
        <div className='friends-search'>
          <input
            onChange={this.handleInput}
            value={this.state.inputVal}
            placeholder='Split with...'/>
          <ul className=
            { this.renderFriendsList ? "friends-list" : "hide-friends-list" }>
              {results}
          </ul>
        </div>
      </div>
    );
  }
};
