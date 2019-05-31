import React from "react";
import Footer from "../Footer/Footer";
import "./Contact.css";
import {Container, Row, Col, Button, Card, ButtonGroup} from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



export const Contact = () => (
  <div>
    <br/>
    <h2>Hello World! <br/>
      Here's more about us!</h2> <br/><br/>
      <Container>
          <Row>
            <Col><h1>Chase Lancaster</h1></Col>
            <Col><h1>Ashley Radford</h1></Col>
          </Row>

          <Row>
            <Col><br/>
                <Card style={{ width: '10rem', left: '12rem'}}>
                    <Card.Img variant="top" src="https://i.imgur.com/0sdGMYT.jpg" />
                </Card>
            </Col>

            <Col><br/>
                <Card style={{ width: '10rem' , left: '12rem'}}>
                    <Card.Img variant="top" src="https://i.imgur.com/OaSuJTZ.jpg" />
                </Card>
            </Col>
          </Row>

          <Row>
            <Col><br/>
            <ButtonGroup className="mr-2" aria-label="First group">
            <Button href = "https://www.linkedin.com/in/chaseblancaster/" class="colLinkedIn">
                    <FontAwesomeIcon
                      icon={["fab", "linkedin"]}
                      size="3x"
                      style={{ color: "white" }}
                    />
            </Button>
            </ButtonGroup>

            <ButtonGroup className="mr-2" aria-label="second group">
            <Button  href = "https://github.com/chaselancaster" class="colGithub">
                    <FontAwesomeIcon
                      icon={["fab", "github"]}
                      size="3x"
                      style={{ color: "white" }}
                    />
              </Button>
              </ButtonGroup>

            </Col>

            <Col><br/>
            <ButtonGroup className="mr-2" aria-label="First group">
            <Button  href = "https://www.linkedin.com/in/ashley-radford/" class="colLinkedIn">
                    <FontAwesomeIcon
                      icon={["fab", "linkedin"]}
                      size="3x"
                      style={{ color: "white" }}
                    />
            </Button>
            </ButtonGroup>

            <ButtonGroup className="mr-2" aria-label="second group">
            <Button  href = "https://github.com/Aradford7/react-frontendDisney" class="colGithub">
                    <FontAwesomeIcon
                      icon={["fab", "github"]}
                      size="3x"
                      style={{ color: "white" }}
                    />
              </Button>
            </ButtonGroup>
            </Col>
          </Row>


          <Row>
            <Col>Cool Bio Chase</Col>
            <Col>Cool Bio Ashley</Col>
          </Row>
    </Container>
    <Footer />
  </div>
);
