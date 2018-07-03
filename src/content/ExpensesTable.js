import React from "react"
import { Table, Button } from "reactstrap"

const ExpensesTable = (props) => {
    return (
        <div>
            <h3>Expenses</h3>
            <hr />
            <Table striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Item</th>
                        {/* <th>Definition</th>
                        <th>Description</th> */}
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {   
                        props.expenses.map((expense, id) => {
                            // props.expenses.sort()
                            return (
                                <tr key={id}>
                                    <th scope="row">{expense.id}</th>
                                    <td>{expense.item}</td>
                                    <td>
                                        
                                        <Button id={expense.id} onClick={props.delete} color="danger">Delete</Button>
                                        <Button id={expense.id} onClick={e => props.update(e, expense)} color="warning">Update</Button>
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

export default ExpensesTable