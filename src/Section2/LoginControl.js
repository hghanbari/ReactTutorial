import React, { Component } from "react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import Greetin from "./Greeting";
export default class LoginControl extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
  }
  handleLoginClick = () => {
    this.setState({ isLoggedIn: true });
  };
  handleLogoutClick = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    let button;
    if (this.state.isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }
    return (
      <div>
        <Greetin isLoggedIn={this.state.isLoggedIn} />
        {button}
        {this.props.hasNewMessage && <h2>You have unread messages</h2>}
        {this.props.credit > 0 ? (
          <h3>You have {this.props.credit} derdit</h3>
        ) : (
          <h3>Youhave no cerdit</h3>
        )}
        {this.props.warning ? <h4>You have warning</h4> : null}
      </div>
    );
  }
}
