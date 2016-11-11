import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router';
import { Link } from 'react-router';
import LeftSidebarContainer from '../left_sidebar/left_sidebar_container';
import TopBarContainer from '../top_bar/top_bar_container';
import TransactionsContainer from '../transactions/transactions_container';
import BillsModalContainer from '../bill_modal/bills_modal_container';


class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    this.renderDashboard = true;

    this.state = {
      modalType: "",
      modalOpen: false,
      modalAction: "",
      modalTitle: "",
      billId: 0

    }

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

  }


  openModal(type, action, id=0) {

    let title;
    switch (type) {
      case "bill":
        title = (action == "create") ? "Add Bill" : "Edit Bill"
        this.setState({
          modalType: type,
          modalOpen: true,
          modalAction: action,
          modalTitle: title,
          billId: id
        });
        break;

      case "friend":
        title = "Invite a Friend";
        this.setState({
          modalOpen: true,
          modalTitle: title
        });
        break;

      default:
        return;
    }
  }

  closeModal() {
    this.setState({modalOpen: false, modalType: ""});
    this.props.clearAllErrors();
  }


  render() {

    const renderDashboard = () => {
      switch (this.state.modalType) {
        case "bill":
          return (
            <BillsModalContainer
              billForm={this.state}
              closeModal={this.closeModal}
              />
          );

        case "friend":
          return;

        default:
          return "";

      }
    }

    return(
      <div className="row dashboard clearfix">
        <div className="col-md-2 left-sidebar">
          <LeftSidebarContainer openModal={this.openModal}/>
        </div>

        <div className="col-md-10 main-view">
          <div className="row">
            <TopBarContainer openModal={this.openModal}/>
          </div>

          <div className="row transactions">
            <TransactionsContainer openModal={this.openModal}/>
          </div>

        </div>

        {renderDashboard()}

      </div>
    );
  }
}

export default withRouter(Dashboard);
