import React from 'react'
import Rides from "../disneyland/rides";
import {Container, Row, Col} from 'react-bootstrap'
export const Disneyland = () =>(
    <div>
        <Container>
            <Row>
                <Col>
                    <h1>Disneyland Rides</h1>
                        {Rides.map((r, i) => {
                        return <option>{r}</option>;
                        })}
  
                </Col>
        
                <Col>
                    <h1>Disneyland Restruants</h1>
                </Col>
            </Row>
        </Container>
    </div>
)