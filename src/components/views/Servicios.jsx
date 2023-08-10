import Servicio1 from "../../assets/pexels-photo-4483327.png";
import Servicio2 from "../../assets/peliqueria1.jpg";
import Servicio3 from "../../assets/petsshop1.jpeg";
import Servicio4 from "../../assets/vacunacion1.jpeg";
import '../../App.css';
import { Row, Col} from 'react-bootstrap';
import { Link } from "react-router-dom";

const Servicios = () => {
    return (
            <section className='container'>
                <Row id='serviciosContenedor' className='justify-content-around text-white py-4'>
                    <Col lg={5} md={5} xs={12} className='pt-4'>
                        <div>
                            <img className='servicio-imagen zoom-imagen rounded' variant="top" src={Servicio1} />
                        </div>
                        <div className='mt-3'>
                            <h3>Cirugias Generales</h3>
                            <p>
                                Atención las 24hs para mantener siempre a tu mejor amigo en buen estado, con la seguridad y aval de RollingVet.
                            </p>
                            <Link className='text-white' to="/*">Ver más</Link>
                        </div>
                    </Col>
                    <Col lg={5} md={5} xs={12} className='pt-4'>
                        <div>
                            <img className='servicio-imagen zoom-imagen rounded' variant="top" src={Servicio2} />
                        </div>
                        <div className='mt-3'>
                            <h3>Peluqueria</h3>
                            <p>
                                Estilizado y baños, a cargo de profesionales capacitados para darle el look que ellos se merecen.
                            </p>
                            <Link className='text-white' to="/*">Ver más</Link>
                        </div>
                    </Col>
                    <Col lg={5} md={5} xs={12} className='pt-4'>
                        <div >
                            <img className='servicio-imagen zoom-imagen rounded' variant="top" src={Servicio3} />
                        </div>
                        <div className='mt-3'> 
                            <h3>Pets Shop</h3>
                            <p>
                                Tenemos la más amplia variedad de juguetes, ropa y accesorios. ¡Vení y mirá cómo ellos también pueden entretenerse con nuestros productos!
                            </p>
                            <Link className='text-white' to="/*">Ver más</Link>
                        </div>
                    </Col>
                    <Col lg={5} md={5} xs={12} className='pt-4'>
                        <div >
                            <img className='servicio-imagen zoom-imagen rounded' variant="top" src={Servicio4} />
                        </div>
                        <div className='mt-3'>
                            <h3>Vacunación y Control</h3>
                            <p>
                                Realizadas en nuestra sala de Vacunación, llevamos a cabo el control rutinario de todos nuestros pacientes.
                            </p>
                            <Link className='text-white' to="/*">Ver más</Link>
                        </div>
                    </Col>
                </Row>
            </section>
    );
};

export default Servicios;