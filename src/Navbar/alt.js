import React, { Component } from 'react';
import { Navbar, Nav, Input , InputGroup, InputGroupAddon, Button, InputGroupText  } from 'reactstrap';

class MyNavbar extends Component {
  render() {
    return (
            <>
              <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#features">Features</Nav.Link>
                  <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                <InputGroup>
                <Input />
                 <InputGroupAddon addonType="append">
                   <InputGroupText>Search</InputGroupText>
                   </InputGroupAddon>
                 </InputGroup>
              </Navbar>
              </>
          );
  }
}

export default MyNavbar;
