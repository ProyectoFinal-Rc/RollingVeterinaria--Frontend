import { Container, Row, Col, ListGroup } from "react-bootstrap";

const CardTurno = () => {
  return (
    <Container>
      <Row className="border border-2 border-warning p-0 mb-3">
        <Col xs={4} md={2} lg={2} className="p-0">
          <ListGroup className="list-group-flush border">
            <ListGroup.Item>Detalle:</ListGroup.Item>
            <ListGroup.Item>Veterinario:</ListGroup.Item>
            <ListGroup.Item>Nombre:</ListGroup.Item>
            <ListGroup.Item>Fecha:</ListGroup.Item>
            <ListGroup.Item>Horario:</ListGroup.Item>
            <ListGroup.Item>Pago:</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col xs={8} md={10} lg={10} className="p-0">
        <ListGroup className="list-group-flush border">
            <ListGroup.Item>Detalle del turno:</ListGroup.Item>
            <ListGroup.Item>Veterinario:</ListGroup.Item>
            <ListGroup.Item>Nombre mascota:</ListGroup.Item>
            <ListGroup.Item>Fecha:</ListGroup.Item>
            <ListGroup.Item>Horario:</ListGroup.Item>
            <ListGroup.Item>Forma de pago:</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default CardTurno;
