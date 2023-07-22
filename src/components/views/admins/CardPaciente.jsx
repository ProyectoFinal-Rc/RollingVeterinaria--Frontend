import {Col, Card, Button, Row, ListGroup} from "react-bootstrap";



const CardPaciente = ({paciente}) => {
    return (
        <Col xs={12}>
            <Card className="border border-5 border-warning m-2">
                <Card.Body className="container-fluid bg-warning-subtle">
                    <Row className="d-flex justify-content-around p-0">
                        <Col xs={1} md={1} lg={1} className="d-flex justify-content-start align-self-start p-0"> 
                        <Card.Img
                        className="w-75"
                            variant="top"
                            src="https://cdn-icons-png.flaticon.com/512/21/21577.png"
                        /></Col>
                        <Col xs={8} md={9} lg={10} className="p-0">
                            <ListGroup className="list-group-flush border">
                                <ListGroup.Item><strong>Nombre Paciente: </strong>{paciente.nombreMascota}</ListGroup.Item>
                                <ListGroup.Item><strong>Especie:</strong> {paciente.especie}</ListGroup.Item>
                                <ListGroup.Item><strong>Raza: </strong>{paciente.raza}</ListGroup.Item>
                                <ListGroup.Item><strong>Fecha de Nacimiento: </strong>{paciente.fechaNacimiento}</ListGroup.Item>
                                <ListGroup.Item><strong>Peso: </strong>{paciente.peso}</ListGroup.Item>
                                <ListGroup.Item><strong>Plan: </strong>{paciente.plan}</ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col xs={3} md={2} lg={1} className="d-flex justify-content-sm-end align-items-start p-0">
                            <Button className="btn btn-warning btn-sm"><i className="bi bi-pencil-square p-0"></i></Button>
                            <Button variant="danger" className="btn-sm"><i className="bi bi-file-x p-0"></i></Button>
                        </Col>
                    </Row>
                    <hr />
                    <h4>Informacion de los dueños:</h4>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item><strong>Nombre Dueño: </strong>{paciente.nombreDuenio}</ListGroup.Item>
                        <ListGroup.Item><strong>Apellido Dueño: </strong>{paciente.apellidoDuenio}</ListGroup.Item>
                        <ListGroup.Item><strong>Email: </strong>{paciente.email}</ListGroup.Item>
                        <ListGroup.Item><strong>Telefono: </strong>{paciente.telefono}</ListGroup.Item>
                        <ListGroup.Item><strong>Direccion: </strong>{paciente.direccion}</ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default CardPaciente;