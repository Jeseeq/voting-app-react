import React , {Component} from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

import {LinkContainer} from 'react-router-bootstrap';
import {Link} from 'react-router';

export default class Header extends Component {

  handleLogout(e) {
    e.preventDefault();
    this.props.logout();
  }
  render(){
    const {AuthenticatedUser, user} = this.props;
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
          <LinkContainer active={false} to={{pathname: '/'}}>
            <NavItem  eventKey={1}>Home</NavItem>
          </LinkContainer>

          <NavDropdown eventKey={4} title="Browse" id="basic-nav-dropdown">
            <MenuItem eventKey={4.1}>Users</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={4.2}>Polls</MenuItem>
          </NavDropdown>

          {
            AuthenticatedUser ?
            <LinkContainer to={{pathname: '/polls'}}>
              <NavItem eventKey={2}><i className="fa fa-user"/> {user.username}</NavItem>
            </LinkContainer>
            : null
          }

          {
            AuthenticatedUser ?
            <LinkContainer to={{pathname: '/newpoll'}}>
              <NavItem eventKey={3}><i className="fa fa-plus"/> New poll</NavItem>
            </LinkContainer>
            : null
          }

          {
            !AuthenticatedUser ?
            <LinkContainer to={{pathname: '/signup'}}>
              <NavItem eventKey={6}>Signup</NavItem>
            </LinkContainer>
            : null
          }
          {
            !AuthenticatedUser ?
            <LinkContainer to={{pathname: '/login'}}>
              <NavItem eventKey={5}>Login</NavItem>
            </LinkContainer>
            :
            <NavItem eventKey={7} onClick={this.handleLogout.bind(this)}>
              Logout
            </NavItem>
          }
        </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
