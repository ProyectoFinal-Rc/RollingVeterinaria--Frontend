import React from 'react';

import '../App.css';
import { Container, Row, Col, Button, Card, Carousel } from 'react-bootstrap';

const Colaboradores = () => {
    return (
        <div>
                    <section id='colaboradores'>
                <Container className='bg-white'>
                    <h2 className='text-center my-3 display-3 fw-bold'>Nuestros <strong className='rollingVet-naranja '>Profesionales</strong></h2>
                    <hr className='mx-5 ' />
                    <div className=''>
                        <div className='container'>
                            <Carousel>
                                <Carousel.Item>
                                    <div className='d-flex carruseles'>
                                        <img
                                            className="d-block estiloImagenesCarousel"
                                            src="https://images.pexels.com/photos/6129506/pexels-photo-6129506.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                            alt="Second slide" style={{ width: "500px", height: "750px" }}
                                        />
                                        <div className='d-flex flex-column justify-content-start align-items-center'>
                                            <h1 className='mb-5 display-3 fw-bold'>Karen Diaz</h1>
                                            <h4 className='rollingVet-naranja'>Especialista Oncologa</h4>
                                            <p className='mx-4 mt-5 fs-4'>
                                                La Dra. Karen Díaz es una médica especialista en oncología dedicada a cuidar la salud de las mascotas en RollingVet. Con 33 años de edad, su amor por los animales y su pasión por ver mejorar a los adorables peluditos de cuatro patas son motores impulsores de su trabajo.
                                                <br />Como oncóloga, la Dra. Díaz se especializa en el diagnóstico y tratamiento de enfermedades relacionadas con el cáncer en animales. Su enfoque principal es asegurarse de que cada paciente reciba la atención y los cuidados necesarios para enfrentar esta enfermedad. Destaca por su experiencia en el manejo de diferentes tipos de cáncer y en la aplicación de tratamientos adecuados para mejorar la calidad de vida de las mascotas.
                                            </p>
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className='d-flex carruseles'>
                                        <img
                                            className="d-block estiloImagenesCarousel"
                                            src="https://images.pexels.com/photos/8460157/pexels-photo-8460157.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                            alt="Third slide" style={{ width: "500px", height: "750px" }}
                                        />
                                        <div className='d-flex flex-column justify-content-start align-items-center'>
                                            <h1 className='mb-5 display-3 fw-bold'>Gerardo Marruecos</h1>
                                            <h4 className='rollingVet-naranja'>Especialista en Gastroenterologia</h4>
                                            <p className='mx-4 mt-5 fs-4'>
                                                El Dr. Gerardo Marruecos es un especialista destacado en gastroenterología canina en RollingVet. Con 50 años de edad, lleva ejerciendo su labor como veterinario durante los últimos 20 años con una dedicación y alegría inquebrantables. Su pasión por trabajar con los animales no solo lo mantiene joven de espíritu, sino que también le otorga años de vida.Con una trayectoria sólida y un profundo conocimiento en su campo, el Dr. Marruecos se ha convertido en una referencia en el ámbito de la gastroenterología canina. Su experiencia y especialización en enfermedades y trastornos gastrointestinales en perros le permiten brindar diagnósticos precisos y tratamientos efectivos.
                                            </p>
                                        </div>
                                    </div>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
};

export default Colaboradores;