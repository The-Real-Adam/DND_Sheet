import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login'
import { Router, Route, Switch, browserHistory } from 'react-router'

class App extends Component {
 render() {
   return (
     <Router history={browserHistory}>
       <Route path='/login' component={Login} />
     </Router>
   );
 }
}

export default App;
