import React from 'react';

import Servicio1 from "../assets/imagenes de animales/pexels-photo-4483327.png";
import Servicio2 from "../assets/imagenes de animales/MiConv.com__descarga.png";
import Servicio3 from "../assets/imagenes de animales/comohacercrecertunegociopetshop.png";
import Servicio4 from "../assets/imagenes de animales/MiConv.com__descarga1.png";
import '../App.css';
import { Container, Row, Col, Button, Card, Carousel } from 'react-bootstrap';

const Servicios = () => {
    return (
        <div>
                    <section id='servicios' className='container my-2 border-rounded'>
                <Row id='serviciosContenedor' className='d-flex justify-content-center flex-row mx-3'>
                    <Col className='d-flex justify-content-center flex-column my-3 mx-3'>
                        <div className='container d-flex'>
                            <img className='servicio-imagen mt-3 zoom-imagen' variant="top" src={Servicio1} />
                        </div>
                        <div className="container textoServicios">
                            <h3>Cirugias Generales</h3>
                            <p>
                                Atención las 24hs para mantener siempre a tu mejor amigo en buen estado, con la seguridad y aval de RollingVet.
                            </p>
                            <a className='texto-marron'>Ver más</a>
                        </div>
                    </Col>
                    <Col className='d-flex justify-content-center flex-column my-3 mx-3'>
                        <div className='container d-flex'>
                            <img className='servicio-imagen mt-3 zoom-imagen' variant="top" src={Servicio2} />
                        </div>
                        <div className="container textoServicios">
                            <h3>Peluqueria</h3>
                            <p>
                                Estilizado y baños, a cargo de profesionales capacitados para darle el look que ellos se merecen.
                            </p>
                            <a className='texto-marron'>Ver más</a>
                        </div>
                    </Col>
                </Row>
                <Row id='serviciosContenedor' className='d-flex justify-content-center flex-row mx-3'>
                    <Col className='d-flex justify-content-center flex-column my-3 mx-3'>
                        <div className='container d-flex '>
                            <img className='servicio-imagen mt-3 zoom-imagen' variant="top" src={Servicio3} />
                        </div>
                        <div className="container textoServicios">
                            <h3>Pet Shop</h3>
                            <p>
                                Tenemos la más amplia variedad de juguetes, ropa y accesorios. ¡Vení y mirá cómo ellos también pueden entretenerse con nuestros productos!
                            </p>
                            <a className='texto-marron'>Ver más</a>
                        </div>
                    </Col>
                    <Col className='d-flex justify-content-center flex-column my-3 mx-3'>
                        <div className='container d-flex '>
                            <img className='servicio-imagen mt-3 zoom-imagen' variant="top" src={Servicio4} />
                        </div>
                        <div className="container textoServicios">
                            <h3>Vacunación y Control</h3>
                            <p>
                                Realizadas en nuestra sala de Vacunación, llevamos a cabo el control rutinario de todos los refuerzos necesarios para mantenerlos Sanos y Fuertes.
                            </p>
                            <a className='texto-marron'>Ver más</a>
                        </div>
                    </Col>
                </Row>
            </section>
        </div>
    );
};

export default Servicios;