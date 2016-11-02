import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router';
import LeftSidebarContainer from '../left_sidebar/left_sidebar_container'

class Dashboard extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return(
      <div>
        <LeftSidebarContainer />
      </div>
    );
  }
}

export default Dashboard;
