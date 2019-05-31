import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import Form from "react-bootstrap/Form";
// import UserItinerary from '../UserItinerary/UserItinerary'
import { Container, Row, Col } from "react-bootstrap";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";

import "./Itinerary.css";
import UserItinerary from "../UserItinerary/UserItinerary";

class Itinerary extends Component {
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.state = {
      modal: false,
      lgShow: false,
      name: "",
      park: "",
      selectedDay: undefined
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    // e.preventDefault();
    this.props.createTrip(this.state);
    this.setState({
      modal: false
    });
  };

  handleDayClick(day, { selected, disabled }) {
    if (disabled) {
      // Day is disabled, do nothing
      return;
    }
    if (selected) {
      // Unselect the day if already selected
      this.setState({ selectedDay: undefined });
      return;
    }
    this.setState({ selectedDay: day });
  }

  render() {
    const lgClose = () => this.setState({ lgShow: false });
    const externalCloseBtn = (
      <button
        className="close"
        style={{ position: "absolute", top: "15px", right: "15px" }}
        onClick={this.toggle}
      >
        &times;
      </button>
    );
    return (
      <div>
        <div>{/* <NavBar /> */}</div>

        <h2>My Itineraries</h2>
        <p>Welcome! You have no itineraries yet</p>
        <p>
          {" "}
          This should be the Itinarary show page for an Individual User after
          they logged in
        </p>

        <div className="Modal">
          <h1> Create A New Itinerary</h1>

          <div className="User">
            <UserItinerary
              userTrips={this.props.userTrips}
              deleteTrip={this.props.deleteTrip}
              getTrips={this.props.getTrips}
            />
          </div>

          <div className="formModal">
            <Button color="danger" onClick={this.toggle}>
              {this.props.buttonLabel}Add A New Visit
            </Button>
            <Modal
              isOpen={this.state.modal}
              toggle={this.toggle}
              className={this.props.className}
              external={externalCloseBtn}
              size="lg"
              show={this.state.lgShow}
              onHide={lgClose}
            >
              <ModalHeader>Add new itinerary</ModalHeader>
              <ModalBody>
                <Form>
                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Visit Name</Form.Label>
                      <Form.Control
                        name="name"
                        type="text"
                        placeholder="Visit name is required."
                        onChange={this.handleChange}
                      />
                    </Form.Group>
                  </Form.Row>

                  <Form.Group as={Col} controlId="formGridPark">
                    <Form.Label>Which theme park are you attending?</Form.Label>
                    <Form.Control
                      as="select"
                      name="park"
                      onChange={this.handleChange}
                    >
                      <option>Choose...</option>
                      <option>Disneyland - Anaheim, California</option>
                      <option>
                        Disney Land California Adventures - Anaheim, California
                      </option>
                      <option>
                        Universal Studios Hollywood - Studios, City
                      </option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Row>
                    <Form.Group as={Col} xs={6} controlId="formGridDate">
                      <Form.Label>Which date will ?</Form.Label>

                      <DayPicker
                        onDayClick={this.handleDayClick}
                        selectedDays={this.state.selectedDay}
                        disabledDays={{ daysOfWeek: [0] }}
                      />
                      {this.state.selectedDay ? (
                        <p>
                          You clicked{" "}
                          {this.state.selectedDay.toLocaleDateString()}
                        </p>
                      ) : (
                        <p>Please select a day.</p>
                      )}
                    </Form.Group>
                  </Form.Row>
                </Form>
              </ModalBody>
              <ModalFooter>
                <Button
                  color="primary"
                  onClick={this.toggle}
                  onClick={this.handleSubmit}
                >
                  Do Something
                </Button>{" "}
                <Button color="secondary" onClick={this.toggle}>
                  Cancel
                </Button>
              </ModalFooter>
            </Modal>
          </div>
        </div>

        <div>
          <p>
            if there was any items already in user array show on this page, this
            will need to render a component that list previous itineraries and
            able to delete overrall array maybe
          </p>

          <Button>Delete</Button>
        </div>

        <div class="formhero">
          <Container>
            <Row>
              <Col lg={true}>
                <Container>
                  <Row>
                    <Col md={6} aria-label="first group" />
                    <Col md={6} aria-label="second group" />
                  </Row>
                </Container>
              </Col>
            </Row>
          </Container>
        </div>

        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Itinerary;
