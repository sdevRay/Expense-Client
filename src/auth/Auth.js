import React, { Component } from "react"
import { Button, Container } from "reactstrap"

import Signup from "./Signup"
import Login from "./Login";

import "./auth.css"

// functional component. It has no state, and it will simply pull in the props that will be passed down.
// this component is basically going to hold our login and signup forms side by side.

class Auth extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isUser: true
        }
    }

    changeUserStatus = () => {
        this.setState({ isUser: !this.state.isUser })
    }

    checkUser = () => {
        if (this.state.isUser) {
            return (
                <Login setEmailFromAuth={this.props.setEmailFromApp} setTokenFromAuth={this.props.setTokenFromApp} />
            )
        } else {
            return (
                <Signup setEmailFromAuth={this.props.setEmailFromApp} setTokenFromAuth={this.props.setTokenFromApp} />
            )
        }
    }

    render() {
        return (
            <Container className="auth-container">
                <div>
                    {this.checkUser()}
                    <br></br>
                    {this.state.isUser ? <Button onClick={this.changeUserStatus}>Click to Signup</Button> : <Button onClick={this.changeUserStatus}>Click to Login</Button>}
                </div>
            </Container>
        )
    }
}

export default Auth