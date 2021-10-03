import "./MiPerfil.css";
import 'bootstrap/dist/css/bootstrap.min.css';


import parents from '../../img/parents.svg';

import healthyFood from '../../img/healthy-food.svg';
import smoothie from '../../img/smoothie.svg';
import noMeat from '../../img/no-meat.svg';

import nuts from '../../img/nuts.svg';
import diet from '../../img/diet.svg';

import {Container, Row, Col, Card, Form, Button, FloatingLabel, Dropdown} from 'react-bootstrap';

import React, {useState } from "react";

function MiPerfil() {
  const [value,setValue]=useState('');
  const handleSelect=(e)=>{
    console.log(e);
    setValue(e)
  }
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
                <Dropdown onSelect={handleSelect}>
                  <Dropdown.Toggle className="DropdownMiPerfil" id="dropdown-basic">
                    Género  <span> <img src={parents} width="43px" height="43px" alt="no" /> </span>
                  </Dropdown.Toggle>
                                    <Dropdown.Menu>
                    <Dropdown.Item eventKey="mujer">Mujer</Dropdown.Item>
                    <Dropdown.Item eventKey="hombre">Hombre</Dropdown.Item>
                                      </Dropdown.Menu>
                    </Dropdown>
                </Col>
                <Col md>
                  <FloatingLabel  controlId="floatingInputGrid" label="Fecha de Nacimiento">
                    <Form.Control type="date"/>
                  </FloatingLabel>
                </Col>
              </Row>

              <Row className="g-2">
                <Col md>
                  <FloatingLabel controlId="floatingInputGrid" label="Estatura (cm)">
                    <Form.Control />
                  </FloatingLabel>
                </Col>
                <Col md>
                  <FloatingLabel controlId="floatingInputGrid" label="Peso (kg)">
                    <Form.Control />
                  </FloatingLabel>
                </Col>
              </Row>

              <Row className="g-2">
                <Col md>
                <Dropdown onSelect={handleSelect}>
                  <Dropdown.Toggle className="DropdownMiPerfil" id="dropdown-basic">
                    Dieta
                  </Dropdown.Toggle>
                                    <Dropdown.Menu>
                    <Dropdown.Item eventKey="general">General <span> <img src={healthyFood} width="40px" height="40px" alt="no" /> </span></Dropdown.Item>
                    <Dropdown.Item eventKey="saludable">Saludable <span> <img src={smoothie} width="40px" height="40px" alt="no" /> </span></Dropdown.Item>
                    <Dropdown.Item eventKey="vegetariana">Vegetariana <span> <img src={noMeat} width="40px" height="40px" alt="no" /> </span></Dropdown.Item>
                                      </Dropdown.Menu>
                    </Dropdown>
                </Col>
              </Row>

              <Row className="g-2">
                <Col md>
                <Dropdown onSelect={handleSelect} >
                  <Dropdown.Toggle className="DropdownMiPerfil" id="dropdown-basic">
                    Objetivo
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item eventKey="bajarPeso">Bajar de peso <span> <img src={diet} width="40px" height="40px" alt="no" /> </span> </Dropdown.Item>
                    <Dropdown.Item eventKey="GanarMasa">Ganar masa muscular <span> <img src={nuts} width="40px" height="40px" alt="no" /> </span></Dropdown.Item>
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
