import React from "react";


import Footer from "../Footer/Footer";
import { Row, Col, Card, Image } from "react-bootstrap";

export const Parks = () => (
  <div>
  
   
    <div class="pics">
      <Row lg={true}>
        <Col md={4} aria-label="first group">
          <Card style={{ width: "25rem" }}>
            <Image
              width="400px"
              height="300px"
              src="https://cdn.ventrata.com/image/upload/ar_1.5,c_fill,dpr_3.0,f_jpg,w_400/v1506370830/vimwsuqqtctakrxba5r6.jpg"
              rounded
            />

            <Card.Body>
              <a href="/disneyland">Disneyland - Anaheim, CA</a>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} aria-label="second group">
          <Card style={{ width: "25rem" }}>
            <Image
              width="400px"
              height="300px"
              src="https://www.discoverlosangeles.com/sites/default/files/styles/hero/public/images/2019-01/USH_Tour_Yuri%201.jpg"
              rounded
            />
            <Card.Body>
              <a href="/ush">Universal Studios Hollywood -Universal City, CA</a>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} aria-label="third group">
          <Card style={{ width: "25rem" }}>
            <Image
              width="400px"
              height="300px"
              src="https://secure.cdn1.wdpromedia.com/resize/mwImage/1/640/360/75/dam/wdpro-assets/dlr/gallery/destinations/california-adventure-park/disney-california-adventure-gallery00.jpg"
              rounded
            />
            <Card.Body>
              <a href="/caladventures">
                Disney California Adventure - Anaheim, CA
              </a>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>

    <Footer />
  </div>
);
