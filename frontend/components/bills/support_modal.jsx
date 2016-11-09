import React from 'react';

class SupportModal extends React.Component {

  constructor(props) {
    super(props);
    this.state={}

    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(e) {
    this.props.onChange(e.target.value)
  }


  render() {

    return (
    <div className="support-modal col-md-6">
        <div className="modal-body ">
          
        </div>

    </div>
  )}
}

export default SupportModal;
