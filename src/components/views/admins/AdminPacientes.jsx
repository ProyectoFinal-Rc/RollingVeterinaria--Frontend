import { useState } from "react";
import { Button, Container, Form, InputGroup, Card, Row, Col } from "react-bootstrap";
import CardPaciente from "./CardPaciente";
import AgregarPaciente from "./AgregarPaciente"



const AdminPacientes = () => {
    const [show,setShow] = useState(false);
    const handleClose = () => setShow(false)
    const handleShow = () => setShow (true)

    return (

        <section className="container">
            <div className="d-flex justify-content-center">
                <h1>
                    Pacientes
                </h1>
            </div>
            <div className="d-flex justify-content-end">
                <Button onClick={handleShow}>Ingrese nuevo paciente</Button>
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
            <AgregarPaciente show={show} handleClose={handleClose}></AgregarPaciente>
        </section>

    );
};

export default AdminPacientes;