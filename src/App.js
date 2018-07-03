import React, { Component } from 'react';
import Sitebar from "./home/Sitebar"
import Auth from "./auth/Auth"
import Splash from "./home/Splash"

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

class App extends Component {
  constructor() {
    super()
    this.state = {
      sessionToken: "" // storing our sessionToken in the state
    }
  }

  componentWillMount() {
    const token = localStorage.getItem("token") //  grabbing the token if it exists from the local storage
    if (token && !this.state.sessionToken) {  // set it in the state if the state is still empty. This would be useful on page refresh, etc. so that the user doesn't have to log into the app upon every visit.
      this.setState({ sessionToken: token })
    }
  }

  setSessionTokenToState = (token) => {  // takes a token in, and then uses that to set the state of sessionToken equal to that token
    localStorage.setItem("token", token) // setting the token in the localStorage, so that if the page refreshes we can grab it from the local storage again
    this.setState({ sessionToken: token })
  }

  logout = () => {
    this.setState({ sessionToken: "" })
    localStorage.clear()
  }

  protectedViews = () => {
    if (this.state.sessionToken === localStorage.getItem("token")) {
      return (
        <Switch>
          <Route path="/" exact>
            <Splash setTokenFromApp={this.state.sessionToken} />
          </Route>
        </Switch>
      )
    } else {
      return (
        <Route path="/auth">
          <Auth setTokenFromApp={this.setSessionTokenToState} />
        </Route>
      )
    }
  }

  render() {
    return (
      // Without <Router> we can't route to specific components, or anything within our application.
      <Router>
        <div>
          <Sitebar clickLogout={this.logout} />
          {this.protectedViews()}
        </div>
      </Router>

    );
  }
}

export default App;
