import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { clearAllErrors } from '../../actions/forms_actions';

 const mapStateToProps = ({session}) => ({
   currentUser: session.currentUser
 });

 const mapDispatchToProps = (dispatch) => ({
   clearAllErrors: () => dispatch(clearAllErrors())
 });

 export default connect(
   mapStateToProps,
   mapDispatchToProps
 )(Dashboard);
