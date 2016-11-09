import { connect } from 'react-redux';
import { selectAllBills } from '../../reducers/selectors';
import Transactions from './transactions';

const mapStateToProps = (state, {openModal}) => ({
  //Add other transactions here, such as settles
  // bills: selectAllBills(bills)
  openModal
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Transactions);
