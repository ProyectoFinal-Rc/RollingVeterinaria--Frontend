import {Col, Card, Button, Row, ListGroup} from "react-bootstrap";


const CardPaciente = () => {
    return (
        <Col xs={6}>
            <Card className="border border-5 border-warning m-2">
                <Card.Body className="container-fluid">
                    <Row className="d-flex justify-content-around">
                        <Col xs={1} className="d-flex justify-content-start align-self-start"> 
                        <Card.Img
                        className="w-100"
                            variant="top"
                            src="https://cdn-icons-png.flaticon.com/512/21/21577.png"
                        /></Col>
                        <Col xs={7} >
                            <ListGroup className="list-group-flush border">
                                <ListGroup.Item>Nombre:</ListGroup.Item>
                                <ListGroup.Item>Especie:</ListGroup.Item>
                                <ListGroup.Item>Raza:</ListGroup.Item>
                                <ListGroup.Item>Fecha de nacimiento:</ListGroup.Item>
                                <ListGroup.Item>Peso:</ListGroup.Item>
                                <ListGroup.Item>Plan:</ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col xs={3} className="d-flex justify-content-center align-items-start">
                            <Button className="btn btn-warning me-2 btn-sm">Editar</Button>
                            <Button variant="danger" className="btn-sm">Borrar</Button>
                        </Col>
                    </Row>
                    <hr />
                    <h4>Informacion de los dueños:</h4>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>Nombre:</ListGroup.Item>
                        <ListGroup.Item>Apellido:</ListGroup.Item>
                        <ListGroup.Item>Correo:</ListGroup.Item>
                        <ListGroup.Item>Telefono:</ListGroup.Item>
                        <ListGroup.Item>Direccion:</ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default CardPaciente;