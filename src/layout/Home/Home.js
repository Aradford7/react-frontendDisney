import React from 'react'
import NavBar from '../../layout/NavBar/NavBar'
import Carosel from '../../layout/Carosel/Carosel'
import Footer from '../../layout/Footer/Footer'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import './Home.css'

export const Home = () =>(
    <div>
        <NavBar/>
        <Carosel/>
        <div class = "container" >
        <br/>
        <h2 class = "title">Attraction Reccommendations</h2><br/>
        <p>We love Amusement Parks, and we love helping families make the most of their visit to the parks. So, We created a Amusement Park Planner to help your family answer the most common questions...<br/> <br/> Where to eat? or  What ride next?<br/> <br/>
        We created a site where you can login and create a park planner by adding rides and resturants from the park so you can plan out your day and make most of your trip by sharing this with other family members.</p>
        </div>

        <div class = "icocolum">
            <Container>
                <Row>
                    <Col md={3} aria-label="first group">
                    <div class = "colheart">
                        <FontAwesomeIcon icon = "heart"/>
                        <h4>Favorite Attractions</h4>
                        <p>You select your favorite attractions and plan when you want to go.</p>
                    </div>
                    </Col>
                    <Col md={3} aria-label="second group">
                    <div class = "colclock">
                        <FontAwesomeIcon icon = "clock"/>
                        <h4>Wait Times</h4>
                        <p>Using wait time information from themeparks api to guide you to the attractions with the shortest lines.</p>
                    </div>
                    </Col>
                    <Col md={3}aria-label="third group" >
                    <div class = "colhamburger">
                        <FontAwesomeIcon icon = "hamburger"/>
                        <h4>Resturants</h4>
                        <p>See a list of resturants the park has to offer! Browse the selection,plan out where to eat, before the crowds</p>
                    </div>
                    </Col>
                    <Col md={3} aria-label="forth group">
                    <div class = "colusers">
                        <FontAwesomeIcon icon = "users"/>
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
              <Col lg={true}>large hero place icons and stuff here for prettiness</Col>
            </Row>
        </Container>;
        </div>

    <div class = "pics">
      
            <Row>
              <Col lg={true}>
                <Row>
                     <Col aria-label="first group" md={4}>
                         <Image  
                            width = "400px"
                            height = "300px"
                            src="https://cdn.ventrata.com/image/upload/ar_1.5,c_fill,dpr_3.0,f_jpg,w_400/v1506370830/vimwsuqqtctakrxba5r6.jpg" rounded/>
  
                    </Col>

                    <Col md={4} aria-label="second group">
                        <Image 
                            width = "400px"
                            height = "300px"
                            src="https://www.discoverlosangeles.com/sites/default/files/styles/hero/public/images/2019-01/USH_Tour_Yuri%201.jpg" rounded  />
    
                    </Col>

                    <Col md= {4} aria-label="third group">
                        <Image  
                            width = "400px"
                            height = "300px"
                            src="https://secure.cdn1.wdpromedia.com/resize/mwImage/1/640/360/75/dam/wdpro-assets/dlr/gallery/destinations/california-adventure-park/disney-california-adventure-gallery00.jpg" rounded />
                    </Col>
                </Row>
              </Col>
            </Row>
       
        </div>

        <div>
            <Footer/>
        </div>
    </div>

)