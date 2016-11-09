import { connect } from 'react-redux';
import TopBar from './top_bar';

const mapStateToProps = (state, {openModal}) => {
  // const pageTitle = ownProps.location.pathname.slice(1);
  return {
    openModal,
    title: "All Bills"
  }
};

const mapDispatchToProps = (dispatch) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopBar);
