import React from "react";
import Footer from "./Footer/Footer";
import Parallax from "./Parallax/Parallax";
import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import {Container, Row, Col} from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const About = () => (
  <div>
    <div class = "readme" style ={{margin:"100px"}} >
    <h1>Hello World!</h1> <br/>
    <h2>Amusement Park Planner</h2> 
    <h3>Created By: Chase Lancaster and Ashley Radford</h3>

    <h3>Description</h3>
    <p>Can create a user or login and create a trip to a theme park destination.<br/>
      Users can create, see, and delete their trips.
      Users can also update their profile. <br/></p>


    <h3>Plans and Wireframing</h3>

    <h3>Technologies Used:</h3>
    <li> HTML5 and CSS, Javascript</li>
    <li> React</li>
    <li>Flask</li>
    <li>sqLite</li>
    <li>Express-Session and Bcrypt</li>
    <li>React Bootstrap4, Reactstrap, React-Date-picker, React-parallax, font-awesome library,</li>

    <h3>Future Implements</h3>
    <li>Users can be directed to the itinerary page and able to add rides to their itinerary.</li>
    <li>Users are able to see their finalized itinerary and able to update it.</li>
    <li>Implementing Theme-parks-api to be able to project wait-times, rides list, and more information from other amusement parks.</li>

    <h3>Bugs</h3>
    <li>minor update needs to be refreshed</li>
    <li>Run on Localhost:3000</li>
    </div>

    <div class="hero">
      <Container>
        <Row>
          <Col lg={true}>
            <Container>
              <Row>
                <Col md={6} aria-label="first group">
                  <div class="colGithub">
                    <FontAwesomeIcon
                      icon={["fab", "github"]}
                      size="6x"
                      style={{ color: "white" }}
                    />
                    <Row>
                    <a  className="atag" style ={{color:"black"}} href='/https://github.com/chaselancaster/flask-api-themeparks-v2'>Flask Back-End</a>
                    </Row>
                  </div>
                </Col>

                <Col md={6} aria-label="second group">
                  <div class="colGithub">
                    <FontAwesomeIcon
                      icon={["fab", "github"]}
                      size="6x"
                      style={{ color: "white" }}
                    />
                    <Row>
                    <a  className = "atag" style ={{color:"black"}}  href ='/https://github.com/Aradford7/react-frontendDisney'>React Front-End</a>
                    </Row>
                  </div>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </div> <br/><br/><br/><br/>

    <Footer />
  </div>
);
