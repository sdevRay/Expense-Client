import React, { Component } from 'react';
import Sitebar from "./home/Sitebar"
import Auth from "./auth/Auth"
import Splash from "./home/Splash"
import APIURL from "./helpers/environments"

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

  componentWillMount() {
    const token = localStorage.getItem("token") //  grabbing the token if it exists from the local storage
    const email = localStorage.getItem("email")
    const totalCost = localStorage.getItem("totalCost")
    if (token && !this.state.sessionToken) {  // set it in the state if the state is still empty. This would be useful on page refresh, etc. so that the user doesn't have to log into the app upon every visit.
      this.setState({ sessionToken: token, email: email, totalCost: totalCost })
    }
  }

  setSessionTokenToState = (token) => {  // takes a token in, and then uses that to set the state of sessionToken equal to that token
    localStorage.setItem("token", token) // setting the token in the localStorage, so that if the page refreshes we can grab it from the local storage again
    this.setState({ sessionToken: token })
  }

  setEmailToState = (email) => {
    localStorage.setItem("email", email)
    this.setState({ email: email })
  }

  setTotalCostToState = (totalCost) => {
    localStorage.setItem("totalCost", totalCost)
    this.setState({ totalCost: totalCost })
  }

  logout = () => {
    this.setState({ sessionToken: "", email: "", totalCost: "" })
    localStorage.clear()
  }

  postTotal = (e) => {
    e.preventDefault()
    fetch(`${APIURL}/api/post`, {
      method: "POST",
      body: JSON.stringify({ post: this.state.totalCost }),
      headers: new Headers({
        "Content-Type": "application/json",
        "Authorization": this.state.sessionToken
      })
    })
      .then(res => res.json())
      .catch(err => err.status(500).send(err.message))
  }


  protectedViews = () => {
    if (this.state.sessionToken === localStorage.getItem("token")) {
      return (
        <Switch>
          <Route path="/" exact>
            <Splash setEmailFromApp={this.state.email} setTokenFromApp={this.state.sessionToken} setTotalCost={this.setTotalCostToState} />
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
          <Sitebar setTotalCost={this.state.totalCost} setEmail={this.state.email} clickLogout={this.logout} clickPost={this.postTotal} />
          {this.protectedViews()}
        </div>
      </Router>

    );
  }
}

export default App;
