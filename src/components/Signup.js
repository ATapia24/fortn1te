import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import fire from "../config/firebase";

class Signup extends React.Component {
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

  handleSignup = e => {
    e.preventDefault();
    const { email, password } = this.state;
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(error => {
        this.setState({ errorMessage: error.message });
      });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <Button color="inherit" onClick={this.handleClickOpen}>
          Signup
        </Button>
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
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleSignup} color="primary">
              Signup
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default Signup;