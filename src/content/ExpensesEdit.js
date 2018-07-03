import React, { Component } from "react"
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from "reactstrap"

class ExpensesEdit extends Component {
    constructor(props){
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

    componentWillMount(){
        this.setState({
            item: this.props.expenses.item,
            // cost: "",
            // paymentMethod: "",
            // dueDate: "",
            // paid: "",
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
                    <ModalHeader>Log a Workout</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit} >
                            <FormGroup>
                                <Label for="item">Item</Label>
                                <Input id="item" type="text" name="item" value={this.state.item} //2
                                placeholder="Enter Item" onChange={this.handleChange} />
                            </FormGroup>

                            {/* <FormGroup>
                                <Label for="def">Type</Label>
                                <Input type="select" name="def" id="def" value={this.state.def} onChange={this.handleChange} placeholder="Type">
                                    <option></option>
                                    <option value="Time">Time</option>
                                    <option value="Weight">Weight</option>
                                    <option value="Distance">Distance</option>
                                </Input>
                            </FormGroup> */}
                            
                            <Button type="submit" color="primary"> Submit </Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

export default ExpensesEdit
