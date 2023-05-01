import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import '../../stylesheets/navbar.css'

function ContainerNavbar() {
  return (
    <Navbar variant="light" className='custom-navbar'>
        <Container className='mx-0'>
          <Navbar.Brand className='text-white cursor-pointer' href="/">React Test App</Navbar.Brand>
        </Container>
    </Navbar>
  );
}

export default ContainerNavbar;