import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router';
import LeftSidebarContainer from '../left_sidebar/left_sidebar_container'

class Dashboard extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    console.log("componentWillUpdate");
    debugger
    if (!this.props.currentUser) {
      this.props.router.push("/login");
    }
  }

  render() {

    return(
      <div>
        <LeftSidebarContainer />
      </div>
    );
  }
}

export default withRouter(Dashboard);
