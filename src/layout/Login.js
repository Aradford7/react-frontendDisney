import React from 'react'
import NavBar from './NavBar/NavBar'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'




export const Login = () =>(
    <div>
    <NavBar/>
    <div class = "container">
        <h2>Log in</h2>
        <h3>Use your email and password to log in.</h3>
       <Form>
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
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
                <Button variant="primary" type="submit">
                Submit
                </Button>
        </Form>

    </div>
</div>
)