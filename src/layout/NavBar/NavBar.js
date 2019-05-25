import React from 'react';
import {NavLink} from 'react-router-dom'

import * as routes from '../../constants/routes'

import './NavBar.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'


import Button from 'react-bootstrap/Button'

import logo from '../../logo.svg';

const NavBar = () =>
<div>
<Navbar bg="light" variant="light">
    <Navbar.Brand href="/"> <img
        alt=""
        src= {logo}
        width="30"
        height="30"
        className="d-inline-block align-top"
      />
      {'Our Site Title'}</Navbar.Brand>
    <Nav className="mr-auto">
        <NavLink exact to = {routes.HOME}><Nav.Link href="/"></Nav.Link></NavLink>
        <NavLink to={routes.PARKS} activeClassName = "selected"> <Nav.Link href="/parks">Parks</Nav.Link></NavLink>
        <NavLink to={routes.TODO} activeClassName = "selected"> <Nav.Link href="/activities">Things to Do</Nav.Link></NavLink>
        <NavLink to={routes.REGISTER} activeClassName = "selected"><Button href = "/register">REGISTER</Button></NavLink>
        <NavLink to={'/login'} activeClassName = "selected"><Button href = "/login">LOGIN</Button></NavLink>
 
    </Nav>
  </Navbar>
     
    
</div>

export default NavBar