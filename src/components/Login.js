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
import { handleLogin } from "../actions/user";

class Login extends React.Component {
  state = {
    open: false,
    email: "",
    password: "",
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

  handleLoginSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    this.props.handleLogin(email, password);
  };

  render() {
    return (
      <React.Fragment>
        <li onClick={this.handleClickOpen}>
          <a>Login</a>
        </li>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Login</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Use your username and password to login. We will never share these
              details with anybody.
            </DialogContentText>
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
            <a onClick={this.handleLoginSubmit} className="button primary">
              Login
            </a>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    );
  }
}

export default connect(
  null,
  { handleLogin }
)(Login);
