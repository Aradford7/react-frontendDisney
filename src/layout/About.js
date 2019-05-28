import React from 'react'

import NavBar from './NavBar/NavBar'
import Footer from './Footer/Footer'
import Parallax from './Parallax/Parallax'
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Calender from './Calendar/Calender';

export const About = () =>(
    <div>
        <NavBar/>
        <h2>Hello World</h2>
        <p>This is the About Page</p>
        <Calender/>
        <Parallax/>

        <ButtonToolbar>
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="success">Success</Button>
                <Button variant="warning">Warning</Button>
                <Button variant="danger">Danger</Button>
                <Button variant="info">Info</Button>
                <Button variant="light">Light</Button>
                <Button variant="dark">Dark</Button>
                <Button variant="link">Link</Button>
        </ButtonToolbar>


        <Footer/>
    </div>
)