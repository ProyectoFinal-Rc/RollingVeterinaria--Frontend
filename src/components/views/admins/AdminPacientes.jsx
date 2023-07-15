import { Button, Container, Form, InputGroup, Card, Row, Col } from "react-bootstrap";



const AdminPacientes = () => {
    return (
        <>
            <section className="container">
                <div className="d-flex justify-content-center">
                    <h1>
                        Pacientes
                    </h1>
                </div>
                <div className="d-flex justify-content-end">
                    <Button>Ingrese nuevo paciente</Button>
                </div>
                <div className="container">
                    <InputGroup className="mb-3 py-5">
                        <InputGroup.Text>Buscar mascota</InputGroup.Text>
                        <Form.Control aria-label="First name" />
                        <Form.Control aria-label="Last name" />
                    </InputGroup>
                </div>
                <Container>
                    <Row>
                        <Col xs={6}>
                            <Card className="text-center">
                                <Card.Header>Featured</Card.Header>
                                <Card.Body>
                                    <Card.Title>Special title treatment</Card.Title>
                                    <Card.Text>
                                        With supporting text below as a natural lead-in to additional content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                                <Card.Footer className="text-muted">2 days ago</Card.Footer>
                            </Card>
                        </Col>

                        <Col xs={6}>
                            <Card className="text-center">
                                <Card.Header>Featured</Card.Header>
                                <Card.Body>
                                    <Card.Title>Special title treatment</Card.Title>
                                    <Card.Text>
                                        With supporting text below as a natural lead-in to additional content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                                <Card.Footer className="text-muted">2 days ago</Card.Footer>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default AdminPacientes;