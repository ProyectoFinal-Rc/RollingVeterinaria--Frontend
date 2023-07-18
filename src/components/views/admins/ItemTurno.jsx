import { Button } from "react-bootstrap";

const ItemTurno = ({cita}) => {
  return (
    <tr>
      <td>{cita.detalleCita}</td>
      <td>{cita.veterinario}</td>
      <td>{cita.mascota}</td>
      <td>{cita.fecha}</td>
      <td>{cita.hora}</td>
      <td className="d-flex justify-content-end align-items-star">
        <Button className="btn btn-warning me-2"><i className="bi bi-pencil-square p-0"></i></Button>
        <Button variant="danger"><i className="bi bi-file-x p-0"></i></Button>
      </td>
    </tr>
  );
};

export default ItemTurno;
