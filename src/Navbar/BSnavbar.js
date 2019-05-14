import React, {Component} from "react";
import { Button, Col, Collapse, Container, Jumbotron, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, Row, InputGroupAddon, InputGroupText, InputGroup,Input } from "reactstrap";



class BSnavbar extends Component {
  // constructor(props) {
  //   super(props);
  //
  //   this.toggle = this.toggle.bind(this);
  //   this.state = {
  //     isOpen: false
  //   };
  // }
  // toggle() {
  //   this.setState({
  //     isOpen: !this.state.isOpen
  //   });
  // }
  // instrt in
  //   toggle before navbrand
  //  <Collapse isOpen={this.state.isOpen} navbar>

  // <Form inline>
  //   //<FormControl type="text" placeholder="Search" className="mr-sm-2" />
  //   <Button variant="outline-info">Search</Button>
  // </Form>
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark" >
          <NavbarBrand href="#home">Tracker</NavbarBrand>
          <Container>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/home"><Button tag="a" color="dark" size="small">About</Button></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/satellite-status">Sattelite API</NavLink>
              </NavItem>
            </Nav>
            <InputGroup>
            <Input />
             <InputGroupAddon addonType="append">
               <InputGroupText>Search</InputGroupText>
               </InputGroupAddon>
             </InputGroup>
             </Container>
        </Navbar>
        <Jumbotron>
          <Container>
            <Row>
              <Col>
                <h1>Welcome to ISS Tracker</h1>
                <p>
                  <Button
                    tag="a"
                    color="dark"
                    size="large"
                    href="/satellite-status"
                    target="_blank"
                  >
                    Observe Satellite Status
                  </Button>
                </p>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}

export default BSnavbar;
