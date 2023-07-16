import { Form, Button, Modal } from "react-bootstrap";


const AgregarPaciente = ({show,handleClose}) => {

    return (
        <>
            <Modal show={show} onHide={handleClose}  >
                <Modal.Header closeButton>
                    <Modal.Title>Ingrese un nuevo paciente</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="nombreDuenio">
                            <Form.Label>Nombre del dueño:</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ej: Juan Pablo"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="apellidoDuenio">
                            <Form.Label>Apellido del dueño:</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ej:De Arriba"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="correo">
                            <Form.Label>Ingrese un correo electronico</Form.Label>
                            <Form.Control type="email" placeholder="name@email.com" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="direccion">
                            <Form.Label>Ingrese el domicilio</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ej:San Martin 1490" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="nombreMascota">
                            <Form.Label>Nombre Mascota*</Form.Label>
                            <Form.Control type="text" placeholder="Ej: Firulais" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="especie">
                            <Form.Label>Especie</Form.Label>
                            <Form.Select aria-label="Default select example">
                                <option>Seleccione una especie</option>
                                <option value="1">Mamiferos</option>
                                <option value="2">Aves</option>
                                <option value="3">Reptiles</option>
                                <option value="4">Peces</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="raza">
                            <Form.Label>Raza</Form.Label>
                            <Form.Control type="text" placeholder="Ej: Persa" />
                        </Form.Group>

                        <Form.Group controlId="fechaNacimiento">
                            <Form.Label>Fecha de Nacimiento</Form.Label>
                            <Form.Control type="date" name="duedate" placeholder="Due date" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="peso">
                            <Form.Label>Peso (en kg)</Form.Label>
                            <Form.Control type="number" placeholder="Ej: 12" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="plan">
                            <Form.Label>Plan:</Form.Label>
                            <Form.Select aria-label="Default select example">
                                <option>Seleccione una especie</option>
                                <option value="1">Primeros Pasos (0-5 años)</option>
                                <option value="2">Madurando (5-10 años)</option>
                                <option value="3">Adultos (10 en adelante)</option>
                            </Form.Select>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Guardar
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default AgregarPaciente;