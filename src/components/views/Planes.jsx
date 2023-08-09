import PlanA from '../../assets/pexels-photo-3198005_1.png';
import PlanB from '../../assets/istockphoto-1324099927-612x612.png';
import PlanC from '../../assets/istockphoto-635820902-612x612.png';
import '../../App.css';
import { Row, Col, Card} from 'react-bootstrap';

const Planes = () => {
    return (
        <div>
                    <section id='planes' className='container my-2 mt-5'>
                <Card>
                    <Row className='flex-row justify-content-center my-3'>
                        <Col xs={12} sm={12} md={12} lg={4}>
                            <h1 className='text-start ms-3 rollingVet-negro fw-bold fs-2'>Planes de cuidado</h1>
                            <p className='text-start ms-3 rollingVet-naranja'>Nuestra veterinaria ofrece un servicio exclusivo de planes de cuidado mensuales diseñados para garantizar la salud y el bienestar óptimo de las mascotas a lo largo de diferentes etapas de su vida. Estos planes están diseñados pensando en las necesidades específicas de cada etapa, brindando un enfoque proactivo y completo para el cuidado de las mascotas.</p>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={8} className='d-flex justify-content-center'>
                            <Row xs={1} md={2} lg={3} className='g-4'>
                                <Col>
                                    <Card className='mx-1 border-0'>
                                        <Card.Body>
                                            <Card.Title className='text-center rollingVet-negro'>Primeros Pasos</Card.Title>
                                            <Card.Img className='w-100 imagenesCard' src={PlanA} />
                                            <Card.Text className='text-center rollingVet-naranja'>
                                                Para mascotas de 0 a 5 años.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card className='mx-1 border-0' >
                                        <Card.Body>
                                            <Card.Title className='text-center rollingVet-negro'>Madurando</Card.Title>
                                            <Card.Img className='w-100 imagenesCard' src={PlanB} />
                                            <Card.Text className='text-center rollingVet-naranja'>
                                                Para mascotas de 5 a 10 años.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card className='mx-1 border-0'>
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
                        </Col>
                    </Row>
                </Card>
            </section>
        </div>
    );
};

export default Planes;