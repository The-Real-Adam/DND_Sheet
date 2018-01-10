import React, { Component } from 'react';
import {Button, Navbar, NavItem, Nav} from 'react-bootstrap'

class Home extends Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect>
    		<Navbar.Header>
    			<Navbar.Brand>
    				<a href="/">Critical-Path</a>
    			</Navbar.Brand>
    			<Navbar.Toggle />
    		</Navbar.Header>
    		<Navbar.Collapse>
    			<Nav>
    				<NavItem eventKey={1} href="/login">
    					Sign In
    				</NavItem>
    				<NavItem eventKey={2} href="/register">
    					Register
    				</NavItem>
    			</Nav>
    		</Navbar.Collapse>
    	</Navbar>
    );
  }
}

export default Home;
