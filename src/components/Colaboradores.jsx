import React from 'react';

import '../App.css';
import { Container, Row, Col, Button, Card, Carousel } from 'react-bootstrap';

const Colaboradores = () => {
    return (
        <div>
                    <section id='colaboradores'>
                <Container className='bg-white'>
                    <h2 className='text-center my-3 display-3'>Nuestros <strong className='rollingVet-naranja '>Profesionales</strong></h2>
                    <hr className='mx-5 ' />
                    <div className=''>
                        <div className='container'>
                            <Carousel>
                                <Carousel.Item>
                                    <div className='d-flex carruseles'>
                                        <img
                                            className="d-block estiloImagenesCarousel"
                                            src="https://images.pexels.com/photos/6235666/pexels-photo-6235666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                            alt="First slide"
                                        />
                                        <div className='d-flex flex-column justify-content-center align-items-center'>
                                            <h1 className='mb-5 display-3'>Diego casella</h1>
                                            <h4 className='rollingVet-naranja'>Especialista en Traumatologia</h4>
                                            <p className='mx-4 mt-5'>
                                                "El Dr. Diego casella es un veterinario especialista en traumatología con 28 años de experiencia. Su pasión por los animales y su compromiso con el bienestar de sus pacientes se reflejan en su dedicación diaria en RollingVet.
                                                <br />Como profesional, el Dr. García destaca por su destreza y conocimiento en el diagnóstico y tratamiento de lesiones traumáticas en mascotas. Su amplio expertise le permite brindar soluciones efectivas y alivio a aquellos animales que han sufrido traumatismos.
                                                <br />Sin embargo, su enfoque va más allá de la medicina veterinaria. El Dr. García se enorgullece de establecer conexiones significativas con sus pacientes y sus familias. Su objetivo es transmitir un mensaje de compasión, amor y respeto hacia todos los seres vivos. Promover el bienestar animal y fomentar la confianza entre las personas y sus queridas mascotas son valores fundamentales en su práctica profesional.
                                                <br />Dentro del equipo de RollingVet, el Dr. García se destaca por su compromiso y liderazgo. Trabaja en colaboración con sus colegas para mejorar la calidad de vida de los animales y difundir un mensaje de cuidado y respeto en la comunidad.
                                                <br />Si estás buscando un veterinario especializado en traumatología con amplia experiencia y una genuina pasión por los animales, el Dr. Juan García es la elección ideal para brindar el mejor cuidado a tus mascotas."
                                            </p>
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className='d-flex carruseles'>
                                        <img
                                            className="d-block estiloImagenesCarousel"
                                            src="https://images.pexels.com/photos/6129506/pexels-photo-6129506.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                            alt="Second slide" style={{ width: "500px", height: "750px" }}
                                        />
                                        <div className='d-flex flex-column justify-content-center align-items-center'>
                                            <h1 className='mb-5 display-3'>Karen Diaz</h1>
                                            <h4 className='rollingVet-naranja'>Especialista Oncologa</h4>
                                            <p className='mx-4 mt-5'>
                                                La Dra. Karen Díaz es una médica especialista en oncología dedicada a cuidar la salud de las mascotas en RollingVet. Con 33 años de edad, su amor por los animales y su pasión por ver mejorar a los adorables peluditos de cuatro patas son motores impulsores de su trabajo.
                                                <br />Como oncóloga, la Dra. Díaz se especializa en el diagnóstico y tratamiento de enfermedades relacionadas con el cáncer en animales. Su enfoque principal es asegurarse de que cada paciente reciba la atención y los cuidados necesarios para enfrentar esta enfermedad. Destaca por su experiencia en el manejo de diferentes tipos de cáncer y en la aplicación de tratamientos adecuados para mejorar la calidad de vida de las mascotas.
                                                <br />La Dra. Díaz hace hincapié en la importancia de los controles regulares cada 3 meses como mínimo. Gracias a los instrumentos de vanguardia disponibles en RollingVet, puede realizar evaluaciones precisas y monitorear de cerca el progreso de cada paciente. Su compromiso es brindar el apoyo necesario tanto a las mascotas como a sus familias durante todo el proceso de tratamiento y recuperación.
                                                <br />Además de su experiencia médica, la Dra. Díaz se destaca por su calidez y empatía hacia las mascotas y sus dueños. Su objetivo es crear un ambiente de confianza donde tanto las mascotas como sus familias se sientan cómodas y apoyadas durante todo el proceso.
                                                <br />Si estás buscando una especialista en oncología comprometida, con experiencia y una genuina pasión por los animales, la Dra. Karen Díaz es la profesional ideal para brindar el cuidado y el apoyo necesario para las mascotas en su lucha contra el cáncer en RollingVet.
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
                                        <div className='d-flex flex-column justify-content-center align-items-center'>
                                            <h1 className='mb-5 display-3'>Gerardo Marruecos</h1>
                                            <h4 className='rollingVet-naranja'>Especialista en Gastroenterologia</h4>
                                            <p className='mx-4 mt-5'>
                                                El Dr. Gerardo Marruecos es un especialista destacado en gastroenterología canina en RollingVet. Con 50 años de edad, lleva ejerciendo su labor como veterinario durante los últimos 20 años con una dedicación y alegría inquebrantables. Su pasión por trabajar con los animales no solo lo mantiene joven de espíritu, sino que también le otorga años de vida.Con una trayectoria sólida y un profundo conocimiento en su campo, el Dr. Marruecos se ha convertido en una referencia en el ámbito de la gastroenterología canina. Su experiencia y especialización en enfermedades y trastornos gastrointestinales en perros le permiten brindar diagnósticos precisos y tratamientos efectivos.
                                                <br />El Dr. Marruecos se destaca por su constante búsqueda de conocimiento y su afán por mantenerse actualizado en los avances médicos y tecnológicos. Ha completado múltiples cursos y maestrías en su especialidad, lo que le permite estar al tanto de los últimos desarrollos en el campo de la gastroenterología veterinaria.
                                                <br />Dentro del equipo de RollingVet, el Dr. Marruecos es reconocido como el más grande y respetado. Su experiencia y liderazgo lo convierten en una figura clave en el cuidado de las mascotas. Siempre está dispuesto a compartir su conocimiento con sus colegas y colaborar en casos más complejos.
                                                <br />Además de su dedicación profesional, el Dr. Marruecos es conocido por su calidez y trato amable hacia las mascotas y sus dueños. Su compromiso con el bienestar y la salud de los animales es evidente en cada interacción.
                                                <br />Si buscas a un especialista en gastroenterología canina con una amplia experiencia, actualizado en los avances médicos y con un genuino amor por los animales, el Dr. Gerardo Marruecos es la elección perfecta para brindar el mejor cuidado a tus queridas mascotas en RollingVet.
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