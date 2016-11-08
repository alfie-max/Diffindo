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
                {monthHeader}
              </div>

              <ul className="bills-list">
                {this.props.bills[idx].map( bill => (
                  <li key={`bill-${bill.id}`} className="bill-item row clearfix">

                    <div className="bill-date col-md-1">
                      <span className="bill-month row">{bill.month}</span>
                      <span className="bill-day row">{bill.day}</span>
                    </div>

                    <div className="bill-title col-md-3">
                      <h2>{bill.title}</h2>
                    </div>

                    <div className="bill-paid-by col-md-3">
                      <span className="bill-payer row">
                        {bill.payer} paid
                      </span>
                      <span className="paid-amount row">
                        ${bill.amount}
                      </span>
                    </div>

                    <div className="col-md-3"></div>

                    <div className="bill-actions col-md-2">
                      <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                      <i className="fa fa-trash-o" aria-hidden="true"></i>
                    </div>

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
