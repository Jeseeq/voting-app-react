import React , {Component} from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

import {LinkContainer} from 'react-router-bootstrap';
import {Link} from 'react-router';

export default class Header extends Component {
  render(){
    return (
      <Navbar>
        <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Voting App</Link>
            </Navbar.Brand>

          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>

          <LinkContainer to={{pathname: '/'}} onlyActiveOnIndex={true}>
            <NavItem eventKey={1}>Home</NavItem>
          </LinkContainer>

          <NavDropdown eventKey={4} title="Browse" id="basic-nav-dropdown">
            <MenuItem eventKey={4.1}>Users</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={4.2}>Polls</MenuItem>
          </NavDropdown>
          
          <LinkContainer to={{pathname: '/polls'}}>
            <NavItem eventKey={2}>Profile</NavItem>
          </LinkContainer>

          <LinkContainer to={{pathname: '/newpoll'}}>
            <NavItem eventKey={3}>New poll</NavItem>
          </LinkContainer>

          <LinkContainer to={{pathname: '/login'}}>
            <NavItem eventKey={5}>Login</NavItem>
          </LinkContainer>
          <LinkContainer to={{pathname: '/login'}}>
            <NavItem eventKey={6}>Logout</NavItem>
          </LinkContainer>
        </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
