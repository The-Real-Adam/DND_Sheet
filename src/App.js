import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Router, Route, Switch, browserHistory } from 'react-router'
import Login from './components/Login'
import History from './components/History'
import Home from './components/Home'
import FourOhFour from './components/FourOhFour'
import Register from './components/Register'
import SheetList from './components/SheetList'
import Sheet from './components/Sheet'
import CharacterCreation from './components/CharacterCreation'


class App extends Component {
 render() {
   return (
    <Router history={History}>
      <div>
        <Route path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/FourOhFour' component={FourOhFour} />
        <Route path='/SheetList' component={SheetList} />
        <Route path='/Sheet' component={Sheet} />
        <Route path='/CharacterCreation' component={CharacterCreation} />

      </div>
    </Router>
   );
 }
}

export default App;
