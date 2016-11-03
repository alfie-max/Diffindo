import React from 'react';

class Bills extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.bills);
    return(
      <div>
        <ul>
          {this.props.bills.map( bill => (
            <li key={`bill-${bill.id}`}>{bill.title}: {bill.amount}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Bills;
