import {Col, Card, Button, Row, ListGroup} from "react-bootstrap";



const CardPaciente = () => {
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
                                <ListGroup.Item>Nombre:</ListGroup.Item>
                                <ListGroup.Item>Especie:</ListGroup.Item>
                                <ListGroup.Item>Raza:</ListGroup.Item>
                                <ListGroup.Item>Fecha de nac:</ListGroup.Item>
                                <ListGroup.Item>Peso:</ListGroup.Item>
                                <ListGroup.Item>Plan:</ListGroup.Item>
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