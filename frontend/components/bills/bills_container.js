import { connect } from 'react-redux';
import { selectAllBillsGroupedByMonth } from '../../reducers/selectors';
import Bills from './bills';
import { deleteBill } from '../../actions/bills_actions';

const mapStateToProps = (state, {openModal}) => {
  return {
    monthHeaders: selectAllBillsGroupedByMonth(state.bills)[0],
    bills: selectAllBillsGroupedByMonth(state.bills)[1],
    openModal
  }
};

const mapDispatchToProps = (dispatch) => ({
  deleteBill: (id) => dispatch(deleteBill(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Bills);
