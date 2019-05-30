import React, { Component } from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import Parallax from "../Parallax/Parallax";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import {withRouter} from 'react-router-dom'
import "./Login.css";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleLogin(this.state);
    console.log(this.props)
    this.props.history.push( '/itinerary')
  };

  render() {
    return (
      <div className="loginpg">
        <NavBar />
        <Parallax />

        <div class="container">
          <div class="logincontainer">
            <br />
            <h2>Log in</h2>
            <h3>Use your email and password to log in.</h3>
          </div>

          <div class="logincontainer">
            <Form className="formcontainer" onSubmit={this.handleSubmit}>
              <Form.Group controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  name="username"
                  type="username"
                  placeholder="Enter Username"
                  onChange={this.handleChange}
                />
                <Form.Text className="text-muted">
                  Please enter your Username or Email.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  name="password"
                  type="password"
                  placeholder="Password"
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Form.Group controlId="formBasicChecbox">
                <Form.Check type="checkbox" label="Save Password" />
              </Form.Group>

              <Alert variant="light">
                <Alert.Link href="/register">
                  Don't have an account yet? Register now.{" "}
                </Alert.Link>
              </Alert>

              <Button variant="primary" type="submit">
                Sign In
              </Button>
            </Form>
          </div>
        </div>

        <div>
          <Footer />
        </div>
      </div>
    );
  }
}
export default  withRouter (Login);
