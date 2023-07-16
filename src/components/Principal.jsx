import Video from '../assets/VideoRCVet.mp4';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Principal = () => {
    return (
        <>
            <section id="video" className="position-relative overflow-hidden">
                <section className="pb-5 container-fluid">
                    <div id="tituloFraseGrande">
                        <div className="display-2 d-flex flex-column flex-md-row justify-content-center align-items-center gap-md-3 py-3" id="animacionPrincipal">
                            <div className="contenedorTextoAnimacion">
                                <span id="TextoGrupo1" className="slide-texto-fromBottom rollingVet-negro">Estamos Aqui</span>
                            </div>
                            <div className="contenedorTextoAnimacion">
                                <span id="TextoGrupo2" className=" slide-texto-fromTop  rollingVet-naranja">para Ellos</span>
                            </div>
                        </div>
                    </div>
                </section>
                <video className="position-absolute z-n1 d-none d-md-block" src={Video} autoPlay muted loop />
                <img className="position-absolute top-50 start-50 translate-middle z-n1 d-md-none h-100" src="./img/cierrese-arriba-muchas-pesas-gimnasia-metal-estante-gimnasio-deporte.jpg" alt="" />
                <Container id="texto" className="py-3">
                    <Row className="d-flex align-items-center justify-content-center">
                        <Col xs={12} md={6} className=''>
                            <div>
                                <h1 className="display-5 fw-bold text-light mb-3">
                            {/*<strong className="rollingfitLogo-primary">El cuidado y amor que tu mascota se merece <br />
                                </strong> */}
                                    <strong className="rollingVet-naranja"><strong className='rollingVet-negro'> Suscribite HOY </strong> <br />Y comenzá a disfrutar de los beneficios!</strong>
                                </h1>
                            </div>
                        </Col>
                        <Col xs={12} md={6} className='text-center'>
                            <Button className="btn btn-primary rollingVet-naranja rounded-pill btn-lg px-5 " id='boton' href="#nuestrosTestimonios" role="button">
                                ¡Suscribite!
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Principal;