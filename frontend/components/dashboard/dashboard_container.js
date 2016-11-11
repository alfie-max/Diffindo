import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { clearAllErrors } from '../../actions/forms_actions';

 const mapStateToProps = ({session, formsErrors}) => ({
   currentUser: session.currentUser,
   billsErrors: formsErrors.billErrors,
 });

 const mapDispatchToProps = (dispatch) => ({
   clearAllErrors: () => dispatch(clearAllErrors())
 });

 export default connect(
   mapStateToProps,
   mapDispatchToProps
 )(Dashboard);
