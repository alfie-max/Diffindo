import { connect } from 'react-redux';
import { selectAllBillsGroupedByMonth } from '../../reducers/selectors';
import Bills from './bills';

const mapStateToProps = ({bills}) => ({
  monthHeaders: selectAllBillsGroupedByMonth(bills)[0],
  bills: selectAllBillsGroupedByMonth(bills)[1]
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Bills);
