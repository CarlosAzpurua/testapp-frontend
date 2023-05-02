import React from 'react'
import '../../stylesheets/navbar.css'
import {Container, Row, Col } from 'react-bootstrap';

export default function Footer() {
  return (
    <footer className="bg-white ">
      <Container>
        <Row className="pt-3 pb-2">
          <Col className="text-center">
            <p className="m-0">
              <span className="fw-bold">Carlos Azpurua</span> &copy; {new Date().getFullYear()}
            </p>
            <p className="m-0">All rights reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};