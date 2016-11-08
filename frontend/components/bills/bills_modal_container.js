import { connect } from 'react-redux';
import BillsModal from './bills_modal';

const mapStateToProps = (bla) => {
  return {
    // modalOpen: true
  }
};

const mapDispatchToProps = (dispatch) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BillsModal);
