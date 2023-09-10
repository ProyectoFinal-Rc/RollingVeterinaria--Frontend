import { Button, Col, Container, Form, Row, InputGroup } from "react-bootstrap"
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Contacto = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = () => {
        reset();
    }
    return (
        <Container fluid className="my-3 fade-up">
            <Row>
                <h1 className="fw-bold text-center titular">Contacto</h1>
                <Col xs={{ span: 12 }} md={{ span: 8 ,offset:2}}  className="p-3 bg-body-tertiary mt-5">
                    <div className="p-3 text-center">
                        <div className="m-3 text-center">
                            <img className="my-3" src="https://cristiangramajo.vercel.app/_next/static/media/main.87519bdd.svg" alt="Contacto rolling vet" style={{ width: '100%', maxWidth: '300px' }} />
                        </div>
                        <p>Ya sea email, llamada, o completa el formulario para saber como podemos ayudarte con tu consulta y planificar a tu gusto</p>
                        <small><i><b>*Para urgencias recomendamos que llame a la linea habiltada 24hs</b></i></small>
                        <ul style={{ listStyle: 'none' }}>
                            <li>
                                <Link to="/*" className="link-dark link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover">rollingvet@gmail.com</Link>
                            </li>
                            <li>
                                <Link to="/*" className="link-dark link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover">+54 (3865) 332311</Link>
                            </li>
                            <li>
                                <Link to="/*" className="link-warning link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover">Portal de soporte, chat online.</Link>
                            </li>
                        </ul>
                    </div>
                </Col>
                <Col xs={{ span: 12 }} md={{ span: 8 ,offset:2}} className="p-3 bg-white mt-5">
                    <h4 className="text-center fw-bold titular mt-1 fs-2">Formulario de contacto</h4>
                    <Form className="p-3 bg-white border rounded" onSubmit={handleSubmit(onSubmit)}>
                        <Row className="mb-3">
                            <Col xs={12} md={6} lg={6} className="mt-3" >
                                <Form.Group >
                                    <Form.Label>Nombre</Form.Label>
                                    <Form.Control type="text" placeholder="Ingrese su nombre" {...register("nombre", {
                                        required: "El nombre es un dato obligatorio",
                                        minLength: {
                                            value: 2,
                                            message: "La cantidad minima de caracteres es de 2 digitos",
                                        },
                                        maxLength: {
                                            value: 30,
                                            message: "La cantidad maxima de caracteres es de 30 digitos",
                                        },
                                    })} />
                                    <Form.Text className="text-danger">
                                        {errors.nombre?.message}
                                    </Form.Text>
                                </Form.Group>
                            </Col>
                            <Col xs={12} md={6} lg={6} className="mt-3" >
                                <Form.Group>
                                    <Form.Label>Apellido</Form.Label>
                                    <Form.Control type="text" placeholder="Ingrese su apellido" {...register("apellido", {
                                        required: "El apeliido es un dato obligatorio",
                                        minLength: {
                                            value: 2,
                                            message: "La cantidad minima de caracteres es de 2 digitos",
                                        },
                                        maxLength: {
                                            value: 30,
                                            message: "La cantidad maxima de caracteres es de 30 digitos",
                                        },
                                    })} />
                                    <Form.Text className="text-danger">
                                        {errors.apellido?.message}
                                    </Form.Text>
                                </Form.Group>
                            </Col>
                            <Col xs={12} md={6} lg={6} className="mt-3" >
                                <Form.Group >
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="name@email.com"
                                        {...register("email", {
                                            required: "El email es un dato obligatorio",
                                            pattern: {
                                                value:
                                                    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=? ^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a -z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                                                message:
                                                    "El email debe tener el siguiente formato: mail@dominio.com",
                                            },
                                        })} />
                                    <Form.Text className="text-danger">
                                        {errors.email?.message}
                                    </Form.Text>
                                </Form.Group>
                            </Col>
                            <Col xs={12} md={6} lg={6} className="mt-3" >
                                <Form.Group >
                                    <Form.Label>Nombre de mascota</Form.Label>
                                    <Form.Control type="text" placeholder="Ingrese el nombre de la mascota" {...register("nombreMasco", {
                                        required: "El nombre de la mascota es un dato obligatorio",
                                        minLength: {
                                            value: 2,
                                            message: "La cantidad minima de caracteres es de 2 digitos",
                                        },
                                        maxLength: {
                                            value: 30,
                                            message: "La cantidad maxima de caracteres es de 30 digitos",
                                        },
                                    })}/>
                                    <Form.Text className="text-danger">
                                        {errors.nombreMasco?.message}
                                    </Form.Text>
                                </Form.Group>
                            </Col>
                            <Col xs={12} md={12} lg={6} className="mt-3" >
                                <Form.Label>Telefono</Form.Label>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="telefono">+54</InputGroup.Text>
                                    <Form.Control type="number" placeholder="38151323121" aria-describedby="telefono"
                                        {...register("telefono", {
                                            required: "El telefono es un dato obligatorio",
                                            pattern: {
                                                value:
                                                    /^\d{10}$/,
                                                message:
                                                    "El telefono debe tener el siguiente formato: 3865332311",
                                            },
                                        })} />
                                    <Form.Text className="text-danger mx-2">
                                        {errors.telefono?.message}
                                    </Form.Text>
                                </InputGroup>
                            </Col>
                            <Col xs={12} md={12} lg={12} className="mt-3" >
                                <Form.Group>
                                    <Form.Label>Describa su consulta</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        placeholder="Describa su inconveniente / consulta"
                                        style={{ height: '100px' }}
                                        {...register("consulta", {
                                            required: "La consulta es un dato obligatorio",
                                            minLength: {
                                                value: 2,
                                                message: "La cantidad minima de caracteres es de 2 digitos",
                                            },
                                            maxLength: {
                                                value: 400,
                                                message: "La cantidad maxima de caracteres es de 30 digitos",
                                            },
                                        })}
                                    />
                                    <Form.Text className="text-danger">
                                        {errors.consulta?.message}
                                    </Form.Text>
                                </Form.Group>
                            </Col>
                        </Row>
                        <div className="d-flex justify-content-center">
                            <Link className="primary mt-3 btn btn-warning" to={"/*"} >
                                Enviar
                            </Link>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
};

export default Contacto;