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