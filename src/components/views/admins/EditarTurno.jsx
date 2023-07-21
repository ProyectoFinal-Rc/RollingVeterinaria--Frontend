import { useEffect, useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import {  editarTurno } from "../../helpers/turnos";
import Swal from "sweetalert2";


const EditarTurno = ({ showEditar, handleCloseEditar, datos }) => {

    const [datosTurnos, setDatosTurnos] = useState(datos)

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        setValue
    } = useForm();

    const onSubmit = (turnoEditado) => {
        editarTurno(turnoEditado,datos.id).then((respuesta) => {
            if (respuesta) {
                Swal.fire("Turno editado", `El turno de ${turnoEditado.mascota} se editó correctamente`, "success").then(()=>window.location.reload());
                reset();
            } else {
                Swal.fire("error", "No se pudo editar el turno correctamente, vuelva a intentarlo más tarde", "error");
            }
        })
    };

    return (
        <Modal show={showEditar} onHide={handleCloseEditar}>
            <Modal.Header closeButton>
                <Modal.Title>Editar Turno</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className="mb-3" controlId="detalleCita">
                        <Form.Label>Detalle de turno*</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Ingrese el detalle de la cita"
                            defaultValue={datos.detalleCita}
                            {...register("detalleCita", {
                                required: "El detalle de la cita es un dato obligatorio",
                                minLength: {
                                    value: 2,
                                    message: "La cantidad minima de caracteres es de 2 digitos",
                                },
                                maxLength: {
                                    value: 100,
                                    message: "La cantidad maxima de caracteres es de 100 digitos",

                                },

                            })}
                            onChange={(dato)=>{
                                setDatosTurnos({
                                    ...datosTurnos, // Mantener las demás propiedades sin cambios
                                    detalleCita: dato.target.value, // Actualizar solo la propiedad detalleCita con el nuevo valor
                                  }); 
                            }}
                        />
                        <Form.Text className="text-danger">
                            {errors.detalleCita?.message}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="veterinario">
                        <Form.Label>Veterinario*</Form.Label>
                        <Form.Select {...register("veterinario", {
                            required: "El veterinario es obligatorio"
                        })}>
                            <option value="">Seleccione un veterinario</option>
                            <option value="juan paz">Juan Paz</option>
                            <option value="gabriela ramos">Gabriela Ramos</option>
                        </Form.Select>
                        <Form.Text className="text-danger">
                            {errors.veterinario?.message}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="mascota">
                        <Form.Label>Nombre Mascota*</Form.Label>
                        <Form.Control type="text" placeholder="Ingrese el nombre de la mascota"
                            {...register("mascota", {
                                required: "El nombre de la mascota es un dato obligatorio",
                                minLength: {
                                    value: 2,
                                    message: "La cantidad minima de caracteres es de 2 digitos",
                                },
                                maxLength: {
                                    value: 100,
                                    message: "La cantidad maxima de caracteres es de 100 digitos",
                                },
                            })} />
                        <Form.Text className="text-danger">
                            {errors.mascota?.message}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="fecha">
                        <Form.Label>Fecha*</Form.Label>
                        <Form.Control type="date" name="duedate" placeholder="Due date"
                            {...register('fecha', {
                                required: 'La fecha es un dato obligatorio',
                            })} />
                        <Form.Text className="text-danger">
                            {errors.fecha && (
                                <span>{errors.fecha.message}</span>
                            )}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="hora">
                        <Form.Label>Horario*</Form.Label>
                        <Form.Select aria-label="Default select option"
                            {...register("hora", { required: "El horario es un dato obligatorio" })}
                        >
                            <option value="">Seleccione un horario</option>
                            <option value="8:00">8:00</option>
                            <option value="9:00">9:00</option>
                            <option value="10:00">10:00</option>
                            <option value="11:00">11:00</option>
                            <option value="12:00">12:00</option>
                            <option value="17:00">17:00</option>
                            <option value="18:00">18:00</option>
                            <option value="19:00">19:00</option>
                        </Form.Select>
                        <Form.Text className="text-danger">
                            {errors.hora?.message}
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formaPago">
                        <Form.Label>Forma de Pago*</Form.Label>
                        <Form.Select aria-label="Default select payment" {...register("formaPago", { required: "La forma de pago es un dato obligatorio" })}>
                            <option value="">Seleccione una forma de pago</option>
                            <option value="efectivo">Efectivo</option>
                            <option value="tarjeta">Tarjeta</option>
                        </Form.Select>
                        <Form.Text className="text-danger">
                            {errors.formaPago?.message}
                        </Form.Text>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Guardar
                    </Button>
                    <button onClick={() => { console.log(datos) }}>ASDASD</button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default EditarTurno;