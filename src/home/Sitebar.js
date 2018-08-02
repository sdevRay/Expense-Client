import React, { Component } from "react"
import { Collapse, Navbar, NavbarBrand, NavbarToggler, Nav, NavItem, Button, Container, Row, Col } from "reactstrap"
import ExpensesBudget from "./ExpensesBudget"
import APIURL from "../helpers/environments"


class Sitebar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false,
            budgetPressed: false, // Added for ExpenseBudget
            setBudget: ""
        }
    }

    componentDidUpdate(){

    }

    toggler = () => {
        this.setState({ isOpen: !this.state.isOpen })
    }

    setBudgetPressed = () => {
        this.setState({
            budgetPressed: true
        })
    }

    setBudget = (budget, e) => {
        this.setState({
            budgetPressed: false,
            setBudget: budget
        })
        // IF THIS.STATE.SETBUDGET HAS CONTENT DO A PUT ELSE DO A POST
        this.putTotal(budget, e)
    }
    
    // fetchTotal = () => {
    //     fetch(`${APIURL}/api/post`, {
    //         method: "GET",
    //         headers: new Headers({
    //             "Content-Type": "application/json",
    //             "Authorization": this.props.setTokenFromApp
    //         })
    //     })
    //         .then(res => res.json())
    //         .then((returnedData) => 
    //         console.log(returnedData)
    //         // { this.setState({ setBudget: returnedData }) }
    //         )
    //         .catch(err => console.log(err.message))
    // }

    putTotal = (budget, e) => {
    e.preventDefault()
    fetch(`${APIURL}/api/post`, {
      method: "POST",
      body: JSON.stringify({ 
          post: budget
         }), 
    //   body: JSON.stringify({ 
    //       post: budget,
    //       id: 1
    //      }), 
      headers: new Headers({
        "Content-Type": "application/json",
        "Authorization": this.props.setTokenFromApp
      })
    })
      .then(res => res.json())
      .catch(err => err.status(500).send(err.message))
  }
    

    render() {

        return (
            <div>
                <Navbar color="faded" light expand="md">
                    {/* <NavbarBrand>{this.props.setEmail}{" "}{this.props.setTotalCost}{" "}{this.state.setBudget} */}
                    <NavbarBrand>{this.props.setEmail}
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggler} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                {/* <Button onClick={this.setBudgetPressed}>Set Budget</Button> */}
        {this.props.setTokenFromApp ? <Button onClick={this.props.clickLogout}>Logout</Button> : <div></div> }
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
                <Container>
                    <Row>
                        <Col md="12">
                            {this.state.budgetPressed ? <ExpensesBudget setBudget={this.state.setBudget} setSitebarBudget={this.setBudget}/> : <div></div>}
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Sitebar
