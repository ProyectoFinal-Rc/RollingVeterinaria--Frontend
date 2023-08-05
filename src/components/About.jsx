import { Container, Row, Col, Card, Button } from "react-bootstrap";
import './about.css'

const developers = [
  {
    nombre: "Juan Pablo Alba",
    foto: "/src/assets/patita.png",
    lenguajes: ["HTML", "CSS", "JavaScript"],
    descripcion:
      "Un dedicado estudiante de programación. Tiene sólidas habilidades técnicas, así como excelentes habilidades interpersonales que le permiten liderar equipos",
    animalFavorito: "Perro",
    github: "https://github.com/JuanPiAlba"
  },
  {
    nombre: "Mauricio Soria",
    foto: "/src/assets/patita.png",
    lenguajes: ["JavaScript", "React", "Node.js"],
    descripcion:
      "Apasionado por la tecnología , siempre en busqueda de nuevos conocimientos.",
    animalFavorito: "Perro",
    github: "https://github.com/MauricioSor"
  },
  {
    nombre: "Malena de Arriba",
    foto: "/src/assets/kittens-cat-cat-puppy-rush-45170.png",
    lenguajes: ["JavaScript", "React", "Node.js", "Html", "Css"],
    descripcion:
      "Male, una apasionada estudiante de programación fullstack. Además de su dedicación a la programación, encuentra equilibrio y satisfacción en sus otros intereses: el deporte y la pintura",
    animalFavorito: "Gato",
    github: "https://github.com/mmaleducada"
  },
  {
    nombre: "Cristina Ismael Gramajo",
    foto: "/src/assets/patita.png",
    lenguajes: ["HTML", "CSS", "JavaScript"],
    descripcion:
      "Un estudiante de desarrollo web con experiencia en front-end y diseño de sitios atractivos y funcionales.",
    animalFavorito: "Gato",
    github: "https://github.com/Cristian021195"
  },
  {
    nombre: "Juan Manuel Llanos",
    foto: "/src/assets/patita.png",
    lenguajes: ["HTML", "CSS", "JavaScript"],
    descripcion:
      "Un apasionado del mundo de la programacion, disfruta de la resolución de problemas y el trabajo en equipo",
    animalFavorito: "Gato",
    github: "https://github.com/juanmllanos"
  },
  {
    nombre: "Facundo Gomez",
    foto: "/src/assets/patita.png",
    lenguajes: ["HTML", "CSS", "JavaScript"],
    descripcion:
      "Un dedicado desarrollador web novato. Aunque es relativamente nuevo en el campo de la programación, su entusiasmo y sed de conocimiento son palpables.",
    animalFavorito: "Gato",
    github: "https://github.com/Smlich"
  }

];

const About = () => {

  return (
    <Container className="mt-2">
      <div className="text-center">
        <h1 id="titulo-about" className="fw-bold text-center">EL EQUIPO</h1>
        <img src="./src/assets/nosotros.png" alt="Imagenes de animales (dibujos animados)" className="imagen-nosotros" />
      </div>
      <Row className="mt-4 text-center justify-content-center">
        {developers.map((developer, index) => (
          <Col md={6} key={index}>
            <Card className="mb-4" id="card-contenedor-about">
              <Card.Body className="cardBackgound d-flex flex-column justify-content-between p-3">
                <div className="mainCard">
                  <Card.Title className="fw-bold fs-2 my-3" id="card-nombre">{developer.nombre}</Card.Title>
                  <Card.Text className="compressed-text my-4">
                    {developer.descripcion}
                  </Card.Text>
                </div>
                <div className="footerCard">
                  <Card.Text>
                    <strong>Lenguajes y Tecnologias:</strong> {developer.lenguajes.join(", ")}
                  </Card.Text>
                  <Card.Text><strong>Animal Favorito:</strong> {developer.animalFavorito}</Card.Text>
                  <Button variant="btn btn-lg" className="text-center" href={developer.github} target='_blank'>
                    <i class="bi bi-github" id="tamaño-icono"></i>
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default About