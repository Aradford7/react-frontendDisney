import React from 'react';
import {NavLink} from 'react-router-dom'

import * as routes from '../../constants/routes'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

import logo from '../../logo.svg';
import './NavBar.css'


const NavBar = () =>
<div>
<Navbar bg="light" variant="light" class = "navbar">
    <Navbar.Brand href="/"> <img
        alt=""
        src= {logo}
        width="30"
        height="30"
        className="d-inline-block align-top"
      /><span>{' MY PARK PLANNER'}</span></Navbar.Brand>
    <Nav className="mr-auto">
        <NavLink exact to = {routes.HOME}><Nav.Link href="/"></Nav.Link></NavLink>
    </Nav>
    <Nav className="justify-content-end">
        <NavLink  to={routes.PARKS} activeClassName = "selected"> <Nav.Link class = "plink" href="/parks">Parks</Nav.Link></NavLink>
        <NavLink  to={routes.TODO} activeClassName = "selected"> <Nav.Link href="/activities">Things to Do</Nav.Link></NavLink>
        <NavLink  to={routes.REGISTER} activeClassName = "selected"><ButtonToolbar><ButtonGroup  className="mr-2" aria-label="First group"><Button class ="btn" href = "/register">REGISTER</Button></ButtonGroup></ButtonToolbar></NavLink>
        <NavLink  to={'/login'} activeClassName = "selected"><ButtonToolbar><ButtonGroup aria-label="Second group"><Button href = "/login">LOGIN</Button></ButtonGroup></ButtonToolbar></NavLink>
    </Nav>
  </Navbar>
     
    
</div>

export default NavBar