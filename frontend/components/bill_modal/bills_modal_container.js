import { connect } from 'react-redux';
import BillsModal from './bills_modal';
import {
  createBill, updateBill, requestSingleBill, clearBillsErrors
  } from '../../actions/bills_actions';

const mapStateToProps = ({session, billDetail, formsErrors}, {billForm, closeModal}) => {
  return {
    currentUser: session.currentUser,
    billDetail,
    billId: billForm.billId,
    errors: formsErrors.billErrors,
    closeModal
  }
};

const mapDispatchToProps = (dispatch, {billForm}) => {
  const formType = billForm.modalAction;
  const processForm = (formType === 'create') ? createBill : updateBill;
  return {
    //ownProps obj comes from the parent component, defined on the root Route
    processForm: bill => dispatch(processForm(bill)),
    requestSingleBill: id => dispatch(requestSingleBill(id)),
    clearBillsErrors: () => dispatch(clearBillsErrors())
  }

};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BillsModal);
