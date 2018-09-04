import React, { Component } from "react";
import Homepage from "./components/Homepage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { fetchInitialUser } from "./actions/user";

class App extends Component {
  componentDidMount() {
    this.props.fetchInitialUser();
  }

  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Switch>
            <Route exact path="/" component={Homepage} />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default connect(
  null,
  { fetchInitialUser }
)(App);
