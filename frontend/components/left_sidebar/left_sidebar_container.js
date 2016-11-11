import { connect } from 'react-redux';
import LeftSidebar from './left_sidebar';
import { logout } from '../../actions/session_actions';

const mapStateToProps = ({session}, {openModal}) => ({
  loggedIn: (session.currentUser ? true : false),
  currentUser: session.currentUser,
  openModal
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LeftSidebar);
