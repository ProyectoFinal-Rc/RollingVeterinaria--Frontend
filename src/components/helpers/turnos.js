const URL_turno = import.meta.env.VITE_API_TURNO


export const obtenerListaTurnos = async()=> {
    try {
        const respuesta = await fetch(URL_turno);
        const listaTurnos = await respuesta.json();
        return listaTurnos;
    }catch(error){
        console.log(error);
    }
}

export const crearTurno = async(turno)=>{
    try{
        const respuesta = await fetch(URL_turno, {
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(turno)
        });
        return respuesta;
    }catch(error){
        console.log(error);
    }
}