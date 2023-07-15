import { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";


const AgregarTurno = ({ show, handleClose }) => {

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Nuevo Turno</Modal.Title>
            </Modal.Header>
            <Modal.Body><Form>
                <Form.Group className="mb-3" controlId="formDetalle">
                    <Form.Label>Detalle de turno*</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ej: Gata persa con infección en los intestinos"
                    />
                </Form.Group>
                <Form.Gokasroup className="mb-3" controlId="formVeterinario">
                    <Form.Label>Veterinario*</Form.Label>
                    <Form.Select aria-label="Default select example">
                        <option>Seleccione un veterinario</option>
                        <option value="1">Juan Paz</option>
                        <option value="2">Gabriela Ramos</option>
                    </Form.Select>
                </Form.Gokasroup>
                <Form.Group className="mb-3" controlId="formMascota">
                    <Form.Label>Nombre Mascota*</Form.Label>
                    <Form.Control type="text" placeholder="Ej: Firulais" />
                </Form.Group>
                <Form.Group controlId="duedate">
                    <Form.Label>Fecha*</Form.Label>
                    <Form.Control type="date" name="duedate" placeholder="Due date" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formHora">
                    <Form.Label>Horario*</Form.Label>
                    <Form.Select aria-label="Default select example">
                        <option>Seleccione un horario</option>
                        <option value="1">8:00</option>
                        <option value="2">9:00</option>
                        <option value="3">10:00</option>
                        <option value="4">11:00</option>
                        <option value="5">12:00</option>
                        <option value="6">17:00</option>
                        <option value="7">18:00</option>
                        <option value="8">19:00</option>
                    </Form.Select>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Guardar
                </Button>
            </Form></Modal.Body>
        </Modal>
    );
};

export default AgregarTurno;
