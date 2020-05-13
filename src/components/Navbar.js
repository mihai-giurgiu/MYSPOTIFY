import React, {Component} from 'react'; 
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form  from 'react-bootstrap/Form';
import { Navbar, Nav, NavDropdown, } from 'react-bootstrap';



class MainNav extends React.Component {

    render(){
        return (
            <header className="App-header">
      {/* <nav>
              <ul>
                  <li>
                      <Link to = "/home">Home</Link>
                  </li>
                  <li>
                      <Link to = "/about">About</Link>
                  </li>
                  <li>
                      <Link to = "/login">Login</Link>
                  </li>
                  <li>
                      <Link to = "/contact">Contact</Link>
                  </li>
                  <li>
                      <Link to = "/category">Category</Link>
                  </li>
              </ul>
          </nav> */}
            <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Categories</Nav.Link>
        <Nav.Link href="#link">About</Nav.Link>
        <NavDropdown title="Categories" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Rock</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Hip Hop</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Electronic</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Jazz</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Pop</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Reggae</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
        </Nav>
        <Form >
        <Form.Control type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success">Search</Button>
        </Form>
    </Navbar.Collapse>
    </Navbar>
      </header>
        )
    }
    
};

export default MainNav;