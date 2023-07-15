import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Administrador = () => {
    return (
        <section className="container">
            <div className="d-flex justify-content-between align-items-center mt-5">
                <h1 className="display-4 ">Bienvenido Administrador</h1>
            </div>
            <div>
                <h2>Turnos asignados</h2>
                <div>
                <Card>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                </div>
            </div>
        </section>
    );
};

export default Administrador;