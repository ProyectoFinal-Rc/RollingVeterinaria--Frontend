import { Container, Row, Col, Card, Button } from "react-bootstrap";
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
    nombre: "Malena de Arriba",
    foto: "/src/assets/kittens-cat-cat-puppy-rush-45170.png",
    lenguajes: ["JavaScript", "React", "Node.js","Html","Css"],
    descripcion:
      "Male, una apasionada estudiante de programación fullstack. Con 26 años, su pasión por la tecnología y el desarrollo web la impulsan a aprender y crecer constantemente en este campo en constante evolución. Además de su dedicación a la programación, encuentra equilibrio y satisfacción en sus otros intereses: el deporte y la pintura",
    animalFavorito: "Gato",
  },
  {
    nombre: "Cristina Ismael Gramajo",
    foto: "/src/assets/patita.png",
    lenguajes: ["HTML", "CSS", "JavaScript"],
    descripcion:
      "Un apasionado desarrollador web con experiencia en front-end y diseño de sitios atractivos y funcionales.",
    animalFavorito: "Gato",
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
                  <Card.Text className="compressed-text text-truncate overflow-hidden"><strong>
                    {developer.descripcion}
                    </strong>
                    </Card.Text>
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