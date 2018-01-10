import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Router, Route, Switch, browserHistory } from 'react-router'
import Login from './components/Login'
import History from './components/History'
import Home from './components/Home'
import Register from './components/Register'


class App extends Component {
 render() {
   return (
     <Router history={History}>
     <div>
      <Route path='/' component={Home} />
       <Route path='/login' component={Login} />
       <Route path='/register' component={Register} />
      </div>
     </Router>
   );
 }
}

export default App;
