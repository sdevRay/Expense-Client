import React, { Component } from "react"
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from "reactstrap"

class ExpensesBudget extends Component {
    constructor(props) {
        super(props)

        this.state = {
            budget: ""
        }
    }

    handleChange = (e) => {
        this.setState({

        })
    }

    handleSubmit = (e) => {

    }

    render() {
        return (
            <div>
                <Modal isOpen={true}>
                    <ModalHeader>Budget</ModalHeader>
                    <ModalBody>
                        <Form inline onSubmit={this.handleSubmit}>
                            <FormGroup className="mr-sm-2 ">
                                <Label for="budget" className="mr-sm-2">Budget</Label>
                                <Input id="budget" type="text" name="budget" value={this.state.budget} placeholder="Enter Budget" required onChange={this.handleChange} />
                            </FormGroup>
                            <Button type="submit" color="primary">Submit</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

export default ExpensesBudget