// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import CardTurno from './admins/CardTurno';


const Administrador = () => {
    return (
        <section className="container">
            <div className="d-flex justify-content-between align-items-center mt-5">
                <h1 className="display-4 ">Bienvenido Administrador</h1>
            </div>
            <div className='bg-success-subtle p-3 rounded'>
                <h2 className='text-body-tertiary'>Turnos asignados</h2>
                <div>
                <CardTurno></CardTurno>
                </div>
            </div>
        </section>
    );
};

export default Administrador;