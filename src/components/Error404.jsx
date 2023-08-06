import { Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"


export const Error404 = () =>{
    return (
        <Container fluid className="mt-5">
            <Row className="mt-5">
              <Col xs={12} md={8} className="p-3 offset-md-2 text-center">
              <h1 className="fw-bold">¡Ups! parece que hubo un error</h1>
              <h4>No encontramos lo que estas buscando</h4>
              <img src="../src/assets/error-sin-fondo.png" alt="Error 404" width={'100%'}/>
                <div className="p-3">
                    <div className="m-3 text-center">
                        <img className="my-3" style={{width:'100%', maxWidth:'32rem'}} src="https://cristian021195.github.io/portfolio/img/svg/puppy-404.svg" alt="Contacto rolling vet" />
                    </div>                    
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