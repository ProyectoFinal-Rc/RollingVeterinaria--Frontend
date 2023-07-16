import { Button } from "react-bootstrap";

const ItemTurno = () => {
  return (
    <tr>
      <td>Gato...</td>
      <td>Juan Paz</td>
      <td>Kiko</td>
      <td>15/08/2023</td>
      <td>14:00</td>
      <td className="d-flex justify-content-end align-items-star">
        <Button className="btn btn-warning me-2"><i class="bi bi-pencil-square p-0"></i></Button>
        <Button variant="danger"><i class="bi bi-file-x p-0"></i></Button>
      </td>
    </tr>
  );
};

export default ItemTurno;
