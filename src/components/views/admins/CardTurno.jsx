import { Container, Row, Col, ListGroup } from "react-bootstrap";
import { fechaParseada } from "../../helpers/turnos";
const CardTurno = ({turno}) => {
  return (
    <Container>
      <Row className="border border-2 border-warning p-0 mb-3">
        <Col xs={6} md={3} lg={2} className="p-0">
          <ListGroup className="list-group-flush border">
          <ListGroup.Item className="text-truncate overflow-hidden">Detalle de cita:</ListGroup.Item>
            <ListGroup.Item className="text-truncate overflow-hidden">Veterinario:</ListGroup.Item>
            <ListGroup.Item className="text-truncate overflow-hidden">Paciente:</ListGroup.Item>
            <ListGroup.Item className="text-truncate overflow-hidden">Fecha:</ListGroup.Item>
            <ListGroup.Item className="text-truncate overflow-hidden">Horario:</ListGroup.Item>
            <ListGroup.Item className="text-truncate overflow-hidden">Forma de pago:</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col xs={6} md={9} lg={10} className="p-0">
        <ListGroup className="list-group-flush border">
        <ListGroup.Item className="text-truncate overflow-hidden">{turno.detalleCita}</ListGroup.Item>
            <ListGroup.Item className="text-truncate overflow-hidden">{turno.veterinario}</ListGroup.Item>
            <ListGroup.Item className="text-truncate overflow-hidden">{turno.mascota}</ListGroup.Item>
            <ListGroup.Item className="text-truncate overflow-hidden">{fechaParseada(turno.fecha).replace(/^(\d{4})-(\d{2})-(\d{2})$/g,'$3/$2/$1')}</ListGroup.Item>
            <ListGroup.Item className="text-truncate overflow-hidden">{turno.hora}</ListGroup.Item>
            <ListGroup.Item className="text-truncate overflow-hidden">{turno.formaPago} </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default CardTurno;
