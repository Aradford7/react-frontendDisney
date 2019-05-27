import React from 'react'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'

import './Login.css'


export const Login = () =>(
    <div>
    <NavBar/>
    <div class = "container">
        <div class = "logincontainer">
            <br/>
            <h2>Log in</h2>
            <h3>Use your email and password to log in.</h3>
        </div>
        <div class = "logincontainer">
       <Form className = "formcontainer">
            <Form.Group controlId="formBasicUsername">
               <Form.Label>Username</Form.Label>
                <Form.Control type="username" placeholder="Enter Username" />
                <Form.Text className="text-muted">
                 Please enter your Username or Email.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicChecbox">
                <Form.Check type="checkbox" label="Save Password" />
            </Form.Group>
            <Alert variant="light">
                <Alert.Link href="/register">Don't have an account yet? Register now. </Alert.Link>
            </Alert>
                <Button variant="primary" type="submit" href ="/itinerary">Sign In</Button>
        </Form>

        
        </div>
    </div>
    <div>
        <br/><br/>
        <Footer/>
    </div>
</div>
)