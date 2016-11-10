import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router';
import LeftSidebarContainer from '../left_sidebar/left_sidebar_container';
import TopBarContainer from '../top_bar/top_bar_container';
import TransactionsContainer from '../transactions/transactions_container';
import BillsModalContainer from '../bill_modal/bills_modal_container';
import Modal from 'react-modal';


class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    this.renderDashboard = true;

    this.state = {
      modalOpen: false,
      modalAction: "",
      modalTitle: "",
      billId: 0

    }

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

  }


    openModal(flag, action, id=0) {
      this.setState({modalOpen: flag, modalAction: action});
      // this.setState({modalAction: action});

      const title = (action == "create") ? "Add Bill" : "Edit Bill"
      this.setState({modalTitle: title, billId: id});

      // this.setState({billId: id})
    }

    closeModal() {
      this.setState({modalOpen: false})
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
            <TopBarContainer openModal={this.openModal}/>
          </div>

          <div className="row transactions">
            <TransactionsContainer openModal={this.openModal}/>
          </div>

        </div>

        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          overlayClassName="bill-modal-overlay row"
          className="bill-modal">

          <div className="modal-title">
            <h3>{this.state.modalTitle}</h3>
            <i className="fa fa-times" aria-hidden="true" onClick={this.closeModal}></i>
          </div>

          <BillsModalContainer billForm={this.state} closeModal={this.closeModal}/>

        </Modal>

      </div>
    );
  }
}

export default withRouter(Dashboard);
