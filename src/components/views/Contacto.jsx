import { Button, Col, Container, FloatingLabel, Form, Row } from "react-bootstrap"

export const Contacto = () =>{
    return (
        <Container fluid>
            <Row>
              <Col xs={{span:8, offset:2}} className="p-3">
                <div className="p-3">
                    <h1>Contactanos</h1>
                    <div className="m-3 text-center">
                        <img className="my-3" src="https://cristiangramajo.vercel.app/_next/static/media/main.87519bdd.svg" alt="Contacto rolling vet" />
                    </div>
                    <p>Ya sea email, llamada, o completa el formulario para saber como podemos ayudarte con tu consulta y planificar a tu gusto</p>
                    <small><i><b>*Para urgencias recomendamos que llame a la linea habiltada 24hs</b></i></small>
                    <ul style={{listStyle:'none'}}>
                        <li>
                            <a href="mailto:cristiangramajo015@gmail.com">rollingvet@gmail.com</a>
                        </li>
                        <li>
                            <a href="tel:+543865332311">+54 (3865) 332311</a>
                        </li>
                        <li>
                            <a href="#">Portal de soporte, chat online.</a>
                        </li>
                    </ul>
                </div>
              </Col>
              <Col xs={{span:8, offset:2}} className="p-3 mt-5">
                <h4>Formulario de contacto</h4>
                <Form className="p-3 bg-white border rounded">
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control placeholder="Ingrese el nombre" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Apellido</Form.Label>
                        <Form.Control placeholder="Ingrese el apellido" />
                        </Form.Group>
                    </Row>
                    
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Ingrese el mail" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Telefono</Form.Label>
                        <Form.Control type="tel" placeholder="+543865332311" />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Nombre de mascota</Form.Label>
                        <Form.Control placeholder="Ingrese el nombre de la mascota" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Apellido</Form.Label>
                        <Form.Control placeholder="Ingrese el apellido" />
                        </Form.Group>
                    </Row>

                    <FloatingLabel controlId="floatingTextarea2" label="Descripcion / Consulta">
                        <Form.Control
                          as="textarea"
                          placeholder="Describa su inconveniente / consulta"
                          style={{ height: '100px' }}
                        />
                    </FloatingLabel>

                    <Button variant="primary" type="submit" className="mt-3">
                        Submit
                    </Button>
                </Form>
              </Col>
            </Row>
        </Container>
    )
}