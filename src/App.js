import React, { Component } from "react";
import { Home } from "./layout/Home/Home";
import { About } from "./layout/About";
import { Contact } from "./layout/Contact/Contact";
import Login from "./layout/Login/Login";
import Register from "./layout/Register/Register";
import Profile from "./layout/Profile/Profile";
import Logout from "./layout/Logout";
import Itinerary from "./layout/Itinerary/Itinerary";
import AddNewItin from "./layout/AddNewItin/AddNewItin";
import ShowItin from "./layout/ShowItin/ShowItin";
import { Parks } from "./layout/Parks/Parks";
import { Disneyland } from "./layout/disneyland/disneyland";
import { Ush } from "./layout/ush/ush";
import { CalAdventures } from "./layout/caladventures/caladventures";
import { NoMatch } from "./layout/NoMatch";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./layout/NavBar/NavBar";

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
  faAndroid,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import { async } from "q";

library.add(
  faHamburger,
  faHeart,
  faClock,
  faUsers,
  faGithubAlt,
  faApple,
  faAndroid,
  faLinkedin,
  fab
);

////////////////////////////////
class App extends Component {
  state = {
    modal: false,
    logged: false,
    currentUser: {},
    userTrips: []
  };

  componentDidMount() {
    const user = localStorage.getItem("current");
    const parsedUser = JSON.parse(user);
    if (user) {
      this.setState(
        {
          currentUser: parsedUser
        },
        () => {
          this.getTrips();
        }
      );
    }
  }
// fetch(process.env.REACT_APP_BACKEND_URL + '/users/registration', {
  handleRegister = async data => {
    try {
      const registerCall = await fetch(process.env.REACT_APP_BACKEND_URL + '/users/registration',{
          method: "POST",
          body: JSON.stringify(data),
          credentials: "include",
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
      const response = await registerCall.json();
      console.log(response, "response from registerCall");
      // if (response.message === "success") {
      this.setState({
        logged: true,
        currentUser: response
      });
      // }
    } catch (err) {
      console.log(err);
    }
  };

  handleLogin = async data => {
    try {
      const loginCall = await fetch(process.env.REACT_APP_BACKEND_URL + '/users/login', {
        method: "POST",
        body: JSON.stringify(data),
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        }
      });
      const response = await loginCall.json();
      console.log(response, "response for loginCall");
      if (response.message === "success") {
        localStorage.setItem("current", JSON.stringify(response.user));
        this.setState(
          {
            logged: true,
            currentUser: response.user
          },
          () => {
            this.getTrips();
          }
        );
      }
    } catch (err) {
      console.log(err);
    }
  };

  createTrip = async data => {
    try {
      const tripCall = await fetch(process.env.REACT_APP_BACKEND_URL + '/api/v1/trips', {
        method: "POST",
        body: JSON.stringify(
          Object.assign(data, { userId: this.state.currentUser.id })
        ),
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        }
      });
      const response = await tripCall.json();
      console.log(response, "<-- response for createTrip");
    } catch (err) {
      console.log(err);
    }
  };

  getTrips = async data => {
    try {
      const tripsCall = await fetch(process.env.REACT_APP_BACKEND_URL + '/users/${this.state.currentUser.id}',
        {
          method: "GET",
          credentials: "include",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
      console.log(tripsCall, "<-- tripsCall in getTrips");
      const response = await tripsCall.json();
      console.log(response, "<-- parsed response in getTrips");
      this.setState({
        userTrips: response
      });
    } catch (err) {
      console.log(err);
    }
  };

  doLogout = async () => {
    await fetch(process.env.REACT_APP_BACKEND_URL + '/users/logout');
    localStorage.clear();
    this.setState({
      currentUser: null,
      logged: false,
      userTrips: []
    });
  };

  deleteTrip = async id => {
    await fetch(process.env.REACT_APP_BACKEND_URL + '/api/v1/trips/${id}', {
      method: "DELETE",
      headers: {
        "Content-Type": "application"
      }
    });
    this.getTrips();
  };

  editUser = async id => {
    try {
      const editCall = await fetch(process.env.REACT_APP_BACKEND_URL + '/users/${id}', {
        method: "PUT",
        headers: {
          "Content-Type": "application"
        }
      });
      const response = await editCall.json();
      console.log(response, "<-- response for editUser");
      this.setState({
        currentUser: response.user
      });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <React.Fragment>
        <Router>
          <NavBar logged={this.state.logged} doLogout={this.doLogout} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route
              path="/profile"
              render={props => (
                <Profile
                  {...props}
                  currentUser={this.state.currentUser}
                  editUser={this.editUser}
                />
              )}
            />
            <Route
              path="/login"
              render={props => (
                <Login {...props} handleLogin={this.handleLogin} />
              )}
            />
            <Route
              path="/register"
              render={props => (
                <Register {...props} handleRegister={this.handleRegister} />
              )}
            />
            <Route path="/logout" component={Logout} />
            <Route
              path="/itinerary"
              render={props => (
                <Itinerary
                  {...props}
                  createTrip={this.createTrip}
                  userId={this.state.currentUser}
                  userTrips={this.state.userTrips}
                  deleteTrip={this.deleteTrip}
                  getTrips={this.getTrips}
                />
              )}
            />
            <Route path="/newitinerary" component={AddNewItin} />
            <Route path="/show" component={ShowItin} />
            <Route path="/parks" component={Parks} />
            <Route path="/disneyland" component={Disneyland} />
            <Route path="/caladventures" component={CalAdventures} />
            <Route path="/ush" component={Ush} />
            <Route
              path="/logout"
              render={props => <Logout {...props} doLogout={this.doLogout} />}
            />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
