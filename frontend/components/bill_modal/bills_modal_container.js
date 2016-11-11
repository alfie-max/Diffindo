import { connect } from 'react-redux';
import BillsModal from './bills_modal';
import {
  createBill, updateBill, requestSingleBill
  } from '../../actions/bills_actions';
import {clearAllErrors} from '../../actions/forms_actions';

const mapStateToProps = (
  {session, billDetail, bills, formsErrors},
  {billForm, closeModal, formSubmit}) => {
  return {
    currentUser: session.currentUser,
    billDetail,
    billId: billForm.billId,
    errors: formsErrors.billErrors,
    closeModal,
    formSubmit,
    bills
  }
};

const mapDispatchToProps = (dispatch, {billForm}) => {
  const formType = billForm.modalAction;
  const processForm = (formType === 'create') ? createBill : updateBill;
  return {
    //ownProps obj comes from the parent component, defined on the root Route
    processForm: bill => dispatch(processForm(bill)),
    requestSingleBill: id => dispatch(requestSingleBill(id)),
    clearAllErrors: () => dispatch(clearAllErrors())
  }

};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BillsModal);
