import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Nosotros from "../assets/nosotros.png"
import './about.css'
import Avatares from "./Avatares";

/* const developers = [
  {
    nombre: "Juan Pablo Alba",
    foto: "/src/assets/patita.png",
    lenguajes: ["HTML", "CSS", "JavaScript"],
    descripcion:
      "Un dedicado estudiante de programación. Tiene sólidas habilidades técnicas, así como excelentes habilidades interpersonales que le permiten liderar equipos.",
    animalFavorito: "Perro",
    github: "https://github.com/JuanPiAlba",
    avatar:{Juanpi}
  },
  {
    nombre: "Mauricio Soria",
    foto: "/src/assets/patita.png",
    lenguajes: ["JavaScript", "React", "Node.js"],
    descripcion:
      "Apasionado por la tecnología, siempre en busqueda de nuevos conocimientos, Mauricio disfruta del trabajo en equipo y la constante retroalimentación. ",
    animalFavorito: "Perro",
    github: "https://github.com/MauricioSor",
    avatar:{Mauri}
  },
  {
    nombre: "Malena de Arriba",
    foto: "/src/assets/kittens-cat-cat-puppy-rush-45170.png",
    lenguajes: ["JavaScript", "React", "Node.js", "Html", "Css"],
    descripcion:
      "Male, una apasionada estudiante de programación fullstack. Además de su dedicación a la programación, encuentra equilibrio y satisfacción en sus otros intereses: el deporte y la pintura.",
    animalFavorito: "Gato",
    github: "https://github.com/mmaleducada",
    avatar:{Male}
  },
  {
    nombre: "Cristina Ismael Gramajo",
    foto: "/src/assets/patita.png",
    lenguajes: ["HTML", "CSS", "JavaScript", "PHP", "C#", "ReactJS", "NodeJS", "MySQL", "MongoDB"],
    descripcion:
      "Un estudiante de Licenciatura en informatica, experiencia en front-end y diseño de sitios atractivos y funcionales.",
    animalFavorito: "Gato",
    github: "https://github.com/Cristian021195",
    avatar:{Cristian}
  },
  {
    nombre: "Juan Manuel Llanos",
    foto: "/src/assets/patita.png",
    lenguajes: ["HTML", "CSS", "JavaScript"],
    descripcion:
      "Un apasionado del mundo de la programacion, disfruta de la resolución de problemas y el trabajo en equipo.",
    animalFavorito: "Gato",
    github: "https://github.com/juanmllanos",
    avatar:{Juanma}
  },
  {
    nombre: "Facundo Gomez",
    foto: "/src/assets/patita.png",
    lenguajes: ["HTML", "CSS", "JavaScript"],
    descripcion:
      "Un dedicado desarrollador web novato. Aunque es relativamente nuevo en el campo de la programación, su entusiasmo y sed de conocimiento son palpables.",
    animalFavorito: "Gato",
    github: "https://github.com/Smlich",
    avatar:{Facu}
  }

]; */

const About = () => {

  return (
    <Container className="mt-3 fade-up">
      <div className="text-center mt-5">
        <h1 className="fw-bold text-center titular">El equipo</h1>
        <img src={Nosotros} alt="Imagenes de animales (dibujos animados)" className="imagen-nosotros" />
      </div>
      <Row className="mt-4 text-center justify-content-center">
      <Avatares/>
      </Row>
    </Container>
  )
}

export default About