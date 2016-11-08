import React from 'react';
import BillsContainer from '../bills/bills_container'

class Transactions extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="col-md-7 dashboard-container clearfix">
        <BillsContainer />
      </div>
    );
  }
}

export default Transactions;
