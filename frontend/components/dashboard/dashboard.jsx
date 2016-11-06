import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router';
import LeftSidebarContainer from '../left_sidebar/left_sidebar_container';
import BillsContainer from '../bills/bills_container';

class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    this.renderDashboard = true;
  }

  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps");
    console.log(nextProps);
    if (!nextProps.currentUser) this.renderDashboard = false;
  }


  render() {

    console.log("Begin render DB");

    if (!this.renderDashboard) {
      this.props.router.push("/login");
      return
    }

    console.log("Should render DB");
    //FOR CREATING A NEW BILL:
    //ADD ALL USERS THAT ARE BEING SPLIT WITH + PAYING USER TO AN ARRAY OF OBJS: [{user_id, amount}] PASS THAT ARRAY TO splits_attributes WHEN CALLING Bill#create

    return(
      <div>
        <LeftSidebarContainer props={this.props}/>
        <BillsContainer props={this.props}/>
      </div>
    );
  }
}

export default withRouter(Dashboard);
