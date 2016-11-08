import { connect } from 'react-redux';
import TopBar from './top_bar';

const mapStateToProps = (ownProps) => {
  // const pageTitle = ownProps.location.pathname.slice(1);

  return {
    title: "All Bills"
  }
};

const mapDispatchToProps = (dispatch) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopBar);
