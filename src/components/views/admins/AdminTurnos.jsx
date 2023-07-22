import { Table, Button } from "react-bootstrap";
import { useState, useEffect, Fragment } from "react";
import AgregarTurno from "./AgregarTurno";
import Swal from "sweetalert2";
import { obtenerListaTurnos, borrarTurno } from "../../helpers/turnos";
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

  useEffect(() => {
    obtenerListaTurnos().then((respuestaListaTurnos) => {
      if (respuestaListaTurnos) {
        SetTurnos(respuestaListaTurnos);
      } else {
        Swal.fire("error", "Intente realizar esta operación más tarde", "error");
      }
    })
  }, [])

  const seleccionar = (id) => {
    SetTurnoEditar(turnos.find((turno) => turno.id === id))
  }

  const borrar = (id) => {
    Swal.fire({
      title: 'Esta seguro de borrar el siguiente turno?',
      text: "El siguiente cambio no podra ser revertido",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, quiero borrar!',
      cancelButtonText: 'Cancelar'
    }).then((resultado) => {
      if (resultado.isConfirmed) {
        borrarTurno(id).then((respuesta)=>{
          if(respuesta.status === 200){
            //Pedir la lista de productos a mi back
            obtenerListaTurnos().then((respuesta)=>{
              if(respuesta){
                SetTurnos(respuesta);
              } else {
                Swal.fire("Error", "Intente realizar esta operacion en unos minutos", "error");
              }
            })
            Swal.fire(
              'Borrado!',
              'El turno fue borrado.',
              'success'
            )
          }else{
            Swal.fire({
              title: "Lo siento!",
              text: "El turno no pudo ser eliminado.",
              icon: "error",
              confirmButtonColor: "#fa8072",
            });
          }
        })
      }
    })
  }

  return (
    <section className="container">
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h1 className="display-4 ">Turnos</h1>
        <Button className="btn btn-primary" onClick={handleShow}> 
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
            turnos.map((cita) => {
              return (
                <Fragment key={cita.id}>
                  <tr>
                    <td className="text-truncate overflow-hidden">{cita.detalleCita}</td>
                    <td className="text-truncate overflow-hidden">{cita.veterinario}</td>
                    <td className="text-truncate overflow-hidden">{cita.mascota}</td>
                    <td className="text-truncate overflow-hidden">{cita.fecha}</td>
                    <td className="text-truncate overflow-hidden">{cita.hora}</td>
                    <td className="d-flex justify-content-end align-items-star">
                      <Button className="btn btn-warning me-2" onClick={() => { handleShowEditar(); seleccionar(cita.id) }} ><i className="bi bi-pencil-square p-0"></i></Button>
                      <Button variant="danger" onClick={() => {borrar(cita.id)}}><i className="bi bi-file-x p-0"></i></Button>
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
