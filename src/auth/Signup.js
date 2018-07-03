import React, { Component } from "react"
import { Form, FormGroup, Label, Input, Button } from "reactstrap"

// this is a standard Class Component that comes with state. We need it to be a class component because the state of the form will change as our users enter data

class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: ""
        }

        // set these items to empty strings to set the initial value for the state of those properties. Simply put, when a user starts the application those properties should not have values.

    }
   
    handleSubmit = (e) => {
        fetch("http://localhost:3000/api/user/signup", {
            method: "POST",
            body: JSON.stringify({ user: this.state }),
            headers: new Headers({
                "Content-Type": "application/json"
            }) 
        })
        .then(res => res.json())
        .then(returnedData => this.props.setTokenFromAuth(returnedData.sessionToken))
        e.preventDefault()
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <div>
                <h1>Signup</h1>
                <h6>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam sint ut reiciendis inventore optio error voluptate, soluta quas, facilis exercitationem fugit architecto. Optio itaque autem earum voluptatum excepturi, atque eaque.</h6>

                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="username">Username</Label>
                        <Input id="su_username" type="text" name="username" placeholder="Enter Username" onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="passwordhash">Password</Label>
                        <Input id="su_password" type="password" name="password" placeholder="Enter Password" onChange={this.handleChange}/>
                    </FormGroup>
                    <Button type="submit">Submit</Button>
                </Form>
            </div>
        )
    }
}

export default Signup