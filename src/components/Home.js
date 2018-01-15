import React, { Component } from 'react';
import './home.css'
import {Button, Navbar, NavItem, Nav} from 'react-bootstrap'
import Cookies from 'universal-cookie'

class Home extends Component {

  constructor(props){
    super(props)
    this.state = {
      authorized:false
    }
  }
  componentWillMount(){
    const cookies = new Cookies();
    const myCookie = Boolean(cookies.get('dnd'));
    // console.log(myCookie);
    if(myCookie){
      this.setState({
        authorized:true
      })
    } else {
      this.setState({authorized:false})
    }
  }

  render() {
    return (
      <div className = 'NavBar'>
      <link href="https://fonts.googleapis.com/css?family=Berkshire+Swash|Press+Start+2P" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css?family=Berkshire+Swash|Press+Start+2P|VT323" rel="stylesheet"></link>
        <Navbar inverse collapseOnSelect>
      		<Navbar.Header>
      			<Navbar.Brand>
      				<a href="/">Critical-Path</a>
      			</Navbar.Brand>
      			<Navbar.Toggle />
      		</Navbar.Header>

      		<Navbar.Collapse>
      			<Nav>
              <NavItem eventKey={2} href="/register">{this.state.authorized ? null : 'Register'}
              </NavItem>
      				<NavItem eventKey={1} href="/login">{this.state.authorized ? 'Log Out' : 'Log In'}
      				</NavItem>
              <NavItem eventKey={3} href="/SheetList">{this.state.authorized ? 'My Sheets' : null}
              </NavItem>
              <NavItem eventKey={3} href="/CharacterCreation">{this.state.authorized ? 'Character Creator' : null}
              </NavItem>
      			</Nav>
      		</Navbar.Collapse>
      	</Navbar>
      </div>
    );
  }
}

export default Home;
