import React, { Component } from "react"
import { Form, FormGroup, Label, Input, Button } from "reactstrap"
import APIURL from "../helpers/environments"

// class component because the state of the form will change as our users enter data

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: ""
        }
    }

    handleSubmit = (e) => {
        fetch(`${APIURL}/api/user/login`, {
            method: "POST",
            body: JSON.stringify({ user: this.state }),
            headers: new Headers({
                "Content-Type": "application/json",
            })
        })
        .then(res => res.json())
        .then(data => this.props.setTokenFromAuth(data.sessionToken))
        e.preventDefault()
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <h6>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam sint ut reiciendis inventore optio error voluptate, soluta quas, facilis exercitationem fugit architecto. Optio itaque autem earum voluptatum excepturi, atque eaque.</h6>

                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="username">Username</Label>
                        <Input id="li_username" type="text" name="username" placeholder="Enter Username" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input id="li_password" type="password" name="password" placeholder="Enter Password" onChange={this.handleChange} />
                    </FormGroup>
                    <Button type="submit">Submit</Button>
                </Form>
            </div>
        )
    }
}

export default Login