import React, { Component } from "react"
import ExpensesCreate from "./ExpensesCreate"
import ExpensesTable from "./ExpensesTable"
import ExpensesEdit from "./ExpensesEdit"
import { Container, Row, Col } from "reactstrap"
import APIURL from "../helpers/environments"

// import ExpensesBudget from "./ExpensesBudget"

class ExpensesIndex extends Component {
    constructor(props) {
        super(props)
        this.state = {
            expensesArr: [],
            updatePressed: false, // Added for ExpensesEdit
            expensesToUpdate: [] // Added for ExpensesEdit

        }
    }

    componentDidMount() {
        this.fetchExpenses()
    }


    fetchExpenses = () => {
        let totalCost = 0
        fetch(`${APIURL}/api/expenses`, {
            method: "GET",
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": this.props.setTokenFromSplash
            })
        })
            .then(res => res.json())
            .then((returnedData) => {
                totalCost = returnedData.map(expense => expense = (expense.paid === "Paid") ? Number(expense.cost) : 0).reduce((prev, next) => prev + next, 0)
                this.props.setTotalCostFromSplash(totalCost)
                this.setState({ expensesArr: returnedData })
            })
            .catch(err => console.log(err.message))
    }

    deleteExpenses = (e) => {
        fetch(`${APIURL}/api/expenses`, {
            method: "DELETE",
            body: JSON.stringify({ expenses: { id: e.target.id } }),
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": this.props.setTokenFromSplash
            })
        })
            .then(res => this.fetchExpenses())
    }

    setUpdatedExpenses = (e, expenses) => {
        this.setState({
            expensesToUpdate: expenses,
            updatePressed: true
        })
    }

    updateExpenses = (e, expenses) => {
        fetch(`${APIURL}/api/expenses`, {
            method: "PUT",
            body: JSON.stringify({ expenses: expenses }),
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": this.props.setTokenFromSplash
            })
        })
            .then(res => {
                this.setState({ updatePressed: false })
                this.fetchExpenses()
            })

    }

    render() {
        const expenses = this.state.expensesArr.length >= 1 ?
            <ExpensesTable expenses={this.state.expensesArr} delete={this.deleteExpenses} update={this.setUpdatedExpenses} /> : <h2>Add an expense</h2>

        return (
            <Container>
                <Row>
                    <Col md="3">
                        <ExpensesCreate setTokenFromExpensesIndex={this.props.setTokenFromSplash} updateFetchExpenses={this.fetchExpenses} />
                    </Col>
                    <Col md="9">
                        {expenses}
                    </Col>
                </Row>
                <Col md="12">
                    {this.state.updatePressed ? <ExpensesEdit t={this.state.updatePressed} update={this.updateExpenses} expenses={this.state.expensesToUpdate} /> : <div></div>}
                </Col>
            </Container>
        )
    }
}

export default ExpensesIndex