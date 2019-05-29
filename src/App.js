import React, { Component } from "react";
import { Home } from "./layout/Home/Home";
import { About } from "./layout/About";
import { Contact } from "./layout/Contact/Contact";
import Login from "./layout/Login/Login";
import Register from "./layout/Register/Register";
import { Logout } from "./layout/Logout";
import Itinerary from "./layout/Itinerary/Itinerary";
import { AddNewItin } from "./layout/AddNewItin/AddNewItin";
import { Activities } from "./layout/Activities/Activities";
import { Parks } from "./layout/Parks/Parks";

import { NoMatch } from "./layout/NoMatch";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//import * as routes from './constants/routes'
////////STYLING STUFF//////////
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { library } from "@fortawesome/fontawesome-svg-core";
//import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faHamburger,
  faHeart,
  faClock,
  faUsers
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithubAlt,
  faApple,
  faAndroid
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faHamburger,
  faHeart,
  faClock,
  faUsers,
  faGithubAlt,
  faApple,
  faAndroid,
  fab
);

////////////////////////////////
class App extends Component {
  state = {
    modal: false
  };

  componentDidMount() {
    this.getTrips();
  }

  handleRegister = async data => {
    try {
    } catch (err) {
      console.log(err);
    }
  };

  getTrips = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/v1/", {
        credentials: "include"
      });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/login" component={Login} />
            <Route path="/register" render={props => <Register {...props} />} />
            <Route path="/logout" component={Logout} />
            <Route path="/itinerary" component={Itinerary} />
            <Route path="/newitinerary" component={AddNewItin} />
            <Route path="/activities" component={Activities} />
            <Route path="/parks" component={Parks} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
