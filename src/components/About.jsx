import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Nosotros from "../assets/nosotros.png"
import './about.css'
import Avatares from "./Avatares";

const About = () => {

  return (
    <Container className="mt-3 fade-up">
      <div className="text-center mt-5">
        <h1 className="fw-bold text-center titular">El Equipo</h1>
        <img src={Nosotros} alt="Imagenes de animales (dibujos animados)" className="imagen-nosotros" />
      </div>
      <Row className="mt-4 text-center justify-content-center">
      <Avatares/>
      </Row>
    </Container>
  )
}

export default About