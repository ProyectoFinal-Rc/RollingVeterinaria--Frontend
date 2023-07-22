import { useState, useEffect } from "react";
import { Button, Container, Row, } from "react-bootstrap";
import CardPaciente from "./CardPaciente";
import AgregarPaciente from "./AgregarPaciente"
import Filtro from "./Filtro";
import { obtenerListaPacientes } from "../../helpers/pacientes";
import Swal from "sweetalert2";


const AdminPacientes = () => {
    const [show,setShow] = useState(false);
    const handleClose = () => setShow(false)
    const handleShow = () => setShow (true)

    const [pacientes,setPacientes] = useState([]);
    
    useEffect(() => {
      obtenerListaPacientes().then((respuesta)=>{
        if(respuesta){
            setPacientes(respuesta)
        }else{
            Swal.fire("error", "Intente realizar esta operación más tarde", "error");
        }
      })
    }, [])
    


    return (

        <section className="container">
            <div className="d-flex justify-content-center">
                <h1>
                    Pacientes
                </h1>
            </div>
            <div className="d-flex justify-content-end">
                <Button onClick={handleShow}>Ingrese nuevo paciente</Button>
            </div>
            <div className="container">
                <Filtro></Filtro>
            </div>
            <Container>
                <Row>
                    {
                        pacientes.map((paciente)=><CardPaciente key={paciente.id} paciente={paciente} ></CardPaciente>)
                    }
                </Row>
            </Container>
            <AgregarPaciente show={show} handleClose={handleClose}></AgregarPaciente>
        </section>

    );
};

export default AdminPacientes;