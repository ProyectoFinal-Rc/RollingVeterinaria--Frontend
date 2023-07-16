import { Button, Container, Form, InputGroup, Card, Row, Col } from "react-bootstrap";
import CardPaciente from "./CardPaciente";


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
                        <CardPaciente></CardPaciente>
                    </Row>

                </Container>
            </section>
        </>
    );
};

export default AdminPacientes;