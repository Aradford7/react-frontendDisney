import React from 'react'
import NavBar from '../../layout/NavBar/NavBar'
import Carosel from '../../layout/Carosel/Carosel'
import './Home.css'


export const Home = () =>(
    <div>
        <NavBar/>
        <Carosel/>
        <h2>Hello World</h2>
        <p>This is the Home Page</p>

    </div>
)