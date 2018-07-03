import React, { Component } from "react"
import { Collapse, Navbar, NavbarBrand, NavbarToggler, Nav, NavItem, Button } from "reactstrap"

class Sitebar extends Component {
    constructor(props) {
        super(props)
        this.state = { isOpen: false }
    }

    toggler = () => {
        this.setState({ isOpen: !this.state.isOpen })
    }

    render() {
        return (
            <div>
                <Navbar color="faded" light expand="md">
                    <NavbarBrand href="/">PUT USERNAME HERE</NavbarBrand>
                    <NavbarToggler onClick={this.toggler} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Button onClick={this.props.clickLogout}>Logout</Button>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Sitebar
