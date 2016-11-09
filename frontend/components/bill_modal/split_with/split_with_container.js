import { connect } from 'react-redux';
import SplitWith from './split_with';
import { mapFriendNameToFriendObj } from '../../../reducers/selectors';


const mapStateToProps = state => {
  return {
    userFriends: state.session.currentUser.friends,
    billDetail: state.billDetail
  }
};

const mapDispatchToProps = () => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SplitWith);
