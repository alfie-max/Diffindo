import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router';

class LeftSidebar extends React.Component {

  constructor(props) {
    super(props);
  }

  HOW TO MAKE THIS STOP THE RENDER?
  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === null) {
      this.redirectIfLoggedOut();
    }
  }

  redirectIfLoggedOut() {
    this.props.router.push("/login");
  }


  render() {

    const handleLogout = () => (
      this.props.logout()
    );

    return(
      <div>
        <h2>Hello, {this.props.currentUser.username}</h2>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  }
}

export default withRouter(LeftSidebar);
