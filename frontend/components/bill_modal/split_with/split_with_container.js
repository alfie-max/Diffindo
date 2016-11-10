import { connect } from 'react-redux';
import SplitWith from './split_with';
import { selectFriendNamesFromSplit } from '../../../reducers/selectors';


const mapStateToProps = ({session, billDetail}, {handleAddSplit, billAmount}) => {
  const currentUser = session.currentUser;
  const userFriends = currentUser.friends;
  const splitsNames = selectFriendNamesFromSplit(
    billDetail.splits_attributes);
  return {
    currentUser,
    userFriends,
    billDetail,
    splitsNames,
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
