import { Table, Button } from "react-bootstrap";
import { useState, useEffect, Fragment } from "react";
import AgregarTurno from "./AgregarTurno";
import Swal from "sweetalert2";
import { obtenerListaTurnos, borrarTurno, fecha,fechaParseada } from "../../helpers/turnos";
import EditarTurno from "./EditarTurno";
import { Link } from "react-router-dom"

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

/*   const seleccionar = (id) => {
    //SetTurnoEditar(turnos.find((turno) => turno._id === id))
    const turnoGuardado = turnos.find((turno) => turno._id === id)
    const res = fechaParseada(turnoGuardado.fecha);
    turnoGuardado.fecha=res;
    //console.log(turnoGuardado)
    //console.log(turnoGuardado.fecha)
    //console.log(res)
    SetTurnoEditar(turnoGuardado);
  }
 */
  const seleccionar = (id) => {
    const turnoGuardado = turnos.find((turno) => turno._id === id);
    SetTurnoEditar(turnoGuardado);
  };
  
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
    <section className="container mt-5">
        <div className="d-flex justify-content-center mt-5">
        <h1 className="mt-5 fw-bold bg-warning-subtle p-2 border border-5 border-warning m-2">Listado de turnos</h1>
        </div>
      <div className="d-flex justify-content-between align-items-center mt-5">
      <Link to={"/administrador/paciente"} className="btn btn-info btn-lg">Administrador de pacientes</Link>
        <Button className="btn btn-success  btn-lg text-white" onClick={handleShow}> 
          Agregar turno
        </Button>
      </div>
      <hr />
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th className="bg-danger text-white">Detalle turno</th>
            <th className="bg-danger text-white">Veterinario</th>
            <th className="bg-danger text-white">Mascota</th>
            <th className="bg-danger text-white">Fecha</th>
            <th className="bg-danger text-white">Hora</th>
            <th className="bg-danger text-white">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {
            turnos.map((cita) => {
              return (
                <Fragment key={cita._id}>
                  <tr>
                    <td className="text-truncate overflow-hidden">{cita.detalleCita}</td>
                    <td className="text-truncate overflow-hidden">{cita.veterinario}</td>
                    <td className="text-truncate overflow-hidden">{cita.mascota}</td>
                    <td className="text-truncate overflow-hidden">{fechaParseada(cita.fecha).replace(/^(\d{4})-(\d{2})-(\d{2})$/g,'$3/$2/$1')}</td>
                    <td className="text-truncate overflow-hidden">{cita.hora}</td>
                    <td className="d-flex justify-content-end align-items-star">
                      <Button className="btn btn-warning me-2" onClick={() => { handleShowEditar(); seleccionar(cita._id) }} ><i className="bi bi-pencil-square p-0"></i></Button>
                      <Button variant="danger" onClick={() => {borrar(cita._id)}}><i className="bi bi-file-x p-0"></i></Button>
                    </td>
                  </tr>
                </Fragment>
              );
            })
          }
        </tbody>
      </Table>
      <EditarTurno  turnos={turnos} datos={turnoEditar} showEditar={showEditar} handleCloseEditar={handleCloseEditar}></EditarTurno>
      <AgregarTurno turnos={turnos} show={show} handleClose={handleClose}></AgregarTurno>
    </section>
  );
};

export default AdminTurnos;
