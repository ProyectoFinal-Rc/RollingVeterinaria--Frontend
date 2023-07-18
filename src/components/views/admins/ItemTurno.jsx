import { Button } from "react-bootstrap";
import EditarTurno from "./EditarTurno";
import { useState } from "react";
import { Link } from "react-router-dom";



const ItemTurno = ({cita}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <tr>
      <td>{cita.detalleCita}</td>
      <td>{cita.veterinario}</td>
      <td>{cita.mascota}</td>
      <td>{cita.fecha}</td>
      <td>{cita.hora}</td>
      <td className="d-flex justify-content-end align-items-star">
        <Button className="btn btn-warning me-2"onClick={handleShow} ><i className="bi bi-pencil-square p-0"></i></Button>
        <Button variant="danger"><i className="bi bi-file-x p-0"></i></Button>
      </td>
    </tr>
    <EditarTurno show={show} handleClose={handleClose}></EditarTurno>
    </>
  );
};

export default ItemTurno;
