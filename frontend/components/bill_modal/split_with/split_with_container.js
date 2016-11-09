import { connect } from 'react-redux';
import SplitWith from './split_with';
import { mapFriendNameToFriendObj } from '../../../reducers/selectors';


const mapStateToProps = ({session, billDetail}, {handleAddSplit, billAmount}) => {
  return {
    currentUser: session.currentUser,
    userFriends: session.currentUser.friends,
    billDetail,
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
