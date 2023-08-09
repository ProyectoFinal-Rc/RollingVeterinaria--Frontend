import { Col, Card, Button } from "react-bootstrap";
import Juanpi from "../assets/juampi.jpg"
import Mauri from "../assets/mauricio.jpeg"
import Male from "../assets/male.jpeg"
import Juanma from "../assets/juanma.jpg"
import Cristian from "../assets/Cristian.jpeg"
import Facu from "../assets/facundo.jpg"
import './about.css'
const Avatares = () => {
    return (
        <>
            <Col md={6}>
                <Card className="mb-4" id="card-contenedor-about">
                    <Card.Body className="cardBackgound d-flex flex-column justify-content-between p-3">
                        <div className="mainCard">
                            <Card.Title className="fw-bold fs-2 my-3" id="card-nombre">Cristina Ismael Gramajo</Card.Title>
                            <Card.Text className="compressed-text my-4">
                            Un estudiante de Licenciatura en informatica, experiencia en front-end y diseño de sitios atractivos y funcionales.
                            </Card.Text>
                        </div>
                        <div className="footerCard">
                            <Card.Img src={Cristian} className="rounded-circle w-50"></Card.Img>
                            <Card.Text>
                                <strong>Lenguajes y Tecnologias:
                                </strong> HTML, CSS, JavaScript, PHP, C#, ReactJS, NodeJS, MySQL, MongoDB
                            </Card.Text>
                            <Card.Text><strong>Animal Favorito:</strong>Gatos</Card.Text>
                            <Button variant="btn btn-lg" className="text-center" href="https://github.com/Cristian021195" target='_blank'>
                                <i className="bi bi-github" id="tamaño-icono"></i>
                            </Button>
                        </div>
                    </Card.Body>
                </Card>
            </Col>

            <Col md={6}>
                <Card className="mb-4" id="card-contenedor-about">
                    <Card.Body className="cardBackgound d-flex flex-column justify-content-between p-3">
                        <div className="mainCard">
                            <Card.Title className="fw-bold fs-2 my-3" id="card-nombre">Malena de Arriba</Card.Title>
                            <Card.Text className="compressed-text my-4">
                            Male, una apasionada estudiante de programación fullstack. Además de su dedicación a la programación, encuentra equilibrio y satisfacción en sus otros intereses: el deporte y la pintura.
                            </Card.Text>
                        </div>
                        <div className="footerCard">
                            <Card.Img src={Male} className="rounded-circle w-50"></Card.Img>
                            <Card.Text>
                                <strong>Lenguajes y Tecnologias:</strong> HTML, CSS, JavaScript, React, Node.js, MongoDB
                            </Card.Text>
                            <Card.Text><strong>Animal Favorito:</strong> Gatos</Card.Text>
                            <Button variant="btn btn-lg" className="text-center" href="https://github.com/mmaleducada" target='_blank'>
                                <i className="bi bi-github" id="tamaño-icono"></i>
                            </Button>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={6}>
                <Card className="mb-4" id="card-contenedor-about">
                    <Card.Body className="cardBackgound d-flex flex-column justify-content-between p-3">
                        <div className="mainCard">
                            <Card.Title className="fw-bold fs-2 my-3" id="card-nombre">Juan Manuel Llanos</Card.Title>
                            <Card.Text className="compressed-text my-4">
                            Un apasionado del mundo de la programacion, disfruta de la resolución de problemas y el trabajo en equipo.
                            </Card.Text>
                        </div>
                        <div className="footerCard">
                            <Card.Img src={Juanma} className="rounded-circle w-50"></Card.Img>
                            <Card.Text>
                                <strong>Lenguajes y Tecnologias:</strong> HTML, CSS, JavaScript, React, Node.js, MongoDB
                            </Card.Text>
                            <Card.Text><strong>Animal Favorito:</strong> Gatos</Card.Text>
                            <Button variant="btn btn-lg" className="text-center" href="https://github.com/juanmllanos" target='_blank'>
                                <i className="bi bi-github" id="tamaño-icono"></i>
                            </Button>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={6}>
                <Card className="mb-4" id="card-contenedor-about">
                    <Card.Body className="cardBackgound d-flex flex-column justify-content-between p-3">
                        <div className="mainCard">
                            <Card.Title className="fw-bold fs-2 my-3" id="card-nombre">Juan Pablo Alba</Card.Title>
                            <Card.Text className="compressed-text my-4">
                            Un dedicado estudiante de programación. Tiene sólidas habilidades técnicas, así como excelentes habilidades interpersonales que le permiten liderar equipos.
                            </Card.Text>
                        </div>
                        <div className="footerCard">
                            <Card.Img src={Juanpi} className="rounded-circle w-50"></Card.Img>
                            <Card.Text>
                                <strong>Lenguajes y Tecnologias:</strong> HTML, CSS, JavaScript, React, Node.js, MongoDB
                            </Card.Text>
                            <Card.Text><strong>Animal Favorito:</strong> Perros</Card.Text>
                            <Button variant="btn btn-lg" className="text-center" href="https://github.com/JuanPiAlba" target='_blank'>
                                <i className="bi bi-github" id="tamaño-icono"></i>
                            </Button>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={6}>
                <Card className="mb-4" id="card-contenedor-about">
                    <Card.Body className="cardBackgound d-flex flex-column justify-content-between p-3">
                        <div className="mainCard">
                            <Card.Title className="fw-bold fs-2 my-3" id="card-nombre">Mauricio Soria</Card.Title>
                            <Card.Text className="compressed-text my-4">
                            Apasionado por la tecnología, siempre en busqueda de nuevos conocimientos, Mauricio disfruta del trabajo en equipo y la constante retroalimentación. 
                            </Card.Text>
                        </div>
                        <div className="footerCard">
                            <Card.Img src={Mauri} className="rounded-circle w-50"></Card.Img>
                            <Card.Text>
                                <strong>Lenguajes y Tecnologias:</strong> HTML, CSS, JavaScript, React, Node.js, MongoDB
                            </Card.Text>
                            <Card.Text><strong>Animal Favorito:</strong> Perros</Card.Text>
                            <Button variant="btn btn-lg" className="text-center" href="https://github.com/MauricioSor" target='_blank'>
                                <i className="bi bi-github" id="tamaño-icono"></i>
                            </Button>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={6}>
                <Card className="mb-4" id="card-contenedor-about">
                    <Card.Body className="cardBackgound d-flex flex-column justify-content-between p-3">
                        <div className="mainCard">
                            <Card.Title className="fw-bold fs-2 my-3" id="card-nombre">Facundo Gomez</Card.Title>
                            <Card.Text className="compressed-text my-4">
                            Un dedicado desarrollador web novato. Aunque es relativamente nuevo en el campo de la programación, su entusiasmo y sed de conocimiento son palpables.
                            </Card.Text>
                        </div>
                        <div className="footerCard">
                            <Card.Img src={Facu} className="rounded-circle w-50"></Card.Img>
                            <Card.Text>
                                <strong>Lenguajes y Tecnologias:</strong> HTML, CSS, JavaScript, React, Node.js, MongoDB
                            </Card.Text>
                            <Card.Text><strong>Animal Favorito:</strong> Gatos</Card.Text>
                            <Button variant="btn btn-lg" className="text-center" href="https://github.com/Smlich" target='_blank'>
                                <i className="bi bi-github" id="tamaño-icono"></i>
                            </Button>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
};

export default Avatares;