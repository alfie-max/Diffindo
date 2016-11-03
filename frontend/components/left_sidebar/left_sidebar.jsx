import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router';

class LeftSidebar extends React.Component {

  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    this.props.logout();
  };

  render() {
    console.log("Trying to render");

    return(
      <div>
        <h2>Hello, {this.props.currentUser.username}</h2>
        <button onClick={this.handleLogout}>Logout</button>
      </div>
    );
  }
}

export default LeftSidebar;
