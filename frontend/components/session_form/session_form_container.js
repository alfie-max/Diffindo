import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, signup, clearErrors } from '../../actions/session_actions';

const mapStateToProps = ({session}) => ({
  loggedIn: (session.currentUser ? true : false),
  errors: session.errors
});

const mapDispatchToProps = (dispatch, ownProps) => {
  //If I hit root, I render login. That means pathname = "/". Therefore, if formType ends up being "", I ensure it's login.
  const formType = ownProps.location.pathname.slice(1) || 'login';
  const processForm = (formType === 'login') ? login : signup;
  return {
    //ownProps obj comes from the parent component, defined on the root Route
    formType,
    processForm: user => dispatch(processForm(user)),
    clearErrors: () => dispatch(clearErrors())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
