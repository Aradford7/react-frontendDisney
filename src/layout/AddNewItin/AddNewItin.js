import React from 'react'


import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import { Container, Row, Col, Button} from 'react-bootstrap';
import '../AddNewItin/AddNewItin.css'

export const AddNewItin = () =>(
    <div>
        <NavBar/>

        <div class = "container">
        <h2>Hello World</h2>
        <p>This is the  New Intieray page Page</p>
        <p>Listed items from API or w/e user needs to add to their itinerary</p>
        <Container>
            <Row>
                <Col lg={8}>
                    <div class = "itinbox">
                        Add New Itinerary Box
                    </div>
                </Col>

                <Col lg={4}>
                    <div class = "crowdbox">
                        Crowd Projection Box
                    </div>
                </Col>
            </Row>

            <br/><br/>

            <Row>
                <Col lg={true}>
                <div class = "rideslist">
                    <h5 class="text-uppercase">Rides From 1 Single Park</h5>
                        <ul class="list-unstyled">
                            <li>Listed Item Number 1<br/><Button>Add</Button></li>
                            <li>Listed Item Number 2<br/><Button>Add</Button></li>
                            <li>Listed Item Number 3<br/><Button>Add</Button></li>
                            <li>Listed Item Number 4<br/><Button>Add</Button></li>            
                         </ul>
                </div>
                </Col>
              

                <Col lg={true} >
                <div class = "restlist">
                    <h5 class="text-uppercase">Food Places From 1 Single Park</h5>
                        <ul class="list-unstyled">
                            <li>Listed Item Number 1<br/><Button>Add</Button></li>
                            <li>Listed Item Number 2<br/><Button>Add</Button></li>
                            <li>Listed Item Number 3<br/><Button>Add</Button></li>
                            <li>Listed Item Number 4<br/><Button>Add</Button></li>            
                        </ul> 
                </div>
                </Col>
            </Row>
        </Container>
        </div>


        <Footer/>
    </div>
       
)