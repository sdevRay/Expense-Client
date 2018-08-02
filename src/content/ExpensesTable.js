import React, { Component } from "react"
import { Table, Button } from "reactstrap"


class ExpensesTable extends Component {

    render() {
        return (
            <div>
                <h3>Expenses</h3>
                <Table hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Item</th>
                            <th>Cost</th>
                            <th>Payment Method</th>
                            <th>Due Date</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.expenses.map((expense, id) => {
                                const cost = parseFloat(Math.round(expense.cost * 100) / 100).toFixed(2)
                                return (
                                    <tr key={id}>
                                        <th scope="row">{expense.id}</th>
                                        <td>{expense.item}</td>
                                        <td>{`$${cost}`}</td>
                                        <td>{expense.paymentMethod ? expense.paymentMethod : "N/A"}</td>
                                        <td>{expense.dueDate ? expense.dueDate : "N/A"}</td>
                                        <td>{expense.paid}</td>
                                        <td>
                                            <Button id={expense.id} onClick={e => this.props.update(e, expense)} color="warning">Update</Button>
                                            <Button id={expense.id} onClick={this.props.delete} color="danger">Delete</Button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default ExpensesTable