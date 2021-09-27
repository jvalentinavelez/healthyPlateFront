import "./Header.css";
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import profile from './../../user.svg';
import logo from './../../fish.svg';

function Header(){
  return (
    <Container>
        <Navbar className="main-nav" collapseOnSelect expand="lg">
          <Container>
            <Navbar.Brand href="#home">
            <img alt="" src={logo} width="50" height="50"className="d-inline-block"/>{' '}HealthyPlate
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">

              <Form className="d-flex">
                <FormControl type="search" placeholder="Buscar recetas" className="mr-2" aria-label="Search"/>
                <Button variant="outline-secondary">Buscar</Button>
              </Form>
              <Nav>
                <NavDropdown title="Filtrar" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Desayuno</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Almuerzo</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Cena</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav className="mx-auto">
                <Nav.Link href="#general">General</Nav.Link>
              </Nav>
              <Nav className="me-auto">
                <Nav.Link href="#miEspacio">Mi espacio</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="#home">
                <img alt="" src={profile} width="35"height="35"/>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </Container>
  )
}

export default Header;
