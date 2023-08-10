import Imagen from "../assets/error.png"
import { Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"


export const Error404 = () => {
    return (
        <Container fluid className="mt-3 fade-up">
            <h1 className="fw-bold text-center titular">404 Error</h1>
            <Row className="mt-5">
                <Col xs={12} md={8} className="p-3 offset-md-2 text-center">
                    <h2 className="fw-bold">¡Ups! parece que hubo un error</h2>
                    <h4>No encontramos lo que estas buscando</h4>
                    <img src={Imagen} alt="Error 404" width={350} />
                    <div className="p-3">
                        <Link className="btn btn-warning fw-bold mb-4" to="/">Volver al inicio</Link>
                        <p>Lo que estas buscando ya no está, o estas intenando acceder a una seccion protegida o no autorizada. Si crees que deberias ver este recurso, comunicate con Soporte</p>
                        <small><i><b>*Para urgencias recomendamos que llame a la linea habiltada 24hs <a href="tel:+543865332311">+54 (3865) 332311</a> </b></i></small>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Error404