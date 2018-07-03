import React, { Component } from "react"
import { Button, Form, FormGroup, Label, Input } from "reactstrap"
import APIURL from "../helpers/environments"

class ExpensesCreate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            item: "",
            // cost: "",
            // paymentMethod: "",
            // dueDate: "",
            // paid: "",
            id: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch(`${APIURL}/api/expenses/`, {
            method: "POST",
            body: JSON.stringify({ expenses: this.state }),
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": this.props.setTokenFromExpensesIndex
            })
        })
            .then(res => res.json())
            .then(returnedData => {
                this.props.updateFetchExpenses()
                this.setState({
                    item: "",
                    // cost: "",
                    // paymentMethod: "",
                    // dueDate: "",
                    // paid: "",
                    id: ""
                })
            })
    }

    render() {
        return (
            <div>
                <h3>Expenses</h3>
                <hr />
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="item">Item</Label>
                        <Input id="item" type="text" name="item" value={this.state.item} placeholder="Enter Item" onChange={this.handleChange} />
                    </FormGroup>

                    {/* <FormGroup>
                        <Label for="def">Def</Label>
                        <Input type="select" name="def" id="def" value={this.state.def} onChange={this.handleChange} placeholder="Type">
                            <option></option>
                            <option value="time">Time</option>
                            <option value="time">Time</option>
                        </Input>
                    </FormGroup> */}
                    
                    <Button type="submit" color="primary">Submit</Button>
                </Form>
            </div>
        )
    }
}

export default ExpensesCreate