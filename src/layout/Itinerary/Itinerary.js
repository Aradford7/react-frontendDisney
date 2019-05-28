import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import Form from 'react-bootstrap/Form'
import Calendar from '../Calendar/Calender'
import { Container, Row, Col} from 'react-bootstrap';

import './Itinerary.css'


class Itinerary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      lgShow: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    const lgClose = () => this.setState({ lgShow: false });
    const externalCloseBtn = <button className="close" style={{ position: 'absolute', top: '15px', right: '15px' }} onClick={this.toggle}>&times;</button>;
    return (
      <div>

        <div>
           <NavBar/>
        </div>

        <h2>My Itineraries</h2>
        <p>Welcome! You have no itineraries yet</p>
        <p> This should be the Itinarary show page for an Individual User after they logged in</p>

        <div className = "Modal">
          <h1> Create A New Itinerary</h1>
        <div className = "formModal">
        <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}Add A New Visit</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} external={externalCloseBtn} size="lg" show={this.state.lgShow} onHide={lgClose}>
          <ModalHeader>Add new itinerary</ModalHeader>
          <ModalBody>


           <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Visit Name</Form.Label>
                  <Form.Control type="email" placeholder="Visit name is required." />
              </Form.Group>
            </Form.Row>


            <Form.Group as={Col} controlId="formGridPark">
                  <Form.Label>Which theme park are you attending?</Form.Label>
                  <Form.Control as="select">
                        <option>Choose...</option>
                        <option>Disneyland - Anaheim, California</option>
                        <option>Disney Land California Adventures - Anaheim, California</option>
                        <option>Universal Studios Hollywood -  Studios, City</option>
                  </Form.Control>
              </Form.Group>

            <Form.Row>
              <Form.Group as={Col}  xs = {6} controlId="formGridDate">
                  <Form.Label>Which date will ?</Form.Label>
                  <Calendar/>
              </Form.Group>
              
              <Form.Group as={Col} xs = {6} controlId="formGridDate">
                  <Form.Label>Check-out Date</Form.Label>
                  <Calendar/>
              </Form.Group>
          </Form.Row>
      </Form>



          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle} href = "/newitinerary">Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
        </div>
     </div>

        <div>
        <p>if there was any items already in user array show on this page, this will need to render a component that list previous itineraries and able to delete overrall array maybe</p>
        <Button>Delete</Button>
        </div>
        
        <div class = "formhero">
        <Container>
            <Row>
              <Col lg={true}>
              <Container>
                <Row>
                    <Col md={6} aria-label="first group"></Col>
                    <Col md={6} aria-label="second group"></Col>
                </Row>
            </Container>
              </Col>
            </Row>
        </Container>
        </div>


        <div>
          <Footer/>
        </div>
      </div>
    );
  }
}

export default Itinerary;