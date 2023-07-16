import Video from '../assets/VideoRCVet.mp4';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Principal = () => {
    return (
        <>
            <section id="video" className="position-relative overflow-hidden">
                <video className="position-absolute z-n1 d-none d-md-block" src={Video} autoPlay muted loop />
                <section className="pb-5 container-fluid">
                    <div id="tituloFraseGrande">
                        <div className="display-2 d-flex flex-column flex-md-row justify-content-center align-items-center gap-md-3 py-3" id="animacionPrincipal">
                            <div className="contenedorTextoAnimacion">
                                <span id="TextoGrupo1" className="text-primary slide-texto-fromBottom">Transformá</span>
                            </div>
                            <div className="contenedorTextoAnimacion">
                                <span id="TextoGrupo2" className="text-secondary slide-texto-fromTop">tu cuerpo</span>
                            </div>
                        </div>
                        <h3 className="h1 text-center">
                            <strong className="letrero texto-naranja">¡El éxito </strong>
                            <strong className="letrero texto-azul">comienza aquí!</strong>
                        </h3>
                    </div>
                </section>
            </section>
        </>
    );
};

export default Principal;