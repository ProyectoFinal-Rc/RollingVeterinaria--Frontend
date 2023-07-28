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
/* 		const listaUsuarios = await respuesta.json()
		const usuarioBuscado = listaUsuarios.find((itemUsuario) => itemUsuario.email === usuario.email)
		if(usuarioBuscado) {
			if(usuarioBuscado.password === usuario.password) {
				return usuarioBuscado
			} else {
				return null
			}
		} else {
			return null
		} */
	} catch (error) {
		console.log(error)
	}
}