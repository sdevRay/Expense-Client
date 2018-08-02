import React, { Component } from "react"
import { Button, Form, FormGroup, Label, Input, Modal, ModalBody } from "reactstrap"

class ExpensesBudget extends Component {
    constructor(props) {
        super(props)

        this.state = {
            budget: ""
        }
    }

    componentWillMount(){
        this.setState({
            budget: this.props.setBudget
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        this.props.setSitebarBudget(this.state.budget, e)
    }

    render() {
        return (
            <div>
                <Modal isOpen={true}>
                    <ModalBody>
                        <Form inline onSubmit={this.handleSubmit}>
                            <FormGroup className="mr-sm-2 ">
                                <Label for="budget" className="mr-sm-2">Budget:</Label>
                                <Input id="budget" type="text" name="budget" value={this.state.budget} placeholder="Enter Budget" pattern="^[0-9]+(\.[0-9]{1,2})?$" title="Please enter a number value with up to 2 decimal places." required onChange={this.handleChange} />
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