import React from 'react'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'

import Button from 'react-bootstrap/Button'

export const Itinerary = () =>(
    <div>
        <NavBar/>
        <h2>My Itineraries</h2>
        <Button href ='/newitinerary'>Add</Button>
        <p>Welcome! You have no itineraries yet</p>
        <p> This should be the Itinarary show page for an Individual User after they logged in</p>


        <p>if there was any items already in user array show on this page, this will need to render a component that list previous itineraries and able to delete overrall array maybe</p>
        <Button>Delete</Button>
        <br/>    <br/>    <br/>    <br/>    <br/>    <br/>    <br/>    <br/>    <br/>
        <div>
            <Footer/>
        </div>
        <br/>
    </div>
)