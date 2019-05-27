import React from 'react'
import NavBar from '../../layout/NavBar/NavBar'
import Carosel from '../../layout/Carosel/Carosel'
import Footer from '../../layout/Footer/Footer'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import logo from '../../logo.svg';

import './Home.css'

export const Home = () =>(
    <div>
        <NavBar/>
        <Carosel/>
        <div class = "container" >
        <br/>
        <h2 class = "title">Attraction Recommendations</h2>
        <img
                alt=""
                src= {logo}
                width="30"
                height="30"
                className="d-inline-block align-top"/>
        <br/>
        <p>We love Amusement Parks, and we love helping families make the most of their visit to the parks. So, We created a Amusement Park Planner to help your family answer the most common questions...<br/> <br/> Where to eat? or  What ride next?<br/> <br/>
        We created a site where you can login and create a park planner by adding rides and resturants from the park so you can plan out your day and make most of your trip by sharing this with other family members.</p>
        </div>

        <div class = "icocolum">
            <Container>
                <Row>
                    <Col md={3} aria-label="first group">
                    <div class = "colheart">
                        <FontAwesomeIcon icon = "heart" size="3x"/>
                        <h4>Favorite Attractions</h4>
                        <p>You select your favorite attractions and plan when you want to go.</p>
                    </div>
                    </Col>
                    <Col md={3} aria-label="second group">
                    <div class = "colclock">
                        <FontAwesomeIcon icon = "clock" size="3x"/>
                        <h4>Wait Times</h4>
                        <p>Using wait time information from themeparks api to guide you to the attractions with the shortest lines.</p>
                    </div>
                    </Col>
                    <Col md={3}aria-label="third group" >
                    <div class = "colhamburger">
                        <FontAwesomeIcon icon = "hamburger" size="3x"/>
                        <h4>Resturants</h4>
                        <p>See a list of resturants the park has to offer! Browse the selection,plan out where to eat, before the crowds</p>
                    </div>
                    </Col>
                    <Col md={3} aria-label="forth group">
                    <div class = "colusers">
                        <FontAwesomeIcon icon = "users"size="3x"/>
                        <h4>Efficiency</h4>
                        <p>Make most we our app to plan out the perfect family vacation or make magical memories with friends</p>
                    </div>
                    </Col>
                </Row>
            </Container>
        </div>

        <div class = "hero">
        <Container>
            <Row>
              <Col lg={true}>
              <Container>
                <Row>
                    <Col md={6} aria-label="first group">
                    <div class = "colAndriod">
                        <FontAwesomeIcon icon={['fab', 'android']} size="6x"/>
                        <h4>Android App</h4>
                    </div>
                    </Col>
                
                    <Col md={6} aria-label="second group">
                    <div class = "colApple">      
                        <FontAwesomeIcon icon={['fab', 'apple']} size="6x"/>
                        <h4>IOS App</h4>
                    </div>
                    </Col>
                </Row>
            </Container>
              </Col>
            </Row>
        </Container>
        </div>

        <div class = "itineraryinfo">
        <Container>
            <Row>
              <Col lg={true}>
              <br/><br/>
              <h1 class = "title">Theme Park Itineraries</h1>
              <img
                alt=""
                src= {logo}
                width="30"
                height="30"
                className="d-inline-block align-top"/>
              <p>Planning your visit to a themepark is difficult, time-consuming, stressful task. Let us help you create the perfect theme park experience with our itinerary for your family and friends.
                  <br/> We currently support Disneyland, Disneyland California Adventures, 
                  <br/>and Universal Studios Hollywood!</p>
                  <Button class = "btn" variant="primary" href="/login" type="submit">LEARN MORE!</Button>
              </Col>
            </Row>
        </Container>
        </div>

    <div class = "pics">
                <Row lg = {true}>
                     <Col md={4} aria-label="first group">
                     <Card style={{ width: '25rem' }}>
                         <Image  
                            width = "400px"
                            height = "300px"
                            src="https://cdn.ventrata.com/image/upload/ar_1.5,c_fill,dpr_3.0,f_jpg,w_400/v1506370830/vimwsuqqtctakrxba5r6.jpg" rounded/>

                                <Card.Body><a href = "https://disneyland.disney.go.com/">Disneyland - Anaheim, CA</a></Card.Body>
                            </Card>
                    </Col>

                    <Col md={4} aria-label="second group">
                    <Card style={{ width: '25rem' }}>
                        <Image 
                            width = "400px"
                            height = "300px"
                            src="https://www.discoverlosangeles.com/sites/default/files/styles/hero/public/images/2019-01/USH_Tour_Yuri%201.jpg" rounded  />
                                <Card.Body><a href = "https://www.universalstudioshollywood.com/">Universal Studios Hollywood -Universal City, CA</a></Card.Body>
                            </Card>
                    </Col>

                    <Col md= {4} aria-label="third group">
                    <Card  style={{ width: '25rem' }}> 
                        <Image  
                            width = "400px"
                            height = "300px"
                            src="https://secure.cdn1.wdpromedia.com/resize/mwImage/1/640/360/75/dam/wdpro-assets/dlr/gallery/destinations/california-adventure-park/disney-california-adventure-gallery00.jpg" rounded />
                                <Card.Body><a href = "https://disneyland.disney.go.com/en-ca/destinations/disney-california-adventure/">Disney California Adventure - Anaheim, CA</a></Card.Body>
                        </Card>
                    </Col>
                </Row>
       
        </div>

        <div>
            <Footer/>
        </div>
    </div>

)