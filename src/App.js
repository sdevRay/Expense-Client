import React, { Component } from 'react';
import Sitebar from "./home/Sitebar"
import Auth from "./auth/Auth"
import Splash from "./home/Splash"
// import APIURL from "./helpers/environments"

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

class App extends Component {
  constructor() {
    super()
    this.state = {
      sessionToken: "", // storing our sessionToken in the state
      email: "",
      totalCost: ""
    }
  }

  componentDidMount() {
    const token = localStorage.getItem("token") //  grabbing the token if it exists from the local storage
    const email = localStorage.getItem("email")
    if (token && !this.state.sessionToken) {  // set it in the state if the state is still empty. This would be useful on page refresh, etc. so that the user doesn't have to log into the app upon every visit.
      this.setState({ sessionToken: token, email: email })
    }
  }

  setSessionTokenToState = (token) => {  // takes a token in, and then uses that to set the state of sessionToken equal to that token
    localStorage.setItem("token", token) // setting the token in the localStorage, so that if the page refreshes we can grab it from the local storage again
    this.setState({ sessionToken: token })
  }

  setTotalCostToState = (totalCost) => {
    // return totalCost
    // localStorage.setItem("email", email)
    this.setState({ totalCost: totalCost })

  }

  setEmailToState = (email) => {
    localStorage.setItem("email", email)
    this.setState({ email: email })
  }

  logout = () => {
    this.setState({ sessionToken: "", email: "", logout: "" })
    localStorage.clear()
  }

  protectedViews = () => {
    if (this.state.sessionToken === localStorage.getItem("token")) {
      return (
        <Switch>
          <Route path="/" exact>
            <Splash setEmailFromApp={this.state.email} setTokenFromApp={this.state.sessionToken} setTotalCostFromApp={this.setTotalCostToState} />
          </Route>
        </Switch>
      )
    } else {
      return (
        <Route path="/auth">
          <Auth setEmailFromApp={this.setEmailToState} setTokenFromApp={this.setSessionTokenToState} />
        </Route>
      )
    }
  }

  render() {
    return (
      // Without <Router> we can't route to specific components, or anything within our application.
      <Router>
        <div>
          <Sitebar setTokenFromApp={this.state.sessionToken} setEmail={this.state.email} setTotalCost={this.state.totalCost} clickLogout={this.logout} />
          {this.protectedViews()}
        </div>
      </Router>

    );
  }
}

export default App;
