import "./MiPerfil.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import {Container, Row, Col, Card, Form, Button, FloatingLabel} from 'react-bootstrap';

function MiPerfil() {
  return (
    <Container>
      <Row>
        <Col>
          <Card className="CardPerfil">
            <Card.Body>
              <Card.Title className="CardTitlePerfil">
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
                  <FloatingLabel controlId="floatingInputGrid" label="Email address">
                    <Form.Control type="email" placeholder="name@example.com" />
                  </FloatingLabel>
                </Col>
                <Col md>
                  <FloatingLabel controlId="floatingInputGrid" label="Email address">
                    <Form.Control type="email" placeholder="name@example.com" />
                  </FloatingLabel>
                </Col>
              </Row>

              <Row className="g-2">
                <Col md>
                  <FloatingLabel controlId="floatingInputGrid" label="Email address">
                    <Form.Control type="email" placeholder="name@example.com" />
                  </FloatingLabel>
                </Col>
                <Col md>
                  <FloatingLabel controlId="floatingInputGrid" label="Email address">
                    <Form.Control type="email" placeholder="name@example.com" />
                  </FloatingLabel>
                </Col>
              </Row>

                <Button variant="primary" type="submit">
                  Modificar
                </Button>
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
