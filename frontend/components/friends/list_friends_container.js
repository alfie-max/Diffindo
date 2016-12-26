import { connect } from 'react-redux';
import ListFriends from './list_friends';
import { listFriends } from '../../actions/friends_actions';
import {clearAllErrors} from '../../actions/forms_actions';
import { selectUserFriends } from '../../reducers/selectors';

const mapStateToProps = ({session, formsErrors}) => ({
  currentUser: session.currentUser,
  userFriends: selectUserFriends(currentUser),
  errors: formsErrors.addFriendErrors,
});

const mapDispatchToProps = (dispatch) => ({
  clearAllErrors: () => dispatch(clearAllErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListFriends);
