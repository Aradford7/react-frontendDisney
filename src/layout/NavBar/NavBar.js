import React from 'react';
import {NavLink} from 'react-router-dom'

import * as routes from '../../constants/routes'

import './NavBar.css'

const NavBar = () =>
<div>
    <NavLink exact active ClassName = "selected" to = {routes.HOME}>HOME</NavLink>
    <NavLink to={routes.USERS} activeClassName = "selected">USERS</NavLink>
    <NavLink to={routes.POSTS} activeClassName = "selected">POSTS</NavLink>
    <NavLink to={routes.REGISTER} activeClassName = "selected">REGISTER</NavLink>
    <NavLink to={'/login'} activeClassName = "selected">LOGIN</NavLink>
</div>

export default NavBar