import React from 'react';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';

const Welcome = () => {
  return (
  <Navbar bg='dark' variant='dark' expand='lg' sticky='top' >
    <Container id='welcome'>
        <Navbar.Brand href='#Name' >Anandprabu K</Navbar.Brand>
        <Navbar.Toggle aria-controls ='responsive-navbar-nav'/>
        <Navbar.Collapse id='responsive-navbar-nav'  className="justify-content-end">
            <Nav className=''>
            <Nav.Link href='#welcome' className='link'>Home</Nav.Link> 
            <Nav.Link href='#about'>About</Nav.Link>
            <Nav.Link href='#contact'>Contact</Nav.Link>
            <Nav.Link href='#skills'>Skills</Nav.Link>
            
            <Nav.Link href='#Resume'>Resume</Nav.Link>
            </Nav>

        </Navbar.Collapse>
    </Container>
  </Navbar>
    
  )
}

export default Welcome
