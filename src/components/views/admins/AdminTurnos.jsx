import { Table, Button } from "react-bootstrap";
import ItemTurno from "./ItemTurno";
import { useState } from "react";
import AgregarTurno from "./AgregarTurno";


const AdminTurnos = () => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
        <section className="container">
        <div className="d-flex justify-content-between align-items-center mt-5">
          <h1 className="display-4 ">Turnos</h1>
          <Button className="btn btn-primary" to='' onClick={handleShow}>
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
            </tr>
          </thead>
          <tbody>
            <ItemTurno></ItemTurno>
          </tbody>
        </Table>
        <AgregarTurno show={show} handleClose={handleClose}></AgregarTurno>
      </section>
    );
};

export default AdminTurnos;