import React, {Component} from 'react';
import {Home} from './layout/Home'
import {About} from './layout/About'
import {Contact} from './layout/Contact'
import {Login} from './layout/Login'
import {Register} from './layout/Register'
import {Logout} from './layout/Logout'
import {NoMatch} from './layout/NoMatch'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
//import {Switch, Route} from 'react-router-dom'


//import * as routes from './constants/routes'
////////STYLING STUFF//////////

import './App.css';

class App extends Component {
  state = {

  }
  render(){
  return (
    <React.Fragment>
        <Router>
          <Switch>
            <Route exact path = "/" component = {Home}/>
            <Route path = "/about" component = {About}/>
            <Route path = "/contact" component = {Contact}/>
            <Route path = "/login" component = {Login}/>
            <Route path = "/register" component = {Register}/>
            <Route path = "/logout" component = {Logout}/>
            <Route component = {NoMatch}/>
          </Switch>
        </Router>
    </React.Fragment>
    
  
    );
  }
}

export default App;
