import React from "react";
import Footer from "../Footer/Footer";
import {
  Container,
  Row,
  Col,
  Form
} from "react-bootstrap";
import "../AddNewItin/AddNewItin.css";
import Rides from "../disneyland/rides";

export default class ShowItin extends React.Component {
  render() {
    return (
      <div>
        <div class="container">
          <h2>Showing Current Itinerary</h2>
          <p>This is the Show Updated Current Itinerary</p>

          <Container>
            <Row>
              <Col>
                <Row>
                  <h1> Time</h1>
                </Row>

                <Row>
                  <h2>10:00 AM</h2>
                </Row>

                <Row>
                  <h2>11:00 AM</h2>
                </Row>

                <Row>
                  <h2>12:00 AM</h2>
                </Row>

                <Row>
                  <h2>1:00 PM</h2>
                </Row>

                <Row>
                  <h2>2:00 PM</h2>
                </Row>

                <Row>
                  <h2>3:00 PM</h2>
                </Row>

                <Row>
                  <h2>4:00 PM</h2>
                </Row>

                <Row>
                  <h2>5:00 PM</h2>
                </Row>

                <Row>
                  <h2>6:00 PM</h2>
                </Row>

                <Row>
                  <h2>7:00 PM</h2>
                </Row>

                <Row>
                  <h2>8:00 PM</h2>
                </Row>

                <Row>
                  <h2>9:00 PM</h2>
                </Row>

                <Row>
                  <h2>10:00 PM</h2>
                </Row>
              </Col>

              <Col>
                <Row>
                  <h2>Rides</h2>
                </Row>

                <Row>
                  <Form.Group as={Col} controlId="formGridPark">
                    <Form.Label
                      as="select"
                      name="park"
                      onChange={this.handleChange}
                    >
                      {Rides.map((r, i) => {
                        return <div>{r}</div>;
                      })}
                    </Form.Label>
                  </Form.Group>
                </Row>

                <Row>
                  <Form.Group as={Col} controlId="formGridPark">
                    {/* <Form.Control
                      as="select"
                      name="park"
                      onChange={this.handleChange}
                    >
                      {Rides.map((r, i) => {
                        return <option>{r}</option>;
                      })}
                    </Form.Control> */}
                  </Form.Group>
                </Row>

                <Row>
                  <Form.Group as={Col} controlId="formGridPark">
                    {/* <Form.Control
                      as="select"
                      name="park"
                      onChange={this.handleChange}
                    >
                      {Rides.map((r, i) => {
                        return <option>{r}</option>;
                      })}
                    </Form.Control> */}
                  </Form.Group>
                </Row>

                <Row>
                  <Form.Group as={Col} controlId="formGridPark">
                    {/* <Form.Control
                      as="select"
                      name="park"
                      onChange={this.handleChange}
                    >
                      {Rides.map((r, i) => {
                        return <option>{r}</option>;
                      })}
                    </Form.Control> */}
                  </Form.Group>
                </Row>

                <Row>
                  <Form.Group as={Col} controlId="formGridPark">
                    {/* <Form.Control
                      as="select"
                      name="park"
                      onChange={this.handleChange}
                    >
                      {Rides.map((r, i) => {
                        return <option>{r}</option>;
                      })}
                    </Form.Control> */}
                  </Form.Group>
                </Row>

                <Row>
                  <Form.Group as={Col} controlId="formGridPark">
                    {/* <Form.Control
                      as="select"
                      name="park"
                      onChange={this.handleChange}
                    >
                      {Rides.map((r, i) => {
                        return <option>{r}</option>;
                      })}
                    </Form.Control> */}
                  </Form.Group>
                </Row>

                <Row>
                  <Form.Group as={Col} controlId="formGridPark">
                    {/* <Form.Control
                      as="select"
                      name="park"
                      onChange={this.handleChange}
                    >
                      {Rides.map((r, i) => {
                        return <option>{r}</option>;
                      })}
                    </Form.Control> */}
                  </Form.Group>
                </Row>

                <Row>
                  <Form.Group as={Col} controlId="formGridPark">
                    {/* <Form.Control
                      as="select"
                      name="park"
                      onChange={this.handleChange}
                    >
                      {Rides.map((r, i) => {
                        return <option>{r}</option>;
                      })}
                    </Form.Control> */}
                  </Form.Group>
                </Row>

                <Row>
                  <Form.Group as={Col} controlId="formGridPark">
                    {/* <Form.Control
                      as="select"
                      name="park"
                      onChange={this.handleChange}
                    >
                      {Rides.map((r, i) => {
                        return <option>{r}</option>;
                      })}
                    </Form.Control> */}
                  </Form.Group>
                </Row>

                <Row>
                  <Form.Group as={Col} controlId="formGridPark">
                    {/* <Form.Control
                      as="select"
                      name="park"
                      onChange={this.handleChange}
                    >
                      {Rides.map((r, i) => {
                        return <option>{r}</option>;
                      })}
                    </Form.Control> */}
                  </Form.Group>
                </Row>

                <Row>
                  <Form.Group as={Col} controlId="formGridPark">
                    {/* <Form.Control
                      as="select"
                      name="park"
                      onChange={this.handleChange}
                    >
                      {Rides.map((r, i) => {
                        return <option>{r}</option>;
                      })}
                    </Form.Control> */}
                  </Form.Group>
                </Row>
              </Col>
            </Row>
          </Container>

          <br />
        </div>
        <Footer />
      </div>
    );
  }
}