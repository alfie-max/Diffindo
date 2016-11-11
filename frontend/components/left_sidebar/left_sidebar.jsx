import React from 'react';
import { hashHistory } from 'react-router';
import { Link } from 'react-router';

class LeftSidebar extends React.Component {

  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    //So it doesn't try to render currentUser.username and return a console error.

    if (!nextProps.currentUser) return false;
    return true;
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.currentUser) {
      hashHistory.push("/login");
    }
  }

  openModal() {
    this.props.openModal(true, "create")
  }

  handleLogout() {
    this.props.logout();
  };

  render() {
    console.log(this.props.currentUser.friends);

    const renderFriends = this.props.currentUser.friends.map(
       (friend, idx) => (
      <li key={`friend-${idx}`}>{friend.username}</li>
    ));

    return(
      <div className='sidebar-content'>
        <section className="user-greeting">
          <img src="http://www.aveleyman.com/Gallery/ActorsL/10388-24033.gif" />
          <h2>Hello, {this.props.currentUser.username}</h2>
          <h3 className="amount">
            You are owed<br/>
          <span className="green">$34.65</span>
          </h3>

        </section>

        <div className="section-split"></div>

        <section>
          <p><i className="fa fa-file-text" aria-hidden="true"></i>Bills</p>

          <p><i className="fa fa-calendar"
            aria-hidden="true"></i>Recent Activity</p>

          <p><i className="fa fa-usd"
            aria-hidden="true"></i>All Expenses</p>
        </section>

        <div className="section-split"></div>

        <section className="user-friends clearfix">
          <div className="sidebar-friends-list">
            <p><i className="fa fa-users"
              aria-hidden="true"></i>Friends</p>
            <ul>
              {renderFriends}
            </ul>
          </div>
          <div className="section-split"></div>
          <div className="add-friend" onClick={this.openModal}>
            <i className="fa fa-plus-circle" aria-hidden="true" />
          </div>

        </section>

        <div className="section-split"></div>

        <section>
          <p><i className="fa fa-user"
            aria-hidden="true"></i>Account</p>

          <p><i className="fa fa-question"
            aria-hidden="true"></i>Help</p>

          <button onClick={this.handleLogout}><i className="fa fa-power-off"
            aria-hidden="true"></i>Logout</button>
        </section>

      </div>
    );
  }
}

export default LeftSidebar;
