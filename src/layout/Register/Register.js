import React from 'react'

import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import Parallax from '../Parallax/Parallax'
import './Register.css'

export const Register = () =>(
    <div>
    <NavBar/>
    <Parallax/>
    <div class = "container">
        <div class = "regicontainer">
        <br/>
        <h2>Register</h2>
        <h3>Create a new account.</h3>
       <Form className="formcontainer">
            <Form.Group controlId="formBasicUsername">
                <Form.Label>Create A Username</Form.Label>
                <Form.Control type="username" placeholder="Enter Username" />
                <Form.Text className="text-muted">
                 Username is required.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="username" placeholder="Enter Email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
                <Form.Text className = "text-muted">
                Password is required.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
                <Form.Text className = "text-muted">
                Please confirm  your password.
                </Form.Text>
            </Form.Group>
            
            <Alert variant="light">
                <Alert.Link href="/login">Already have an account? Log in now. </Alert.Link>
            </Alert>
                <Button variant="primary" type="submit" href="/itinerary"> Ok, Let's Go!</Button>
        </Form>
            </div>
        </div>

        <div>
            <br/>
            <Footer/>
        </div>
</div>
)

export default Register