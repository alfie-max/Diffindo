import React from 'react';

class BillsModal extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {

    return (
    <div>
        <div className="modal-body">
          <div className="modal-form">
            
            <input type="text" className="title"
              placeholder="Enter a description"/>

            <input type="number" min="0" className="amount"
              placeholder="0.00"/>

          </div>
          <div className="modal-actions">
            <button className="button-gray">Cancel</button>
            <button className="button-green">Save</button>
          </div>
        </div>
    </div>
  )}
}

export default BillsModal;
