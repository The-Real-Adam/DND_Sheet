import React, { Component } from 'react';
import {Button} from 'react-bootstrap'

class Home extends Component {
  render() {
    return (
      <div className="App">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"></link>
        <header className="App-header">
          <h1 className="App-title">This is the SHIT!</h1>
        </header>
        <div>
          <a href="/"><Button className="search-button" waves='light'>Home</Button></a>
          <a href="/Login"><Button className="search-button" waves='light'>Sign In</Button></a>
          <a href="/Register"><Button className="search-button" waves='light'>Register</Button></a>

        </div>
      </div>
    );
  }
}

export default Home;
