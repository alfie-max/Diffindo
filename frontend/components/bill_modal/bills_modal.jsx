import React from 'react';
import SplitWith from './split_with/split_with';
import { differenceWith, isEqual, find } from 'lodash';

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

    this.splitAmount = 0;

    this.hasSubmitForm = false;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpdateSplits = this.handleUpdateSplits.bind(this);
  }

  componentWillMount() {
    if (this.props.billForm.modalAction == "edit") {
      this.props.requestSingleBill(this.props.billId);
    }
  }

  componentDidMount() {
    // If the splits are empty, fill in the payer_id with currentUser
    // If the form is an edit one, the splits will be overwritten when the new props arrive.
    if (this.state.splits_attributes.length === 0) {
      const splits_attributes = [{user_id: this.props.currentUser.id}];
      this.setState({splits_attributes});
    }
  }

  componentWillReceiveProps({billForm, billDetail, errors}) {
    if (billForm.modalAction == "edit") {
      this.setState(billDetail);
      this.updateSplitAmount(billDetail.amount, billDetail.splits_attributes);
    }

    if (this.hasSubmitForm && errors.length === 0) {
      this.props.closeModal();
      this.hasSubmitForm = false;
    } else {
      this.hasSubmitForm = false;
    }
  }

  changeMain(val) {
    this.setState({value: val})
  }

  update(property) {
    return e => {
      this.setState({[property]: e.target.value});
      if (property==="amount") this.updateSplitAmount(e.target.value);
    }
  };

  updateSplitAmount(billAmount, splits = this.state.splits_attributes) {
    // For a new bill, there's no payer on the splits array yet, so we compensate
    let numberOfSplits;
    if (splits.length === 0) {
       numberOfSplits = 1;
    } else {
      numberOfSplits = splits.length;
    };

    if (billAmount > 0) {
      const splitAmount = (billAmount/numberOfSplits).toFixed(2);
      //Rounding with toFixed returns a string, so we have to convert it back to float
      this.setState( {splitAmount: parseFloat(splitAmount) });
    };
  };


  handleSubmit(e) {
    e.preventDefault();
    let bill = this.state;
    bill.splits_attributes = this.prepareSplitsArray(bill);
    this.props.processForm({bill});
    this.hasSubmitForm = true;
  }

  prepareSplitsArray(bill) {


    // Adds payer_id to newSplits if new bill
    // Compares current splits with what's on store's state:
    // • New elements should be added;
    // • Missing elements should have _destroy set to true;
    // • Same elements are left alone
    // Lastly, should add splitAmount to all users on splits array.

    const existingSplits = this.props.billDetail.splits_attributes;
    let newSplits = this.state.splits_attributes;
    let resultingSplits = newSplits;

    // Set _destroy on missing splits
    let splitsToDestroy = differenceWith(existingSplits, newSplits, isEqual);
    splitsToDestroy.forEach( split => {
        split._destroy = true;
      });
    resultingSplits = resultingSplits.concat(splitsToDestroy);
    resultingSplits.forEach( split => {
      split.amount = bill.splitAmount;
    });

    return resultingSplits;

  }

  renderErrors() {
    return (
      <ul className="form-errors">
        {this.props.errors.map( (err, idx) => (
          <li key={`error-${idx}`}>{err}</li>
        ))}
      </ul>
    )
  }

  handleUpdateSplits(splits_attributes) {
    this.setState({ splits_attributes })
    this.updateSplitAmount(this.state.amount, splits_attributes);
  };


  render() {

    return (
    <div>
        <div className="main-modal">

          {this.renderErrors()}

          <div className="split-with">
            <SplitWith
              currentUser={this.props.currentUser}
              handleUpdateSplits={this.handleUpdateSplits}
              splitsAttributes={this.state.splits_attributes}/>
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
