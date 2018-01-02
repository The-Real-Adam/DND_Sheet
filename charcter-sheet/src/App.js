import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from 'react-bootstrap'

class App extends Component {
  render() {
    return (
      <div className="App">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"></link>
        <header className="App-header">
          <h1 className="App-title">This is the SHIT!</h1>
        </header>
        <div>
          <a href="LogIn"><Button className="search-button" waves='light'>Login</Button></a>
          <a href="Register"><Button className="search-button" waves='light'>Register</Button></a>

        </div>
      </div>
    );
  }
}

export default App;
