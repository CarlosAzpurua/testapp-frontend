import '../../stylesheets/navbar.css'

import { Container, Navbar } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import React from 'react';

export default function ContainerNavbar() {
  return (
    <Navbar variant="light" className='custom-navbar'>
        <Container className='mx-0'>
          <Navbar.Brand className='cursor-pointer'><Link to="/" className='text-white text-decoration-none' >React Test App</Link></Navbar.Brand>
        </Container>
    </Navbar>
  );
}