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
        <section className="container pt-5 mt-5">
            <div className='container text-center mt-5'>
                <div className='row justify-content-around'>
                <Link className='btn btn-info btn-lg col-5' to={"/administrador/paciente"} >Pacientes</Link>
                <Link className='btn btn-warning btn-lg col-5' to={"/administrador/turno"}>Turnos</Link>
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