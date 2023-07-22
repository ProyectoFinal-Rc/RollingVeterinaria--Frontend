import { Col, Container, Row } from "react-bootstrap"

export const Error404 = () =>{
    return (
        <Container fluid>
            <Row>
              <Col xs={12} md={8} className="p-3 offset-md-2">
              <h1>¡Ups! parece que hubo un error</h1>
              <h4>No encontramos lo que estas buscando</h4>
              <h2>Error 404</h2>
              
                <div className="p-3">
                    <div className="m-3 text-center">
                        <img className="my-3" style={{width:'100%', maxWidth:'32rem'}} src="https://cristian021195.github.io/portfolio/img/svg/puppy-404.svg" alt="Contacto rolling vet" />
                    </div>                    
                    <button className="btn btn-danger mb-4">Volver</button>
                    <p>Lo que estas buscando ya no está, o estas intenando acceder a una seccion protegida o no autorizada. Si crees que deberias ver este recurso, comunicate con Soporte</p>
                    <small><i><b>*Para urgencias recomendamos que llame a la linea habiltada 24hs <a href="tel:+543865332311">+54 (3865) 332311</a> </b></i></small>
                </div>
              </Col>
            </Row>
        </Container>
    )
}