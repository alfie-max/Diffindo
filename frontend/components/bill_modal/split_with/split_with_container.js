import { connect } from 'react-redux';
import SplitWith from './split_with';
import { mapFriendNameToFriendObj } from '../../../reducers/selectors';


const mapStateToProps = (state, {handleAddSplit, billAmount}) => {
  return {
    userFriends: state.session.currentUser.friends,
    billDetail: state.billDetail,
    billAmount,
    handleAddSplit
  }
};

const mapDispatchToProps = () => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SplitWith);
