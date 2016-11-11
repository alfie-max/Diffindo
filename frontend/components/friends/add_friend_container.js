import { connect } from 'react-redux';
import AddFriend from './add_friend';
import { addFriend } from '../../actions/friends_actions';
import {clearAllErrors} from '../../actions/forms_actions';

const mapStateToProps = ({session, formsErrors}, {addFriendForm, closeModal}) => ({
  currentUser: session.currentUser,
  modalOpen: addFriendForm.modalOpen,
  modalTitle: addFriendForm.modalTitle,
  errors: formsErrors.addFriendErrors,
  closeModal
});

const mapDispatchToProps = (dispatch) => ({
  addFriend: friend => dispatch(addFriend(friend)),
  clearAllErrors: () => dispatch(clearAllErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddFriend);
