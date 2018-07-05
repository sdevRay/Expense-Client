import React, { Component } from "react"
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from "reactstrap"

class ExpensesEdit extends Component {
    constructor(props) {
        super(props)

        this.state = {
            item: "",
            cost: "",
            paymentMethod: "",
            dueDate: "",
            paid: "",
            id: ""
        }
    }

    componentWillMount() {
        this.setState({
            item: this.props.expenses.item,
            cost: this.props.expenses.cost,
            paymentMethod: this.props.expenses.paymentMethod,
            dueDate: this.props.expenses.dueDate,
            paid: this.props.expenses.paid,
            id: this.props.expenses.id
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.update(e, this.state)
    }

    render() {
        return (
            <div>
                <Modal isOpen={true}>
                    <ModalHeader>Update an Expense</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Label for="item">Item</Label>
                                <Input id="item" type="text" name="item" value={this.state.item} placeholder="Enter Item" maxLength="10" required onChange={this.handleChange} />
                            </FormGroup>

                            <FormGroup>
                                <Label for="cost">Cost</Label>
                                <Input id="cost" type="text" name="cost" value={this.state.cost} placeholder="Enter Cost" pattern="^[0-9]+(\.[0-9]{1,2})?$" title="Please enter a number value with up to 2 decimal places." required onChange={this.handleChange} />
                            </FormGroup>

                            <FormGroup>
                                <Label for="dueDate">Due Date</Label>
                                <Input id="dueDate" type="date" name="dueDate" value={this.state.dueDate} placeholder="Enter Due Date" onChange={this.handleChange} />
                            </FormGroup>

                            <FormGroup>
                                <Label for="paymentMethod">Payment Method</Label>             <Input type="select" name="paymentMethod" id="paymentMethod" value={this.state.paymentMethod} onChange={this.handleChange} placeholder="Payment Method">
                                    <option value="">Choose Payment Method</option>
                                    <option value="Credit Card">Credit Card</option>
                                    <option value="Debit Card">Debit Card</option>
                                    <option value="Check">Check</option>
                                    <option value="Cash">Cash</option>
                                    <option value="Bank Transfer">Bank Transfer</option>
                                </Input>
                            </FormGroup>

                            <FormGroup>
                                <Label for="paid">Status</Label>
                                <Input type="select" name="paid" id="paid" value={this.state.paid} required onChange={this.handleChange} placeholder="Status">
                                    <option value="">Choose Status</option>
                                    <option value="Paid">Paid</option>
                                    <option value="Not Paid">Not Paid</option>
                                </Input>
                            </FormGroup>

                            <Button type="submit" color="primary"> Submit </Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

export default ExpensesEdit
