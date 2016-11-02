import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
      activated: true
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.switchForms = this.switchForms.bind(this);
  }

  componentDidUpdate() {
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn() {
    //This is to redirect AFTER login/signup.
    //The one on root.jsx is for someone who goes straight to login/signup while being logged in
    if (this.props.loggedIn) this.props.router.push("/");
  }

  switchForms() {
    //This is so it won't show error messages when we switch forms (Login | SignUp)
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
  }

  update(property) {
    return e => this.setState({[property]: e.target.value})
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map( (err, idx) => (
          <li key={`error-${idx}`}>{err}</li>
        ))}
      </ul>
    )
  }

  alternativeEntrance() {
    if (this.props.formType === "login") {
      return <Link to="/signup" onClick={this.switchForms}>Sign up instead</Link>;
    } else {
      return <Link to="/login" onClick={this.switchForms}>Log in instead</Link>;
    }
  }

  render() {
    const alternativeEntrance = (this.props.formType === "login") ? "signup" : "login";
    return (
      <div>
        <h2>{this.props.formType}</h2>
        <form onSubmit={this.handleSubmit}>
          {this.renderErrors()}
          <label htmlFor="username">Username</label>
          <input type="text" name="user[username]" id="username" onChange={this.update("username")}/>
          <br/>
          <br/>

          <label htmlFor="email">Email</label>
          <input type="text" name="user[email]" id="email" onChange={this.update("email")}/>
          <br/>
          <br/>

          <label htmlFor="password">Password</label>
          <input type="password" name="user[password]" id="password" onChange={this.update("password")}/>
          <br/>
          <br/>

          <button>Submit</button>
          <br/>
        </form>
        {this.alternativeEntrance()}
      </div>
    )
  }
}


export default withRouter(SessionForm);
