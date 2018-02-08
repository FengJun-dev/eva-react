import React from 'react';
// import {Route, Switch, Redirect, Link, NavLink, withRouter} from 'react-router-dom';
import {Navbar, MenuItem, NavItem, Nav, NavDropdown} from 'react-bootstrap';
// import {Link, Route}  from 'react-router-dom';
import {ProductList} from './Evaluation/Products';
import Account from './Account';


class Navgation extends React.Component {
    render() {
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">All Categories</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="/food">
                            Food
                        </NavItem>
                        <NavItem eventKey={2} href="/entertainment">
                            Entertainment
                        </NavItem>
                        <NavItem eventKey={3} href="/sports">
                            Sports
                        </NavItem>
                        <NavItem eventKey={4} href="/movie">
                            Movie
                        </NavItem>
                        <NavDropdown eventKey={5} title="More" id="basic-nav-dropdown">
                            <MenuItem eventKey={5.1}>Learning</MenuItem>
                            <MenuItem eventKey={5.2}>hello</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={5.3}>world</MenuItem>
                        </NavDropdown>
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="/account/signup">
                            Sign up
                        </NavItem>
                        <NavItem eventKey={2} href="/account/login">
                            Log in
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                <Navgation />
                <ProductList />
                <Account />
            </div>
        )
    }
}


export default App;
