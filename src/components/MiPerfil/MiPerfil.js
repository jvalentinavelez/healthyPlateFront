import "./MiPerfil.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import healthyFood from '../../img/healthy-food.svg';
import smoothie from '../../img/smoothie.svg';
import noMeat from '../../img/no-meat.svg';

import nuts from '../../img/nuts.svg';
import diet from '../../img/diet.svg';




import {Container, Row, Col, Card, Form, Button, FloatingLabel, Dropdown} from 'react-bootstrap';

function MiPerfil() {
  return (
    <Container>
      <Row>
        <Col>
          <Card className="CardPerfil">
            <Card.Body>
              <Card.Title className="CardTitlePerfil text-center">
              <span>Mi Perfil<br /></span></Card.Title>
              <Card.Text>

              <Form>
              <Row className="g-2">
                <Col md>
                  <FloatingLabel controlId="floatingInputGrid" label="Nombre completo">
                    <Form.Control />
                  </FloatingLabel>
                </Col>
              </Row>

              <Row className="g-2">
                <Col md>
                  <FloatingLabel controlId="floatingInputGrid" label="Género">

                    <Form.Control />
                  </FloatingLabel>
                </Col>
                <Col md>
                  <FloatingLabel controlId="floatingInputGrid" label="Fecha de Nacimiento">
                    <Form.Control />
                  </FloatingLabel>
                </Col>
              </Row>

              <Row className="g-2">
                <Col md>
                  <FloatingLabel controlId="floatingInputGrid" label="Estatura">
                    <Form.Control />
                  </FloatingLabel>
                </Col>
                <Col md>
                  <FloatingLabel controlId="floatingInputGrid" label="Peso">
                    <Form.Control />
                  </FloatingLabel>
                </Col>
              </Row>

              <Row className="g-2">
                <Col md>
                <Dropdown>
                  <Dropdown.Toggle className="DropdownMiPerfil" id="dropdown-basic">
                    Dieta
                  </Dropdown.Toggle>
                                    <Dropdown.Menu>
                    <Dropdown.Item>General <span> <img src={healthyFood} width="40px" height="40px" alt="no" /> </span></Dropdown.Item>
                    <Dropdown.Item>Saludable <span> <img src={smoothie} width="40px" height="40px" alt="no" /> </span></Dropdown.Item>
                    <Dropdown.Item>Vegetariana <span> <img src={noMeat} width="40px" height="40px" alt="no" /> </span></Dropdown.Item>
                                      </Dropdown.Menu>
                    </Dropdown>
                </Col>
              </Row>

              <Row className="g-2">
                <Col md>
                <Dropdown >
                  <Dropdown.Toggle className="DropdownMiPerfil" id="dropdown-basic">
                    Objetivo
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item >Bajar de peso <span> <img src={diet} width="40px" height="40px" alt="no" /> </span> </Dropdown.Item>
                    <Dropdown.Item >Ganar masa muscular <span> <img src={nuts} width="40px" height="40px" alt="no" /> </span></Dropdown.Item>
                  </Dropdown.Menu>
              </Dropdown>
                </Col>
              </Row>
              <Row className="g-2">
                <Button type="submit" className="modificarBtn">
                  Modificar
                </Button>
              </Row>


              </Form>
              </Card.Text>
            </Card.Body>

          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default MiPerfil;
