import { Table, Button } from "react-bootstrap";
import ItemTurno from "./ItemTurno";
import { useState, useEffect } from "react";
import AgregarTurno from "./AgregarTurno";
import Swal from "sweetalert2";
import { obtenerListaTurnos } from "../../helpers/turnos";





const AdminTurnos = () => {
  const [turnos, SetTurnos] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  useEffect(()=>{
    obtenerListaTurnos().then((respuestaListaTurnos)=>{
        if(respuestaListaTurnos){
            SetTurnos(respuestaListaTurnos);
        }else {
            Swal.fire("error", "Intente realizar esta operación más tarde", "error");
        }
    })
},[])

    return (
        <section className="container">
        <div className="d-flex justify-content-between align-items-center mt-5">
          <h1 className="display-4 ">Turnos</h1>
           <Button className="btn btn-primary" onClick={handleShow}> {/*cambiar a link cuando se protejan las rutas */}
            Agregar turno
          </Button>
        </div>
        <hr />
        <Table responsive striped bordered hover>
          <thead>
            <tr>
              <th>Detalle turno</th>
              <th>Veterinario</th>
              <th>Mascota</th>
              <th>Fecha</th>
              <th>Hora</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {
              turnos.map((cita)=><ItemTurno key={cita.id} cita={cita} ></ItemTurno>)
            }
          </tbody>
        </Table>
        <AgregarTurno show={show} handleClose={handleClose}></AgregarTurno>
      </section>
    );
};

export default AdminTurnos;
