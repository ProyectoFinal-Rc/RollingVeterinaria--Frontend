const URL_usuario = import.meta.env.VITE_API_USUARIO
const URL_AUTH= import.meta.env.VITE_API_AUTH
export const IniciarSesion = async (usuario)=> {
	try {
		const consulta = await fetch(URL_AUTH,{
			method:"POST",
			body: JSON.stringify(usuario),
			headers:{"Content-Type":"application/json"}
		})
		const respuesta= await consulta.json()
		localStorage.setItem("token",respuesta.token)
		return usuario;
	} catch (error) {
		console.log(error)
	}
}