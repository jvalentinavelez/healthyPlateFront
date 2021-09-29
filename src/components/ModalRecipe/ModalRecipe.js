import "./ModalRecipe.css";

import { Modal, Row, Col, Container, Button, Image } from 'react-bootstrap';
import React, {useState } from "react";

import bowl from '../../img/bowl.jpg';

function MydModalWithGrid(props) {

  const [ heartActive, setHeartState ] = useState(false);


  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" className="Modal" size="lg"
      centered>
      <Modal.Header className="ModalContent">
        <Modal.Title id="contained-modal-title-vcenter text-center">
          Bowl de Frutas y Granola
        </Modal.Title>
      <i className={ `bi bi-heart ${heartActive ? 'bi bi-heart-fill':"" }`} onClick={() => setHeartState(!heartActive)} id="heart"></i>

      </Modal.Header>
      <Modal.Body className="show-grid ModalBody">
        <Container>
          <Row>
            <Col xs={12} md={12} lg={7} className="m-auto">
                <Image className="recipeImg d-block img-fluid" src={bowl} rounded />
            </Col>
            <Col xs={12} md={12} lg={5}>
              <Row> <div className="ingredientsTitle"><span className="boldTitles">Ingredientes</span></div>
              </Row>
              <Row>
                <Container>
                  <Row className="ingredientsContent">
                    <Col>
                      <div className="text-center">Banano</div>
                    </Col>
                    <Col>
                      <div className="text-center">Fresa</div>
                    </Col>
                  </Row>
                  <Row className="ingredientsContent">
                    <Col>
                      <div className="text-center">Mora</div>
                    </Col>
                    <Col>
                      <div className="text-center">Yogurt Griego</div>
                    </Col>
                  </Row>
                  <Row className="ingredientsContent">
                    <Col>
                      <div className="text-center">Granola</div>
                    </Col>
                    <Col>
                      <div className="text-center">Semillas de chía</div>
                    </Col>
                  </Row>
                </Container>
              </Row>
              <Row className="preparacionRow">
              <div className="preparacionDiv">
              <span className="boldTitles">Preperación: </span> Servir yogurt en un bowl y cubrir con banano, mora, fresa, granola, coco rayado y semillas de chía.
              Aenean eleifend mattis nunc, in ultricies dolor egestas sit amet. Aliquam aliquet urna eget ante bibendum, quis facilisis elit tempus.
              Mauris facilisis lectus venenatis, hendrerit orci imperdiet, sodales dui. Nulla tristique lobortis diam, vitae ullamcorper magna dignissim vitae.
              Maecenas vulputate scelerisque dui sit amet facilisis. Vivamus gravida euismod tortor vitae varius. Nulla vitae massa quis magna iaculis bibendum gravida a nunc.
              Phasellus sodales, neque in laoreet lacinia, dui arcu iaculis risus, placerat condimentum sapien ligula sed metus. Pellentesque tempor convallis porta. Vivamus at metus sed lectus viverra euismod.
              Morbi dignissim lacus ac aliquet vehicula. Etiam tincidunt eros elit, sit amet aliquam leo feugiat et. Etiam mi odio, interdum nec lorem vitae, egestas ultrices urna. Quisque sit amet nunc nunc.
              Morbi placerat turpis euismod rutrum posuere.</div>
              </Row>
            </Col>
          </Row>

          <Row>
            <Col xs={12} md={7} className="contNutricional">
              <Container>
                <Row>
                    <Col>
                      <Row>
                        <div className="text-center">401 kCal</div>
                      </Row>
                      <Row>
                        <div className="text-center boldTitles">Calorías</div>
                      </Row>
                    </Col>
                    <Col>
                      <Row>
                          <div className="text-center">24g</div>
                      </Row>
                      <Row>
                          <div className="text-center boldTitles">Proteínas</div>
                      </Row>
                    </Col>
                    <Col>
                    <Row>
                        <div className="text-center">43g</div>
                    </Row>
                    <Row>
                        <div className="text-center boldTitles">Carbs</div>
                    </Row>
                    </Col>
                    <Col>
                    <Row>
                        <div className="text-center">18g</div>
                    </Row>
                    <Row>
                        <div className="text-center boldTitles">Grasas</div>
                    </Row>
                    </Col>
                </Row>
              </Container>
            </Col>
            <Col xs={12} md={5} className="categoria">
              <Container className="text-center">
                <Row>
                  <div className="text-center"><span className="boldTitles">Dificultad: </span>Fácil</div>
                </Row>
                <Row>
                  <div className="text-center"><span className="boldTitles">Tiempo: </span>10min</div>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer className="ModalBody">
        <Button onClick={props.onHide} className="btnClose">Cerrar</Button>

      </Modal.Footer>
    </Modal>
  );
}

export default MydModalWithGrid;
