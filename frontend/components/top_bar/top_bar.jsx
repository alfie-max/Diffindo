import React from 'react';
import TopBarContainer from './top_bar_container';
import BillsModalContainer from '../bills/bills_modal_container';
import Modal from 'react-modal';

class TopBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false
    }
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalOpen: true})
  }

  closeModal() {
    this.setState({modalOpen: false})
  }


  render() {
    return(
      <div>
        <div className="col-md-7 dashboard-top-bar">

          <div className="title">
            <h1>{this.props.title}</h1>
          </div>

          <div className="buttons">
            <button className="button-green" onClick={this.openModal}>
              Add Bill
            </button>
          </div>

        </div>

        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}>

          <BillsModalContainer />
          <button onClick={this.closeModal}>Close</button>

        </Modal>

      </div>
    );
  }
}

export default TopBar;
