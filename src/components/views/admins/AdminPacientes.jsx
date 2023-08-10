import { useState, useEffect } from "react";
import { Button, Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import AgregarPaciente from "./AgregarPaciente"
import { borrarPaciente, obtenerListaPacientes } from "../../helpers/pacientes";
import Swal from "sweetalert2";
import { Fragment } from "react";
import EditarPaciente from "./EditarPaciente";
import { Link } from "react-router-dom"
import { fechaParseada } from "../../helpers/turnos";

const AdminPacientes = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    const [pacientes, setPacientes] = useState([]);
    const [pacienteEditar, setPacienteEditar] = useState({})
    const [showEditar, setShowEditar] = useState(false);
    const handleCloseEditar = () => setShowEditar(false);
    const handleShowEditar = () => setShowEditar(true);


    useEffect(() => {
        obtenerListaPacientes().then((respuesta) => {
            if (respuesta) {
                setPacientes(respuesta)
            } else {
                Swal.fire("error", "Intente realizar esta operación más tarde", "error");
            }
        })
    }, [])

    const seleccionar = (id) => {
        setPacienteEditar(pacientes.find((paciente) => paciente._id === id))
    }

    const borrar = (id) => {
        Swal.fire({
            title: 'Esta seguro de borrar este paciente?',
            text: "El siguiente cambio no podra ser revertido",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, quiero borrar!',
            cancelButtonText: 'Cancelar'
        }).then((resultado) => {
            if (resultado.isConfirmed) {
                borrarPaciente(id).then((respuesta) => {
                    if (respuesta.status === 200) {
                        obtenerListaPacientes().then((respuesta) => {
                            if (respuesta) {
                                setPacientes(respuesta);
                            } else {
                                Swal.fire("Error", "Intente realizar esta operacion en unos minutos", "error");
                            }
                        })
                        Swal.fire(
                            'Borrado!',
                            'El paciente fue borrado.',
                            'success'
                        )
                    } else {
                        Swal.fire({
                            title: "Lo siento!",
                            text: "El paciente no pudo ser eliminado.",
                            icon: "error",
                            confirmButtonColor: "#fa8072",
                        });
                    }
                })
            }
        })
    }

    return (
        <section className="container mt-5">
            <div className="d-flex justify-content-center mt-5">
                <h1 className="mt-5 fw-bold  p-2 titular fs-1">
                    Listado de pacientes
                </h1>
            </div>
            <div className="align-self-center mt-5 row justify-content-around">
                <Link to={"/administrador/turno"} className="btn btn-warning col-8 col-md-5 mt-3">Administrador de turnos</Link>
                <Button onClick={handleShow} className="col-8 col-md-5 mt-3">Agregar Paciente</Button>
            </div>
            <Container className="mt-5 mb-3">
                <Row>
                    {
                        pacientes.map((paciente) => {
                            return (
                                <Fragment key={paciente._id}>
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
                                                            <ListGroup.Item><strong>Fecha de Nacimiento: </strong>{fechaParseada(paciente.fechaNacimiento).replace(/^(\d{4})-(\d{2})-(\d{2})$/g, '$3/$2/$1')}</ListGroup.Item>
                                                            <ListGroup.Item><strong>Peso: </strong>{paciente.peso}</ListGroup.Item>
                                                            <ListGroup.Item><strong>Plan: </strong>{paciente.plan}</ListGroup.Item>
                                                        </ListGroup>
                                                    </Col>
                                                    <Col xs={3} md={2} lg={1} className="d-flex justify-content-sm-end align-items-start p-0">
                                                        <Button className="btn btn-warning btn-sm" onClick={() => { handleShowEditar(); seleccionar(paciente._id) }} ><i className="bi bi-pencil-square p-0"></i></Button>
                                                        <Button variant="danger" className="btn-sm"><i className="bi bi-file-x p-0" onClick={() => { borrar(paciente._id) }}></i></Button>
                                                    </Col>
                                                </Row>
                                                <hr />
                                                <h4>Informacion de los dueños:</h4>
                                                <ListGroup className="list-group-flush">
                                                    <ListGroup.Item><strong>Nombre Dueño: </strong>{paciente.nombreDuenio}</ListGroup.Item>
                                                    <ListGroup.Item><strong>Apellido Dueño: </strong>{paciente.apellidoDuenio}</ListGroup.Item>
                                                    <ListGroup.Item><strong>Email: </strong>{paciente.email}</ListGroup.Item>
                                                    <ListGroup.Item><strong>Direccion: </strong>{paciente.direccion}</ListGroup.Item>
                                                </ListGroup>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Fragment>
                            )
                        })
                    }
                </Row>
            </Container>
            <AgregarPaciente setPacientes={setPacientes} show={show} handleClose={handleClose}></AgregarPaciente>
            <EditarPaciente setPacientes={setPacientes}datos={pacienteEditar} showEditar={showEditar} handleCloseEditar={handleCloseEditar}></EditarPaciente>
        </section>
    );
};

export default AdminPacientes;