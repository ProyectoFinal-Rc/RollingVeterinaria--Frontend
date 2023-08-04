import { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { editarPaciente,obtenerListaPacientes } from "../../helpers/pacientes";
import { fechaParseada } from "../../helpers/turnos";

const EditarPaciente = ({ showEditar, handleCloseEditar, datos,setPacientes }) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const [datosPacientes, setDatosPacientes] = useState(datos)
    
    const onSubmit = (pacienteEditado) => {
        editarPaciente(pacienteEditado,datos._id).then((respuesta)=>{
            if(respuesta) {
                Swal.fire("Paciente editado", `El paciente  ${pacienteEditado.nombreMascota} se editó correctamente`, "success")
                    obtenerListaPacientes().then((respuesta) => {
                        console.log("entra")
                        if (respuesta) {
                            console.log("entra2")
                            setPacientes(respuesta)
                        }
                    })
                reset();
                handleCloseEditar();
            } else {
                Swal.fire("error", "No se pudo editar el paciente correctamente, vuelva a intentarlo más tarde", "error");
            }
        })
    } 

    return (
        <>
            <Modal show={showEditar} onHide={handleCloseEditar}  >
                <Modal.Header closeButton>
                    <Modal.Title>Editar paciente</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="mb-3" controlId="nombreDuenio">
                            <Form.Label>Nombre del dueño*</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ingrese un nombre"
                                defaultValue={datos.nombreDuenio}
                                {...register("nombreDuenio", {
                                    required: "El nombre es un dato obligatorio",
                                    minLength: {
                                        value: 2,
                                        message: "La cantidad minima de caracteres es de 2 digitos",
                                    },
                                    maxLength: {
                                        value: 30,
                                        message: "La cantidad maxima de caracteres es de 30 digitos",
                                    },
                                })}
                                onChange={(dato)=>{
                                    setDatosPacientes({
                                        ...datosPacientes, 
                                        nombreDuenio: dato.target.value, 
                                    }); 
                                }}
                            />
                            <Form.Text className="text-danger">
                                {errors.nombreDuenio?.message}
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="apellidoDuenio">
                            <Form.Label>Apellido del dueño*</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ingrese un apellido"
                                defaultValue={datos.apellidoDuenio}
                                {...register("apellidoDuenio", {
                                    required: "El apellido es un dato obligatorio",
                                    minLength: {
                                        value: 2,
                                        message: "La cantidad minima de caracteres es de 2 digitos",
                                    },
                                    maxLength: {
                                        value: 30,
                                        message: "La cantidad maxima de caracteres es de 30 digitos",
                                    },
                                })}
                            />
                            <Form.Text className="text-danger">
                                {errors.apellidoDuenio?.message}
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Ingrese un correo electronico*</Form.Label>
                            <Form.Control type="email" placeholder="name@email.com"
                            defaultValue={datos.email}
                                {...register("email", {
                                    required: "El email es un dato obligatorio",
                                    pattern: {
                                        value:
                                            /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=? ^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a -z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                                        message:
                                            "El email debe tener el siguiente formato: mail@dominio.com",
                                    },
                                })}
                            />
                            <Form.Text className="text-danger">
                                {errors.email?.message}
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="direccion">
                            <Form.Label>Ingrese el domicilio*</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ingrese una direccion."
                                defaultValue={datos.direccion}
                                {...register("direccion", {
                                    required: "La direccion es un dato obligatorio",
                                    minLength: {
                                        value: 2,
                                        message: "La cantidad minima de caracteres es de 2 digitos",
                                    },
                                    maxLength: {
                                        value: 50,
                                        message: "La cantidad maxima de caracteres es de 50 digitos",
                                    },
                                })}
                            />
                            <Form.Text className="text-danger">
                                {errors.direccion?.message}
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="nombreMascota">
                            <Form.Label>Nombre Mascota*</Form.Label>
                            <Form.Control type="text" placeholder="Ingrese el nombre de la mascota"
                            defaultValue={datos.nombreMascota}
                                {...register("nombreMascota", {
                                    required: "El nombre es un dato obligatorio",
                                    minLength: {
                                        value: 2,
                                        message: "La cantidad minima de caracteres es de 2 digitos",
                                    },
                                    maxLength: {
                                        value: 30,
                                        message: "La cantidad maxima de caracteres es de 30 digitos",
                                    },
                                })}
                            />
                            <Form.Text className="text-danger">
                                {errors.nombreMascota?.message}
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="especie">
                            <Form.Label>Especie*</Form.Label>
                            <Form.Select
                            defaultValue={datos.especie}
                                {...register("especie", {
                                    required: "La especie es obligatoria",
                                })}
                            >
                                <option value="mamiferos">Mamiferos</option>
                                <option value="aves">Aves</option>
                                <option value="reptiles">Reptiles</option>
                                <option value="peces">Peces</option>
                            </Form.Select>
                            <Form.Text className="text-danger">
                                {errors.especie?.message}
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="raza">
                            <Form.Label>Raza*</Form.Label>
                            <Form.Control type="text" placeholder="Ingrese la raza"
                            defaultValue={datos.raza}
                                {...register("raza", {
                                    required: "La raza es un dato obligatorio",
                                    minLength: {
                                        value: 2,
                                        message: "La cantidad minima de caracteres es de 2 digitos",
                                    },
                                    maxLength: {
                                        value: 30,
                                        message: "La cantidad maxima de caracteres es de 30 digitos",
                                    },
                                })}
                            />
                            <Form.Text className="text-danger">
                                {errors.raza?.message}
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="fechaNacimiento">
                            <Form.Label>Fecha de Nacimiento*</Form.Label>
                            <Form.Control type="date" name="duedate" placeholder="Seleccione la fecha de nacimiento"
                            defaultValue={fechaParseada(datos.fechaNacimiento)}
                                {...register('fechaNacimiento', {
                                    required: 'La fecha de nacimiento es obligatoria',
                                })}
                            />
                            <Form.Text className="text-danger">
                                {errors.fechaNacimiento && (
                                    <span>{errors.fechaNacimiento.message}</span>
                                )}
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="peso">
                            <Form.Label>Peso (en kg)*</Form.Label>
                            <Form.Control type="number" placeholder="Ingrese el peso"
                            defaultValue={datos.peso}
                            min={1}
                                {...register("peso", {
                                    required: "El peso es un dato obligatorio",
                                    min: {
                                        value: 1,
                                        message: "El peso minimo es de 1kg",
                                    },
                                    max: {
                                        value: 100,
                                        message: "El peso maximo es de 100kg",
                                    },
                                })}
                            />
                            <Form.Text className="text-danger">
                                {errors.peso?.message}
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="plan">
                            <Form.Label>Plan*</Form.Label>
                            <Form.Select
                            defaultValue={datos.plan}
                                {...register("plan", {
                                    required: "El plan es obligatorio",
                                })}
                            >
                                <option value="">Seleccione una especie</option>
                                <option value="primeros Pasos (0-5 años)">Primeros Pasos (0-5 años)</option>
                                <option value="madurando (5-10 años)">Madurando (5-10 años)</option>
                                <option value="adultos (10 en adelante)">Adultos (10 en adelante)</option>
                            </Form.Select>
                            <Form.Text className="text-danger">
                                {errors.plan?.message}
                            </Form.Text>
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

export default EditarPaciente;