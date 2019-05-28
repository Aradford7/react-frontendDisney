import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import { Container, Row, Col} from 'react-bootstrap';

import './Itinerary.css'


class Itinerary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    const externalCloseBtn = <button className="close" style={{ position: 'absolute', top: '15px', right: '15px' }} onClick={this.toggle}>&times;</button>;
    return (
      <div>

        <div>
           <NavBar/>
        </div>

        <h2>My Itineraries</h2>
        <p>Welcome! You have no itineraries yet</p>
        <p> This should be the Itinarary show page for an Individual User after they logged in</p>

        <div class = "newContainer">
          <h1> Create A New Itinerary</h1>
        <div className = "formModal">
        <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}Add A New Visit</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} external={externalCloseBtn}>
          <ModalHeader>Add new itinerary</ModalHeader>
          <ModalBody>
            <b>Look at the top right of the page/viewport!</b><br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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