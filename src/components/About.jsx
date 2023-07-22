import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import './about.css'

const developers = [
  {
    nombre: "Desarrollador 1",
    lenguajes: ["JavaScript", "Python", "HTML", "CSS"],
    descripcion:
      "Un apasionado desarrollador de software con experiencia en desarrollo web y programación.",
  },
  {
    nombre: "Desarrollador 2",
    lenguajes: ["Java", "C++", "SQL"],
    descripcion:
      "Un experto en lenguajes de programación orientados a objetos y desarrollo de aplicaciones.",
  },
  {
    nombre: "Desarrollador 3",
    lenguajes: ["Java", "C++", "SQL"],
    descripcion:
      "Un experto en lenguajes de programación orientados a objetos y desarrollo de aplicaciones.",
  },
  // Añade aquí más objetos con información sobre otros desarrolladores
];

const About = () => {

  return (
    <>
      <Container>
      <h1 className="my-5">Equipo de Desarrolladores</h1>
      <Row>
        {developers.map((developer, index) => (
          <Col md={4} key={index}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>{developer.nombre}</Card.Title>
                <Card.Text>
                  <strong>Lenguajes:</strong> {developer.lenguajes.join(", ")}
                </Card.Text>
                <Card.Text>{developer.descripcion}</Card.Text>
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