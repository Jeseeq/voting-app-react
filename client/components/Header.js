import React , {Component} from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

import {LinkContainer} from 'react-router-bootstrap';


export default class Header extends Component {
  render(){
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Voting App</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>

          <LinkContainer to={{pathname: '/'}} onlyActiveOnIndex={true}>
            <NavItem eventKey={1}>Home</NavItem>
          </LinkContainer>

          <LinkContainer to={{pathname: '/polls'}}>
            <NavItem eventKey={2}>My polls</NavItem>
          </LinkContainer>

          <LinkContainer to={{pathname: '/newpoll'}}>
            <NavItem eventKey={3}>New poll</NavItem>
          </LinkContainer>

          <NavDropdown eventKey={4} title="Username" id="basic-nav-dropdown">
            <MenuItem eventKey={4.1}>Profile</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={4.2}>Logout</MenuItem>
          </NavDropdown>
        </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
