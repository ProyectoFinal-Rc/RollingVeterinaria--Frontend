const URL_paciente = import.meta.env.VITE_API_PACIENTE

export const obtenerListaPacientes = async () => {
    try {
        const respuesta =  await fetch(URL_paciente);
        const listaPacientes = await respuesta.json();
        return listaPacientes;
    } catch (error) {
        console.log(error);
    }
}

export const crearPaciente = async (paciente) => {
    try {
        const respuesta = await fetch(URL_paciente, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(paciente),
          });
          return respuesta;
        
    } catch (error) {
        console.log(error);        
    }
}

export const editarPaciente = async (paciente, id) => {
    try {
      const respuesta = await fetch(URL_paciente + "/" + id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(paciente),
      });
      return respuesta;
    } catch (error) {
      console.log(error);
    }
  };

