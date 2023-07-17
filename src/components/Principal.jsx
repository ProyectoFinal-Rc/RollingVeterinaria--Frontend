import Video from '../assets/VideoRCVet.mp4';
import { Container, Row, Col, Button, Card ,Carousel} from 'react-bootstrap';
import PlanA from '../assets/pexels-photo-3198005_1.png';
import PlanB from '../assets/istockphoto-1324099927-612x612.png';
import PlanC from '../assets/istockphoto-635820902-612x612.png';
import Servicio1 from "../assets/imagenes de animales/pexels-photo-4483327.png";
import Servicio2 from "../assets/imagenes de animales/MiConv.com__descarga.png";
import Servicio3 from "../assets/imagenes de animales/comohacercrecertunegociopetshop.png";
import Servicio4 from "../assets/imagenes de animales/MiConv.com__descarga1.png";

/* import Servicio4 from "../assets/imagenes de animales/";
 */import '../App.css'
/* import Servicio3 from "../assets/";
import Servicio4 from "../assets/"; */
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
            <section id='planes' className='container my-2 border-rounded'>
                <Card>
                    <Row className='flex-row justify-content-center my-3'>
                        <Col xs={12} md={4} className=''>
                            <h1 className='text-start ms-3 rollingVet-negro'>Planes de cuidado</h1>
                            <p className='text-start ms-3 rollingVet-naranja'>Nuestra veterinaria ofrece un servicio exclusivo de planes de cuidado mensuales diseñados para garantizar la salud y el bienestar óptimo de las mascotas a lo largo de diferentes etapas de su vida. Estos planes están diseñados pensando en las necesidades específicas de cada etapa, brindando un enfoque proactivo y completo para el cuidado de las mascotas.</p>
                        </Col>
                        <Col xs={12} md={6} className='d-flex justify-content-center'>
                            <Card className='mx-1' rounded>
                                <Card.Body>
                                    <Card.Title className='text-center rollingVet-negro'>Primeros Pasos</Card.Title>
                                    <Card.Img className='w-100 imagenesCard' src={PlanA} />
                                    <Card.Text className='text-center rollingVet-naranja'>
                                        Para mascotas de 0 a 5 años.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className='mx-1' rounded>
                                <Card.Body>
                                    <Card.Title className='text-center rollingVet-negro'>Madurando</Card.Title>
                                    <Card.Img className='w-100 imagenesCard' src={PlanB} />
                                    <Card.Text className='text-center rollingVet-naranja'>
                                        Para mascotas de 5 a 10 años.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className='mx-1' rounded>
                                <Card.Body>
                                    <Card.Title className='text-center rollingVet-negro'>Adultos</Card.Title>
                                    <Card.Img className='w-100 imagenesCard' src={PlanC} />
                                    <Card.Text className='text-center rollingVet-naranja'>
                                        Para mascotas de 10 años en adelante.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Card>
            </section>
            <section id='servicios' className='container my-2 border-rounded'>
                <Container id='serviciosContenedor'>
                    <div className='d-flex justify-content-around px-5 py-4'>
                        <Col className='col-md-6 d-flex justify-content-center  flex-column mx-3'>
                            <img className='servicio-imagen zoom-imagen' variant="top" src={Servicio1} />
                            <div>
                                <h3>Cirugias Generales</h3>
                                <p>
                                    Atencion las 24hs para mantener siempre a tu mejor amigo en buen estado, con la seguridad y aval de RollingVet.
                                </p>
                                <a className='texto-marron'>Ver mas</a>
                            </div>
                        </Col>
                        <Col className='col-md-6 d-flex justify-content-center  flex-column'>
                            <img className='servicio-imagen zoom-imagen' variant="top" src={Servicio2} />
                            <div>
                                <h3>Peluqueria</h3>
                                <p>
                                    Estilizado y baños, a cargo de profesionales capacitados para darle el look que ellos se merecen.
                                </p>
                                <a className='texto-marron'>Ver mas</a>
                            </div>
                        </Col>
                    </div>
                </Container>
                <Container id='serviciosContenedor'>
                    <div className='d-flex justify-content-around px-5 py-4'>
                        <Col className='col-md-6 d-flex justify-content-center  flex-column mx-3'>
                            <img className='servicio-imagen zoom-imagen' variant="top" src={Servicio3} />
                            <div>
                                <h3>Pet Shop</h3>
                                <p>
                                    Tenemos la mas amplia variedad de juguetes,ropa y accesorios!. Vení y mirá como ellos tambien se pueden entrenetener con nuestros productos.
                                </p>
                                <a className='texto-marron'>Ver mas</a>
                            </div>
                        </Col>
                        <Col className='col-md-6 d-flex justify-content-center  flex-column'>
                            <img className='servicio-imagen zoom-imagen' variant="top" src={Servicio4} />
                            <div>
                                <h3>Vacunacion y Control</h3>
                                <p>
                                    Realizadas en nuestra sala de Vacunacion, llevamos a cabo el control rutinario de todos los refuerzos necesarios para mantenerlos Sanos y Fuertes
                                </p>
                                <a className='texto-marron'>Ver mas</a>
                            </div>
                        </Col>
                    </div>
                </Container>

            </section>
            <section id='colaboradores'>
                <Container className='bg-white'>
                    <div className='d-flex'>
                        <div>
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://images.pexels.com/photos/6235666/pexels-photo-6235666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>First slide label</h3>
                                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="holder.js/800x400?text=Second slide&bg=282c34"
                                        alt="Second slide"
                                    />

                                    <Carousel.Caption>
                                        <h3>Second slide label</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="holder.js/800x400?text=Third slide&bg=20232a"
                                        alt="Third slide"
                                    />

                                    <Carousel.Caption>
                                        <h3>Third slide label</h3>
                                        <p>
                                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                        </p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                        <div>

                        </div>
                    </div>
                </Container>
            </section>
            <section id='testimonios'>
            </section>
        </>
    );
};

export default Principal;