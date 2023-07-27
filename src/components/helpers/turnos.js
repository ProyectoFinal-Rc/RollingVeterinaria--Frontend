const URL_turno = import.meta.env.VITE_API_TURNO;

export const obtenerListaTurnos = async () => {
  try {
    const respuesta = await fetch(URL_turno);
    const listaTurnos = await respuesta.json();
    return listaTurnos;
  } catch (error) {
    console.log(error);
  }
};
export const fecha=()=>{
  let anio =  new Date().getFullYear()+"";
  let mes =  new Date().getMonth()+1 <10 && "0"+(new Date().getMonth()+1) 
  let dia = new Date().getDate()+"";
  return `${anio}-${mes}-${dia}`
}
export const crearTurno = async (turno) => {
  try {
    const respuesta = await fetch(URL_turno, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(turno),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const editarTurno = async (turno, id) => {
  try {
    const respuesta = await fetch(URL_turno + "/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(turno),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

// export const obtenerTurno = async (id) => {
//   console.log(id);
//   try {
//     const respuesta = await fetch(URL_turno + "/" + id);
//     const turno = await respuesta.json();
//     console.log(turno);
//     return turno;
//   } catch (error) {
//     console.log(error);
//   }
// };

export const borrarTurno = async (id) => {
  try {
    const respuesta = await fetch(URL_turno + "/" + id, {
      method: "DELETE"

    });
    return respuesta;
  } catch (error) {}
};
