import React from "react"
import { Container, Row, Col } from "reactstrap"

import Signup from "./Signup"
import Login from "./Login";

import "./auth.css"

// functional component. It has no state, and it will simply pull in the props that will be passed down.
// this component is basically going to hold our login and signup forms side by side.

const Auth = (props) => {
    return (
        <Container className="auth-container">
            <Row>
                <Col md="6">
                    <Signup setTokenFromAuth={props.setTokenFromApp}/>
                </Col>
                <Col md="6" className="login-col">
                    <Login setTokenFromAuth={props.setTokenFromApp}/>
                </Col>
            </Row>
        </Container>
    )
}

export default Auth