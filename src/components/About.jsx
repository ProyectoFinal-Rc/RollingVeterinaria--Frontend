import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import './about.css'

const developers = [
  {
    nombre: "",
    foto: "/src/assets/patita.png",
    lenguajes: ["HTML", "CSS", "JavaScript"],
    descripcion:
      "Un apasionado desarrollador web con experiencia en front-end y diseño de sitios atractivos y funcionales.",
    animalFavorito: "",
  },
  {
    nombre: "Mauricio Soria",
    foto: "/src/assets/patita.png",
    lenguajes: ["JavaScript", "React", "Node.js"],
    descripcion:
      "Apasionado por la tecnología , siempre en busqueda de nuevos conocimientos.",
    animalFavorito: "Perro",
  },
  {
    nombre: "Mauricio Soria",
    foto: "/src/assets/patita.png",
    lenguajes: ["JavaScript", "React", "Node.js","Html","Css"],
    descripcion:
      "Apasionado por la tecnología , siempre en busqueda de nuevos conocimientos.",
    animalFavorito: "Perro",
  },

];

const About = () => {

  return (
    <>
      <div className="banner">
        <h1>Nuestro Equipo</h1>
      </div>
      <Container>
        <Row>
          {developers.map((developer, index) => (
            <Col md={4} key={index}>
              <Card className="mb-4">
                <Card.Body className="cardBackgound">
                  <Card.Title className="fuentePatitas">{developer.nombre}</Card.Title>
                  <Card.Img variant="top" src={developer.foto} /><Card.Img />
                  <Card.Text className="a">{developer.descripcion}</Card.Text>
                  <Card.Text>
                    <strong>Lenguajes y Tecnologias:</strong> {developer.lenguajes.join(", ")}
                  </Card.Text>
                  <Card.Text><strong>Animal Favorito:</strong> {developer.animalFavorito}</Card.Text>
                  <div className="social-buttons botonesRedes">
                    <Button variant="" href="">
                      <FaInstagram size={24} />
                    </Button>
                    <Button variant="" href="">
                      <FaLinkedin size={24} />
                    </Button>
                    <Button variant="" href="">
                      <FaGithub size={24} />
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

    </>
  )
}

export default About