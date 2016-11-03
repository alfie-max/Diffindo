import { connect } from 'react-redux';
import { selectAllBills } from '../../reducers/selectors';
import Bills from './bills';

const mapStateToProps = ({bills}) => ({
  bills: selectAllBills(bills)
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Bills);
