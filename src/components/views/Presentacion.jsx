import Video from '../../assets/VideoRCVet.mp4';

import '../../App.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Presentacion = () => {
    return (
        <div>
            <section id="video" className="position-relative overflow-hidden">
                <section className="pb-5 container-fluid">
                    <div id="tituloFraseGrande">
                        <div className="display-2 d-flex flex-column flex-md-row justify-content-center align-items-center gap-md-3 py-3" id="animacionPrincipal">
                            <div className="contenedorTextoAnimacion">
                                <span id="TextoGrupo1" className="slide-texto-fromBottom text-white fw-bold">Estamos aqui</span>
                            </div>
                            <div className="contenedorTextoAnimacion">
                                <span id="TextoGrupo2" className=" slide-texto-fromTop  rollingVet-naranja fw-bold">para ellos</span>
                            </div>
                        </div>
                    </div>
                </section>
                <video className="position-absolute z-n1 d-none d-md-block" src={Video} autoPlay muted loop />
                <img className="position-absolute top-50 start-50 translate-middle z-n1 d-md-none h-100" src="https://images.pexels.com/photos/5731861/pexels-photo-5731861.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                <Container id="texto" className="py-3">
                    <Row className="d-flex align-items-center justify-content-center">
                        <Col xs={12} md={6} className=''>
                            <div id='tituloFrase'>
                                <h1 className="display-5 fw-bold text-light mb-3">
                                    <strong className="rollingVet-naranja"><strong className='text-white'> Suscribite HOY </strong> <br />Y comenzá a disfrutar de los beneficios!</strong>
                                </h1>
                            </div>
                        </Col>
                        <Col xs={12} md={6} className='text-center'id='botonFrase'>
                            <Link id='boton' className="btn btn-primary rollingVet-naranja rounded-pill btn-lg px-5 fw-bold" to="/*" role="button">
                                ¡Suscribirme!
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default Presentacion;