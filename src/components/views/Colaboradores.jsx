import '../../App.css';
import { Container, Carousel } from 'react-bootstrap';

const Colaboradores = () => {
    return (
        <section id='colaboradores' className='mt-4'>
            <Container className='pt-4 rounded' id='color-fondo-carrousel'>
                <h2 className='text-center my-3 display-3 fw-bold fs-2'>Nuestros <strong className='rollingVet-naranja '>Profesionales</strong></h2>
                <hr className='mx-5 ' />
                <div className=''>
                    <div className='container'>
                        <Carousel>
                            <Carousel.Item className='my-5'>
                                <div className='d-flex flex-md-column align-items-center carruseles'>
                                    <img
                                        className="d-block estiloImagenesCarousel w-25 rounded"
                                        src="https://images.pexels.com/photos/6129506/pexels-photo-6129506.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                        alt="Second slide" 
                                    />
                                    <div className='d-flex flex-column justify-content-center align-items-center'>
                                        <h1 className='mb-5 display-3 fw-bold fs-2'>Karen Diaz</h1>
                                        <h4 className='rollingVet-naranja'>Especialista Oncologa</h4>
                                        <p className='mx-4 mt-5 fs-6'>
                                            La Dra. Karen Díaz es una médica especialista en oncología dedicada a cuidar la salud de las mascotas en RollingVet. Con 33 años de edad, su amor por los animales y su pasión por ver mejorar a los adorables peluditos de cuatro patas son motores impulsores de su trabajo.
                                            <br />Como oncóloga, la Dra. Díaz se especializa en el diagnóstico y tratamiento de enfermedades relacionadas con el cáncer en animales. Su enfoque principal es asegurarse de que cada paciente reciba la atención y los cuidados necesarios para enfrentar esta enfermedad. Destaca por su experiencia en el manejo de diferentes tipos de cáncer y en la aplicación de tratamientos adecuados para mejorar la calidad de vida de las mascotas.
                                        </p>
                                    </div>
                                </div>
                        </Carousel.Item>
                        <Carousel.Item className='my-5'>
                            <div className='d-flex flex-md-column carruseles align-items-center'>
                                <img
                                    className="d-block estiloImagenesCarousel w-25 rounded"
                                    src="https://images.pexels.com/photos/8460157/pexels-photo-8460157.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                    alt="Third slide" 
                                />
                                <div className='d-flex flex-column justify-content-center align-items-center'>
                                    <h1 className='mb-5 display-3 fw-bold text-center fs-2' >Gerardo Marruecos</h1>
                                    <h4 className='rollingVet-naranja text-center'>Especialista en Gastroenterologia</h4>
                                    <p className='mx-4 mt-5 fs-6'>
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
    );
};

export default Colaboradores;