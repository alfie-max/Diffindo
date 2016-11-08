import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router';
import LeftSidebarContainer from '../left_sidebar/left_sidebar_container';
import TopBarContainer from '../top_bar/top_bar_container';
import TransactionsContainer from '../transactions/transactions_container';

class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    this.renderDashboard = true;
  }


  render() {

    //FOR CREATING A NEW BILL:
    //ADD ALL USERS THAT ARE BEING SPLIT WITH + PAYING USER TO AN ARRAY OF OBJS: [{user_id, amount}] PASS THAT ARRAY TO splits_attributes WHEN CALLING Bill#create

    return(
      <div className="row dashboard clearfix">
        <div className="col-md-2 left-sidebar">
          <LeftSidebarContainer props={this.props}/>
        </div>

        <div className="col-md-10 main-view">
          <div className="row">
            <TopBarContainer />
          </div>

          <div className="row transactions">
            <TransactionsContainer props={this.props}/>
          </div>

        </div>
      </div>
    );
  }
}

export default withRouter(Dashboard);
