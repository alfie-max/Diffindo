import React from 'react';
import SplitWithContainer from './split_with/split_with_container';

class BillsModal extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      title:"",
      amount:"",
      category_id: 1,
      author_id: this.props.currentUser.id,
      payer_id: this.props.currentUser.id,
      date: "",
      docUrl: "",
      split_type: "even",
      splits_attributes: [],
      splitAmount: 0
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAddSplit = this.handleAddSplit.bind(this);
  }

  componentWillMount() {
    if (this.props.billForm.modalAction == "edit") {
      this.props.requestSingleBill(this.props.billId);
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.billForm.modalAction == "edit") {
      // console.log("New props are ", newProps);
      this.setState(newProps.billDetail);
    }
  }

  changeMain(val) {
    this.setState({value: val})
  }

  update(property) {
    return e => {
      this.setState({[property]: e.target.value})
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    let bill = this.state;
    // bill.splits_attributes = this.prepareSplitsArray(bill);
    // this.props.processForm({bill});
    this.props.closeModal();
  }

  prepareSplitsArray(bill) {
    // Should add payer_id to split array.
    bill.splits_attributes = bill.splits_attributes.concat(
      {user_id: bill.payer_id, amount: 0}
    );

    // Then add splitAmount to all users on splits array.
    bill.splits_attributes.forEach( split => {
      split.amount = bill.splitAmount;
    })

    return bill.splits_attributes
  }

  renderErrors() {
    return (
      <ul className="session-form-errors">
        {this.props.errors.map( (err, idx) => (
          <li key={`error-${idx}`}>{err}</li>
        ))}
      </ul>
    )
  }

  handleAddSplit(splits_attributes, splitAmount) {
    this.setState({splits_attributes, splitAmount});
  };


  render() {

    return (
    <div>
        <div className="main-modal">

          <div className="split-with">
            <SplitWithContainer
              handleAddSplit={this.handleAddSplit}
              billAmount={this.state.amount}/>
          </div>

          <div className="modal-form clearfix">


            <div className="category">
              <i className="fa fa-money" aria-hidden="true"></i>
            </div>

            <div>
              <input type="text" className="title"
                placeholder="Enter a description"
                onChange={this.update("title")}
                value={this.state.title}/>
            </div>

            <div className="amount">
              <span>$</span>
              <input type="number" min="0" placeholder="0.00"
                onChange={this.update("amount")}
                value={this.state.amount}/>
            </div>

            <div className="payment-info">
              <p>Paid by <span>you</span> and split equally</p>
              <p>(${this.state.splitAmount} / person)</p>
            </div>

            <div className="date">
              <input type="date" onChange={this.update("date")}
                value={this.state.date}/>
            </div>


          </div>
          <div className="modal-actions">
            <button className="button-green" onClick={this.handleSubmit}>Save</button>
          </div>
        </div>

    </div>
  )}
}

export default BillsModal;
