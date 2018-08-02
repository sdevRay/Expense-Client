import React, { Component } from "react"
import { Form, FormGroup, Label, Input, Button } from "reactstrap"
import APIURL from "../helpers/environments"


// this is a standard Class Component that comes with state. We need it to be a class component because the state of the form will change as our users enter data

class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: ""
        }

        // set these items to empty strings to set the initial value for the state of those properties. Simply put, when a user starts the application those properties should not have values.

    }

    // handleError = (res) => {
    //     if(!res.ok){
    //         console.log("Error")
    //     }
    //     return res.json()
    // }

    handleSubmit = (e) => {
        fetch(`${APIURL}/api/user/signup`, {
            method: "POST",
            body: JSON.stringify({ user: this.state }),
            headers: new Headers({
                "Content-Type": "application/json"
            })
        })
            .then(res => res.json())
            .then(returnedData => {
                this.props.setEmailFromAuth(returnedData.user.email)
                this.props.setTokenFromAuth(returnedData.sessionToken)
            })
        e.preventDefault()
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <div>
                <div>
                    <h1 id="title">Expense Tracker</h1>
                    <h2>Signup</h2>
                </div>

                <div>
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input id="su_email" type="email" name="email" placeholder="name@email.com" required onChange={this.handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="passwordhash">Password</Label>
                            <Input id="su_password" type="password" name="password" placeholder="Enter Password" minLength="5" maxLength="20" required onChange={this.handleChange} />
                        </FormGroup>
                        <Button type="submit">Signup</Button>
                    </Form>
                </div>
            </div>
        )
    }
}

export default Signup