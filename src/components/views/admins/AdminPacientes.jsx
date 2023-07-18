import { useState } from "react";
import { Button, Container, Row, } from "react-bootstrap";
import CardPaciente from "./CardPaciente";
import AgregarPaciente from "./AgregarPaciente"
import Filtro from "./Filtro";




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
                <Filtro></Filtro>
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