import React from 'react'
import NavBar from '../../layout/NavBar/NavBar'
import Carosel from '../../layout/Carosel/Carosel'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './Home.css'


export const Home = () =>(
    <div>
        <NavBar/>
        <Carosel/>
        <div class = "container" >
        <h2>Attraction Reccommendations</h2><br/>
        <p>We love Amusement Parks, and we love helping families make the most of their visit to the parks. So, We created a Amusement Park Planner to help your family answer the most common questions...<br/> <br/> where to eat? or  what ride next?<br/> <br/>
        We created a site where you can login and create a park planner by adding rides and resturants from the park so you can plan out your day and make most of your trip by sharing this with other family members.</p>
        </div>

        <div class = "icocolum">
            <Container>
                <Row>
                    <Col xs={6}>
                        <h4>Favorite Attractions</h4>
                        <p>You select your favorite attractions and plan when you want to go.</p>
                    </Col>
                    <Col sm={true}>
                        <h4>Wait Times</h4>
                        <p>We use real-time and historic wait time information to guide you to the attractions with the shortest lines.</p>
                    </Col>
                    <Col sm={true}>
                        <h4>Resturant Recommendations</h4>
                        <p>See a list of resturants the park has to offer! Browse the selection and plan out where to eat, before the crowds</p>
                    </Col>
                    <Col sm={true}>
                        <h4>Efficiency</h4>
                        <p>Make most we our app to plan out the perfect family vacation or make magical memories with friends</p>
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
    </div>
)