import React, { Component } from "react";
//import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { Parallax } from "react-parallax";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { withRouter } from "react-router-dom";
import "./Profile.css";

class Profile extends Component {
  state = {
    currentUser: {},
    username: "",
    password: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div className="loginpg">
        {/* <NavBar /> */}

        <Parallax
          blur={0}
          bgImage={require("../Parallax/images/6.jpg")}
          bgImageAlt=""
          strength={200}
        >
          <div style={{ height: "500px" }} />
        </Parallax>

        <div class="logincontainer">
          <br />
          <h2>Hello {this.props.currentUser.username}</h2>
          <h3>Keep us up to date! Edit your information here!</h3>
        </div>

        <div class="logincontainer">
          <Form
            className="formcontainer"
            onSubmit={() => this.props.editUser(this.props.currentUser.id)}
          >
            <Form.Group controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                name="username"
                type="username"
                onChange={this.handleChange}
                // value={this.props.currentUser.username}
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

            <Button variant="primary" type="submit">
              Edit Account
            </Button>
          </Form>
        </div>

        <Parallax
          blur={0}
          bgImage={require("../Parallax/images/8.jpg")}
          bgImageAlt=""
          strength={200}
        >
          <div style={{ height: "500px" }} />
        </Parallax>

        <div>
          <Footer />
        </div>
      </div>
    );
  }
}
export default withRouter(Profile);
