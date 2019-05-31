import React from "react";
import Footer from "./Footer/Footer";
import Parallax from "./Parallax/Parallax";
import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import {Container, Row, Col} from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Calender from "./Calendar/Calender";

export const About = () => (
  <div>
    <h1>Hello World!</h1>
        <h3>Technologies Used:</h3>
        <h5>React  Flask  sqLite  </h5>


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
