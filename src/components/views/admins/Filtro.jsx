import { InputGroup, Form } from "react-bootstrap";

const Filtro = () => {
    return (
        <div>
            <InputGroup className="mb-3 py-5">
                    <InputGroup.Text>Buscar mascota</InputGroup.Text>
                    <Form.Control aria-label="First name" />
                    <Form.Control aria-label="Last name" />
            </InputGroup>
        </div>
    );
};

export default Filtro;