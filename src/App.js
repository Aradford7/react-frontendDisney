import React, {Component} from 'react';
import {Home} from './layout/Home/Home'
import {About} from './layout/About'
import {Contact} from './layout/Contact'
import {Login} from './layout/Login/Login'
import {Register} from './layout/Register/Register'
import {Logout} from './layout/Logout'
import {NoMatch} from './layout/NoMatch'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

//import * as routes from './constants/routes'
////////STYLING STUFF//////////
import './App.css';
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHamburger} from '@fortawesome/free-solid-svg-icons'
import {faHeart} from '@fortawesome/free-solid-svg-icons'
import {faClock} from '@fortawesome/free-solid-svg-icons'
import {faUsers} from '@fortawesome/free-solid-svg-icons'
library.add(faHamburger)
library.add(faHeart)
library.add(faClock)
library.add(faUsers)
////////////////////////////////
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
