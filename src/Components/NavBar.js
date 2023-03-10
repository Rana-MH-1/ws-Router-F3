import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/users">Users</Nav.Link>
            <Nav.Link as={Link} to="/Profile">Profile</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar