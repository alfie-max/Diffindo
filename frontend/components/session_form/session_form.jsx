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
    this.handleGuestLogin = this.handleGuestLogin.bind(this);
    this.switchForms = this.switchForms.bind(this);
  }

  componentDidUpdate() {
    this.redirectIfLoggedIn();
  }

  // componentWillMount() {
  //   this.redirectIfLoggedIn();
  // }

  redirectIfLoggedIn() {
    //This is to redirect AFTER login/signup.
    //The one on root.jsx is for someone who goes straight to login/signup while being logged in
    if (this.props.loggedIn) this.props.router.push("/dashboard");
  }

  switchForms() {
    //This is so it won't show error messages when we switch forms (Login | SignUp)
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(e);
    const user = this.state;
    this.props.processForm({user});
  }

  handleGuestLogin(e) {
    e.preventDefault();

    const emailField = "meryl@burbankgalaxy.com";
    $("input")[0].value = emailField;

    const passwordField = "password";
    $("input")[1].value = passwordField;

    const user = {
      email: emailField,
      password: passwordField
    };
    this.props.processForm({user});
  }

  update(property) {
    return e => this.setState({[property]: e.target.value})
  }

  isLoginForm() {
    return this.props.formType === "login"
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

  renderButtons() {

    if (this.isLoginForm()) {
      return (
        <div className="session-form-buttons">
          <button className="user-login-btn"
            onClick={this.handleSubmit}>Login</button>
          <button className="guest-login-btn"
            onClick={this.handleGuestLogin}>Guest Login</button>
        </div>
      );
    } else {
      return (<button onClick={this.handleSubmit}>Signup</button>);
    }
  }

  renderUserNameField() {
    if (!this.isLoginForm()) {
      return (
        <div>
          <label htmlFor="username">How do you want to be called?</label>
          <br/>
          <input type="text" name="user[username]" id="username" onChange={this.update("username")}/>
          <br/>
          <br/>
        </div>
      );
    };
  }

  alternativeEntrance() {
    if (this.isLoginForm()) {
      return <Link to="/signup" onClick={this.switchForms}>Sign up instead</Link>;
    } else {
      return <Link to="/login" onClick={this.switchForms}>Log in instead</Link>;
    }
  }

  render() {
    const formTitle =
      this.props.formType.charAt(0).toUpperCase() + this.props.formType.slice(1);

    const alternativeEntrance = (this.isLoginForm()) ? "signup" : "login";

    return (
      <div className = "splash-screen">
      <div className = "splash-screen-background"></div>
        <div className="splash-screen-logo"><img src="http://placehold.it/100x100"/>
</div>
        <h1>Split the <span>check</span> with <span>a friend</span></h1>
        <div className="session-form-wrapper">

          <h2>{formTitle}</h2>

          <form>

            {this.renderErrors()}

            {this.renderUserNameField()}

            <label htmlFor="email">Email</label>
            <br/>
            <input type="text" name="user[email]" id="email" onChange={this.update("email")}/>
            <br/>
            <br/>

            <label htmlFor="password">Password</label>
            <br/>
            <input type="password" name="user[password]" id="password" onChange={this.update("password")}/>
            <br/>
            <br/>

            {this.renderButtons()}
            <br/>
          </form>
          {this.alternativeEntrance()}
        </div>
      </div>
    )
  }
}


export default withRouter(SessionForm);
