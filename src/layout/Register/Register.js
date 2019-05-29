import React from "react";
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import {Parallax} from 'react-parallax'
import './Register.css'

class Register extends React.Component {
    render(){
        
        return(
            <div >
    <NavBar/>
  
    
    <Parallax
      blur={0}
      bgImage={require('../Parallax/images/1.jpg')}
      bgImageAlt= ""
      strength={200}
      >  
      <div style={{ height: '500px' }} />
      </Parallax>
    

 
        <div class = "regicontainer">
        <br/>

        <h2>Register</h2>
        <h3>Create a new account.</h3>
        <Form className="formcontainer">
          <Form.Group controlId="formBasicUsername">
            <Form.Label>Create A Username</Form.Label>
            <Form.Control type="username" placeholder="Enter Username" />
            <Form.Text className="text-muted">Username is required.</Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter Email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
            <Form.Text className="text-muted">Password is required.</Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
            <Form.Text className="text-muted">
              Please confirm your password.
            </Form.Text>
          </Form.Group>

          <Alert variant="light">
            <Alert.Link href="/login">
              Already have an account? Log in now.{" "}
            </Alert.Link>
          </Alert>
          <Button variant="primary" type="submit" href="/itinerary">
            {" "}
            Ok, Let's Go!
          </Button>
        </Form>

            </div>
      
       
            <Parallax
        blur={0}
        bgImage={require('../Parallax/images/2.jpg')}
        bgImageAlt= ""
        strength={200}
        > 
        <div style={{ height: '500px' }} />
      </Parallax>

           
            <Footer/>
   
        </div>
        )

        }
    }

    export default Register


