import React, {Component} from 'react';
import {Home} from './layout/Home/Home'
import {About} from './layout/About'
import {Contact} from './layout/Contact/Contact'
import {Login} from './layout/Login/Login'
import {Register} from './layout/Register/Register'
import {Logout} from './layout/Logout'
import {Itinerary} from './layout/Itinerary/Itinerary'
import {AddNewItin} from './layout/AddNewItinerary/AddNewItin'
import {NoMatch} from './layout/NoMatch'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

//import * as routes from './constants/routes'
////////STYLING STUFF//////////
import './App.css';
import {library} from '@fortawesome/fontawesome-svg-core'
//import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons';
import {faHamburger,faHeart,faClock,faUsers} from '@fortawesome/free-solid-svg-icons'
import {faGithubAlt,faApple,faAndroid,} from '@fortawesome/free-brands-svg-icons';



library.add(faHamburger,faHeart,faClock,faUsers, faGithubAlt,faApple,  faAndroid,fab)



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
            <Route path = "/itinerary" component = {Itinerary}/>
            <Route path ="/newitinerary" component = {AddNewItin}/>
            <Route component = {NoMatch}/>
          </Switch>
        </Router>
    </React.Fragment>
    
  
    );
  }
}

export default App;
