import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Login from "./Login";
import Signup from "./Signup";
import { connect } from "react-redux";
import { logout } from "../actions/user";
import Button from "@material-ui/core/Button";
const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

class Navbar extends React.Component {
  renderNavbarOptions = () => {
    if (!this.props.fetched) return null;
    if (this.props.user) {
      return (
        <React.Fragment>
          <div>{this.props.user.uid}</div>
          <Button color="inherit" onClick={this.props.logout}>
            Logout
          </Button>
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
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="title"
              color="inherit"
              className={classes.flex}
            >
              Fortn1te
            </Typography>
            {this.renderNavbarOptions()}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = function(state) {
  return {
    user: state.user.user,
    fetched: state.user.fetched
  };
};

export default connect(
  mapStateToProps,
  { logout }
)(withStyles(styles)(Navbar));
