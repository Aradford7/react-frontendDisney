import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Footer.css";

export const Footer = () => (
  // <!-- Footer -->
  <footer class="page-footer font-small  pt-4">
    {/* <!-- Footer Links --> */}
    <div class="container-fluid text-center text-md-left">
      {/* <!-- Grid row --> */}
      <div class="row">
        {/* <!-- Grid column --> */}
        <div class="col-md-6 mt-md-0 mt-3">
          {/* <!-- Content --> */}
          <h5 class="text-uppercase">MY PARK PLANNER</h5>
          <p>
            {" "}
            We would love to hear from you. Contact us on social media or send
            us an email with any questions or feedback. Or hire us! That will be
            awesome!
          </p>
          <p>
            MyParkPlanner.com is in no way afflicated with The Walt Disney
            Company, Disney World, Disneyland, Universal Pictures, Universal
            Studios or any of their subsidaries.
          </p>
        </div>
        {/* <!-- Grid column --> */}
        <hr class="clearfix w-100 d-md-none pb-3" />
        {/* <!-- Grid column --> */}
        <div class="col-md-3 mb-md-0 mb-3">
          {/* <!-- Links --> */}
          <h5 class="text-uppercase">Links</h5>
          <ul class="list-unstyled">
            <li>
              <a className="link" href="/about">
                About
              </a>
            </li>
            <li>
              <a className="link" href="/contact">
                Contact
              </a>
            </li>
            <li>
              <a className="link" href="/#!">
              Heroku
              </a>
            </li>
            <li>
              <a className="link" href="/#!">
               Future Implementations
              </a>
            </li>
          </ul>
        </div>
        {/* <!-- Grid column -->
          <!-- Grid column --> */}
        <div class="col-md-3 mb-md-0 mb-3">
          {/* <!-- Links --> */}
          <h5 class="text-uppercase">Dev Links</h5>
          <ul class="list-unstyled">
            <li>
              <a className="link" href="/">
                Home Route
              </a>
            </li>
            <li>
              <a className="link" href="/itinerary">
                Itinerary
              </a>
            </li>
            <li>
              <a className="link" href="/newitinerary">
                AddNewItin
              </a>
            </li>
            <li>
              <a className="link" href="/show">
                ShowItin
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <Row className="footerrow">
      <Col lg={true}>
        <div class="footer-copyright text-center py-3">© Copyright 2019: Created by: Chase Lancaster and Ashley Radford</div>
      </Col>
    </Row>
  </footer>
);
export default Footer;
