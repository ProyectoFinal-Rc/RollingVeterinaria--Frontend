import Video from '../assets/VideoRCVet.mp4';
import { Container, Row, Col, Button, Card, Carousel } from 'react-bootstrap';
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
                                        Para mascotas mayores de 10 años.
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
                    <h2 className='text-center my-3 display-3'>Nuestros <strong className='rollingVet-naranja '>Profesionales</strong></h2>
                    <hr className='mx-5 ' />
                    <div className='d-flex'>
                        <div className='Container'>
                            <Carousel>
                                <Carousel.Item className='d-flex'>
                                    <img
                                        className="d-block estiloImagenesCarousel"
                                        src="https://images.pexels.com/photos/6235666/pexels-photo-6235666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>Diego Casella</h3>
                                        <p>Espec. en Traumatologia</p>
                                    </Carousel.Caption>
                                    <h3>Diego casella</h3>
                                    <p>
                                        "El Dr. Juan García es un veterinario especialista en traumatología con 28 años de experiencia. Su pasión por los animales y su compromiso con el bienestar de sus pacientes se reflejan en su dedicación diaria en RollingVet.
                                        Como profesional, el Dr. García destaca por su destreza y conocimiento en el diagnóstico y tratamiento de lesiones traumáticas en mascotas. Su amplio expertise le permite brindar soluciones efectivas y alivio a aquellos animales que han sufrido traumatismos.
                                        Sin embargo, su enfoque va más allá de la medicina veterinaria. El Dr. García se enorgullece de establecer conexiones significativas con sus pacientes y sus familias. Su objetivo es transmitir un mensaje de compasión, amor y respeto hacia todos los seres vivos. Promover el bienestar animal y fomentar la confianza entre las personas y sus queridas mascotas son valores fundamentales en su práctica profesional.
                                        Dentro del equipo de RollingVet, el Dr. García se destaca por su compromiso y liderazgo. Trabaja en colaboración con sus colegas para mejorar la calidad de vida de los animales y difundir un mensaje de cuidado y respeto en la comunidad.
                                        Si estás buscando un veterinario especializado en traumatología con amplia experiencia y una genuina pasión por los animales, el Dr. Juan García es la elección ideal para brindar el mejor cuidado a tus mascotas."
                                    </p>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block estiloImagenesCarousel"
                                        src="https://images.pexels.com/photos/6129506/pexels-photo-6129506.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                        alt="Second slide" style={{ width: "500px", height: "750px" }}
                                    />
                                    <Carousel.Caption>
                                        <h3>Karen Diaz</h3>
                                        <p>Espec. en Gastroenterologia</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block estiloImagenesCarousel"
                                        src="https://images.pexels.com/photos/8460157/pexels-photo-8460157.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                        alt="Third slide" style={{ width: "500px", height: "750px" }}
                                    />
                                    <Carousel.Caption>
                                        <h3>Gerardo Cases</h3>
                                        <p>
                                            Espec. Oncologo.
                                        </p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
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