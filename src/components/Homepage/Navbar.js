import React from "react";
import Login from "./Login";
import Signup from "./Signup";
import { connect } from "react-redux";
import { logout } from "../../actions/user";
import styles from "../../styles.css";

class Navbar extends React.Component {
  renderNavbarOptions = () => {
    if (!this.props.fetched) return null;
    if (this.props.user) {
      return (
        <React.Fragment>
          Welcome, {this.props.user.displayName}
          <li onClick={this.props.logout}>
            <a>logout</a>
          </li>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <Login />
          <Signup />
        </React.Fragment>
      );
    }
  };

  render() {
    return (
      <nav className={styles.nav}>
        <ul>
          <li>
            <a href="#intro" className={styles.active}>
              About
            </a>
          </li>
          <li>
            <a href="#first">Stats</a>
          </li>
          <li>
            <a href="#second">Upload</a>
          </li>
          <li>
            <a href="#cta">Download</a>
          </li>
          {this.renderNavbarOptions()}
        </ul>
      </nav>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    user: state.user.user,
    fetched: state.user.fetched
  };
};

export default connect(
  mapStateToProps,
  { logout }
)(Navbar);
