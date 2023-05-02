import '../../stylesheets/footer.css'

import {Col, Container, Row} from 'react-bootstrap';

import React from 'react'

export default function Footer() {
  return (
    <footer className="footer bg-white ">
      <Container>
        <Row className="footer-row pt-3 pb-2">
          <Col className="footer-col text-center">
            <p className="footer-text m-0">
              <span className="fw-bold">Carlos Azpurua</span> &copy; {new Date().getFullYear()}
            </p>
            <p className="footer-text m-0">All rights reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};