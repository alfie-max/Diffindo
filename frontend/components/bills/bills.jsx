import React from 'react';

class Bills extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="col-md-12 bills-container">

          {this.props.monthHeaders.map( (monthHeader, idx) => (

            <section key={`monthGroup-${monthHeader}`} className="month-group">
              <div className="month-header">
                <h2>{monthHeader}</h2>
              </div>

              <ul className="bills-list">
                {this.props.bills[idx].map( bill => (
                  <li key={`bill-${bill.id}`} className="bill-item">
                    {bill.title}: {bill.amount}
                  </li>
                ))}
              </ul>
            </section>
          ))}

      </div>
    );
  }
}

export default Bills;
