import { Table, Button } from "react-bootstrap";

const AdminTurnos = () => {
    return (
        <section className="container mainSection">
        <div className="d-flex justify-content-between align-items-center mt-5">
          <h1 className="display-4 ">Turnos</h1>
          <Button className="btn btn-primary" to=''>
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
          </tbody>
        </Table>
      </section>
    );
};

export default AdminTurnos;