import { Button } from "react-bootstrap";

const ItemTurno = () => {
  return (
    <tr>
      <td>Gato con pata quebrada</td>
      <td>Juan Paz</td>
      <td>Kiko</td>
      <td>15/08/2023</td>
      <td>14:00</td>
      <td className="d-flex justify-content-end">
        <Button className="btn btn-warning me-2">Editar</Button>
        <Button variant="danger">Borrar</Button>
      </td>
    </tr>
  );
};

export default ItemTurno;
