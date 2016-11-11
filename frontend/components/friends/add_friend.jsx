import React from 'react';
import Modal from 'react-modal';

export default class AddFriend extends React.Component {

  constructor(props) {
    super(props);

    this.state={
      username: "",
      email: "",
      message: "",
    }

    this.hasSubmitForm = false;

    this.handleSubmit = this.handleSubmit.bind(this);

  }

  componentDidMount() {
    const keyDownHandler = event => {
      if (event.keyCode === 27) {
        document.removeEventListener("friendModalEscape", keyDownHandler);
        this.props.closeModal();
      }
    }
    document.addEventListener("friendModalEscape", keyDownHandler, false);
  }

  componentWillReceiveProps({errors}) {
    console.log("errors are ",errors);
    if (this.hasSubmitForm && errors.length === 0) {
      this.props.closeModal();
      this.hasSubmitForm = false;
    } else {
      this.hasSubmitForm = false;
    }
  }


  update(property) {
    return e => this.setState({[property]: e.target.value});
  };

  handleSubmit(e) {
    e.preventDefault();
    let friend = this.state;
    this.props.clearAllErrors();
    this.props.addFriend({friend});
    this.hasSubmitForm = true;
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


  render() {

    return (
      <div>

        <Modal
          isOpen={this.props.modalOpen}
          onRequestClose={this.props.closeModal}
          overlayClassName="modal-overlay row"
          className="add-friend-modal">

          <div className="modal-title">
            <h3>{this.props.modalTitle}</h3>
            <i className="fa fa-times" aria-hidden="true"
              onClick={this.props.closeModal}></i>
          </div>

          {this.renderErrors()}

          <div className="modal-form">

            <div>
              <input type="text" className="friend-name"
                placeholder="What's your friend's name?"
                onChange={this.update("username")}
                value={this.state.username}/>
            </div>

            <div>
              <input type="text" className="friend-email"
                placeholder="Friend's e-mail"
                onChange={this.update("email")}
                value={this.state.email}/>
            </div>

            <div>
              <textarea type="text" className="friend-message"
                placeholder="Any message you want to send to them?"
                onChange={this.update("message")}
                value={this.state.message}/>
            </div>

            <div className="modal-actions">
              <button className="button-green"
                onClick={this.handleSubmit}>
                Send Message and Add Friend
              </button>
            </div>

          </div>

        </Modal>

      </div>

    );

  }


}
