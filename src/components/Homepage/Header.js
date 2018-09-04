import React from "react";
import { connect } from "react-redux";
import { logout } from "../../actions/user";

class Header extends React.Component {
  render() {
    return (
      <header id="header" class="alt">
        <span class="fa fa-flask fa-40x" />
        <h1>Fortn1te</h1>
        <p>
          We analyze your Fortnite replay files and provide you with detailed
          statistics
          <br /> about you and your opponents to improve your game!
        </p>
      </header>
    );
  }
}

export default Header;
