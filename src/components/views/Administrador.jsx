import { useEffect, useState } from 'react';
import CardTurno from './admins/CardTurno';
import { obtenerListaTurnos } from '../helpers/turnos';
import Swal from 'sweetalert2';
import { Link } from "react-router-dom";


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
        <section className="container my-3 fade-up">
            <h1 className="fw-bold text-center titular">Panel Administrador</h1>
            <div className='container text-center mt-5'>
                <div className='row justify-content-around'>
                <Link className='btn btn-info col-8 col-md-5 mt-3' to={"/administrador/paciente"} >Administrador Pacientes</Link>
                <Link className='btn btn-warning col-8 col-md-5 mt-3' to={"/administrador/turno"}>Administrador Turnos</Link>
                </div>
            </div>
            <div className='bg-success-subtle p-3 rounded mt-5'>
                <h2 className='text-body-tertiary'>Turnos asignados</h2>
                <div>
                    {
                        turnos.map((turno)=> <CardTurno key={turno._id} turno={turno}></CardTurno>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Administrador;