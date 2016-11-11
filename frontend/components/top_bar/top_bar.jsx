import React from 'react';
import TopBarContainer from './top_bar_container';

class TopBar extends React.Component {

  constructor(props) {
    super(props);

    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.props.openModal("bill", "create");
  }


  render() {
    return(
      <div>
        <div className="col-md-7 dashboard-top-bar">

          <div className="title">
            <h1>{this.props.title}</h1>
          </div>

          <div className="buttons">
            <button className="button-green" onClick={this.openModal}>
              Add Bill
            </button>
          </div>

        </div>

      </div>
    );
  }
}

export default TopBar;
