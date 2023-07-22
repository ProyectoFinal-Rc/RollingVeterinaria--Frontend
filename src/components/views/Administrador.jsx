// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';
import CardTurno from './admins/CardTurno';
import { obtenerListaTurnos } from '../helpers/turnos';
import Swal from 'sweetalert2';
import About from '../About';

const Administrador = () => {
    const [turnos, setTurnos] = useState([]);

    useEffect(()=> {
        obtenerListaTurnos().then((turno)=>{
            if(turno){
                setTurnos(turno);
            }else{
                Swal.fire("Error", "Intente realizar esta operacion en unos minutos", "error")
            }
        })
    }, []);

    return (
        <section className="container">
            <div className="d-flex justify-content-between align-items-center mt-5">
                <h1 className="display-4 ">Bienvenido Administrador</h1>
            </div>
            <div className='bg-success-subtle p-3 rounded'>
                <h2 className='text-body-tertiary'>Turnos a</h2>
                <div>
                    {
                        turnos.map((turno)=> <CardTurno key={turno.id} turno={turno}></CardTurno>)
                    }
                </div>
            </div>
            <About/>
        </section>
    );
};

export default Administrador;