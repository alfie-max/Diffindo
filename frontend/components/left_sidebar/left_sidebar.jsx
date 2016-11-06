import React from 'react';
import { hashHistory } from 'react-router';
import { Link } from 'react-router';

class LeftSidebar extends React.Component {

  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    //So it doesn't try to render currentUser.username and return a console error.

    if (!nextProps.currentUser) return false;
    return true;
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.currentUser) {
      hashHistory.push("/login");
    }
  }

  handleLogout() {
    this.props.logout();
  };

  render() {

    return(
      <div>
        <h2>Hello, {this.props.currentUser.username}</h2>
        <button onClick={this.handleLogout}>Logout</button>
      </div>
    );
  }
}

export default LeftSidebar;
