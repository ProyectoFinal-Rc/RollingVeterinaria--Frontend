import React from 'react';

import Servicio1 from "../../assets/pexels-photo-4483327.png";
import Servicio2 from "../../assets/imagenes/servicio-2.jpg";
import Servicio3 from "../../assets/imagenes/comohacercrecertunegociopetshop.jpg";
import Servicio4 from "../../assets/imagenes/servicio-4.jpeg";
import '../../App.css';
import { Row, Col} from 'react-bootstrap';

const Servicios = () => {
    return (
            <section className='container'>
                <Row id='serviciosContenedor' className='justify-content-around text-white py-4'>
                    <Col lg={5} md={5} xs={12} className='pt-4'>
                        <div>
                            <img className='servicio-imagen zoom-imagen' variant="top" src={Servicio1} />
                        </div>
                        <div>
                            <h3>Cirugias Generales</h3>
                            <p>
                                Atención las 24hs para mantener siempre a tu mejor amigo en buen estado, con la seguridad y aval de RollingVet.
                            </p>
                            <a className='text-white' href="/*">Ver más</a>
                        </div>
                    </Col>
                    <Col lg={5} md={5} xs={12} className='pt-4'>
                        <div>
                            <img className='servicio-imagen zoom-imagen' variant="top" src={Servicio2} />
                        </div>
                        <div>
                            <h3>Peluqueria</h3>
                            <p>
                                Estilizado y baños, a cargo de profesionales capacitados para darle el look que ellos se merecen.
                            </p>
                            <a className='text-white' href="/*">Ver más</a>
                        </div>
                    </Col>
                    <Col lg={5} md={5} xs={12} className='pt-4'>
                        <div >
                            <img className='servicio-imagen zoom-imagen' variant="top" src={Servicio3} />
                        </div>
                        <div>
                            <h3>Pet Shop</h3>
                            <p>
                                Tenemos la más amplia variedad de juguetes, ropa y accesorios. ¡Vení y mirá cómo ellos también pueden entretenerse con nuestros productos!
                            </p>
                            <a className='text-white' href="/*">Ver más</a>
                        </div>
                    </Col>
                    <Col lg={5} md={5} xs={12} className='pt-4'>
                        <div >
                            <img className='servicio-imagen zoom-imagen' variant="top" src={Servicio4} />
                        </div>
                        <div>
                            <h3>Vacunación y Control</h3>
                            <p>
                                Realizadas en nuestra sala de Vacunación, llevamos a cabo el control rutinario de todos nuestros pacientes.
                            </p>
                            <a className='text-white' href="/*">Ver más</a>
                        </div>
                    </Col>
                </Row>
            </section>
    );
};

export default Servicios;