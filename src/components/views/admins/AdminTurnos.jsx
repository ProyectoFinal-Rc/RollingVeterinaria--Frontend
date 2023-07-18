import { Table, Button } from "react-bootstrap";
import ItemTurno from "./ItemTurno";
import { useState, useEffect, Fragment } from "react";
import AgregarTurno from "./AgregarTurno";
import Swal from "sweetalert2";
import { obtenerListaTurnos } from "../../helpers/turnos";
import EditarTurno from "./EditarTurno";





const AdminTurnos = () => {
  const [turnos, SetTurnos] = useState([]);
  const [turnoEditar, SetTurnoEditar] = useState({});
  const [show, setShow] = useState(false);
  const [showEditar, setShowEditar] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCloseEditar = () => setShowEditar(false);
  const handleShowEditar = () => setShowEditar(true);


  useEffect(()=>{
    obtenerListaTurnos().then((respuestaListaTurnos)=>{
        if(respuestaListaTurnos){
            SetTurnos(respuestaListaTurnos);
        }else {
            Swal.fire("error", "Intente realizar esta operación más tarde", "error");
        }
    })
  },[])

  const seleccionar = (id)=>{
    SetTurnoEditar(turnos.find((turno)=>turno.id === id))
  }

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
              /*turnos.map((cita)=><ItemTurno key={cita.id} cita={cita} ></ItemTurno>)*/
              turnos.map((cita)=>{
                return (
                  <Fragment key={cita.id}>
                  <tr>
                    <td>{cita.detalleCita}</td>
                    <td>{cita.veterinario}</td>
                    <td>{cita.mascota}</td>
                    <td>{cita.fecha}</td>
                    <td>{cita.hora}</td>
                    <td className="d-flex justify-content-end align-items-star">
                      <Button className="btn btn-warning me-2"onClick={()=>{handleShowEditar(); seleccionar(cita.id)}} ><i className="bi bi-pencil-square p-0"></i></Button>
                      <Button variant="danger"><i className="bi bi-file-x p-0"></i></Button>
                    </td>
                  </tr>
                  
                  </Fragment>

                );
              })

            }
              
          </tbody>
        </Table>
        <EditarTurno datos={turnoEditar} showEditar={showEditar} handleCloseEditar={handleCloseEditar}></EditarTurno>
        <AgregarTurno show={show} handleClose={handleClose}></AgregarTurno>
      </section>
    );//
};

export default AdminTurnos;
