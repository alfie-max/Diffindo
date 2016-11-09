import React from 'react';

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
      split_type: "even"
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    if (this.props.billForm.modalAction == "edit") {
      this.props.requestSingleBill(this.props.billId);
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.billForm.modalAction == "edit") {
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
    const bill = this.state;
    this.props.processForm({bill});
    this.props.closeModal();
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


  render() {
    return (
    <div>
        <div className="main-modal">
          <div className="modal-form clearfix">

            <div className="split-with">

            </div>

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
