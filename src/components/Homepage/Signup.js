import React from "react";
// eslint-disable-next-line
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { connect } from "react-redux";
import { handleSignup } from "../../actions/user";
class Signup extends React.Component {
  state = {
    open: false,
    email: "",
    password: "",
    username: "",
    fortniteUsername: "",
    errorMessage: null
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  onEmailChange = e => {
    this.setState({ email: e.target.value });
  };

  onPasswordChange = e => {
    this.setState({ password: e.target.value });
  };

  onUsernameChange = e => {
    this.setState({ username: e.target.value });
  };

  onFortniteUsernameChange = e => {
    this.setState({ fortniteUsername: e.target.value });
  };

  handleSignup = e => {
    e.preventDefault();
    const { email, password, username, fortniteUsername } = this.state;
    this.props.handleSignup(email, password, username, fortniteUsername);
  };

  render() {
    console.log(this.state);
    return (
      <React.Fragment>
        <li onClick={this.handleClickOpen}>
          <a>Signup</a>
        </li>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Signup</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Use your username and password to signup. We will never share
              these details with anybody.
            </DialogContentText>
            <TextField
              margin="normal"
              id="username"
              label="Username"
              type="username"
              fullWidth
              value={this.state.username}
              onChange={this.onUsernameChange}
            />
            <TextField
              margin="normal"
              id="fortniteUsername"
              label="Fortnite Username"
              type="username"
              fullWidth
              value={this.state.fortniteUsername}
              onChange={this.onFortniteUsernameChange}
            />
            <TextField
              margin="normal"
              id="email"
              label="Email"
              type="email"
              fullWidth
              value={this.state.email}
              onChange={this.onEmailChange}
            />
            <TextField
              margin="normal"
              id="password"
              label="Password"
              type="password"
              fullWidth
              value={this.state.password}
              onChange={this.onPasswordChange}
            />
          </DialogContent>
          <DialogActions>
            <a onClick={this.handleClose} className="button primary">
              Cancel
            </a>
            <a onClick={this.handleSignup} className="button primary">
              Sign up
            </a>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    );
  }
}

export default connect(
  null,
  { handleSignup }
)(Signup);
