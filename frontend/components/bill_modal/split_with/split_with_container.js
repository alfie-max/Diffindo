import { connect } from 'react-redux';
import SplitWith from './split_with';
import { selectFriendNamesFromSplit } from '../../../reducers/selectors';


const mapStateToProps = ({session}, ownProps) => {
  const splitsAttributes = ownProps.splitsAttributes;
  const currentUser = session.currentUser;
  const userFriends = currentUser.friends;
  const splitsNames = selectFriendNamesFromSplit(splitsAttributes);
  return {
    currentUser,
    userFriends,
    splitsAttributes,
    splitsNames,
    handleAddSplit: ownProps.handleAddSplit
  }
};

const mapDispatchToProps = () => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SplitWith);
