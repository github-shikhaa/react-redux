import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import './App.css';
function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#home">Navbar scroll</Navbar.Brand>
         <Nav className='mt-auto nav_bar_wrapper'>
            <Link to='/add'>Add Product</Link>
            <Link to='/update'>Update Product</Link>
            <Link to='/login'>Login Product</Link>
            <Link to='/register'>Register</Link>
         </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;