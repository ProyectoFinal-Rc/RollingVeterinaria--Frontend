import './Login.css'
import { Form, Container } from "react-bootstrap"
import { useForm } from 'react-hook-form'
import { IniciarSesion } from "./helpers/queriesLogin"
import Swal from "sweetalert2"
import { useNavigate, Link } from 'react-router-dom'
import { useState } from 'react'
import {toast} from "../utils"
import {SpinnerLoader} from "./views/UI/SpinnerLoader"


const Login = ({setUsuarioLogueado}) => {
	const { register, handleSubmit, formState: { errors }, reset } = useForm()
	const [loading, setLoading] = useState(false);
	const navegacion = useNavigate()

	const onSubmit = (usuario) => {
		setLoading(true);
		IniciarSesion(usuario).then((respuesta) => {
			if (respuesta) {
				sessionStorage.setItem('usuario', JSON.stringify(respuesta.email))
				setUsuarioLogueado(respuesta)
				reset()
				Swal.fire('Bienvenido administrador')
				navegacion('/administrador')
			} else{
				Swal.fire(
					'Error',
					'Email y/o contraseña incorrecta.',
					'error'
				)
			}
		}).catch(err=>{
			console.log(err);
			toast("Error: "+err?.message, 3000, "text-white bg-danger", false);
		}).finally(()=>{
			setLoading(false);
		})
	}

	return (
		<Container className='my-3' id='login'>
			<Form className="contenedor-formulario mx-auto p-5" onSubmit={handleSubmit(onSubmit)}>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label className='fw-bold'>Correo Electronico:</Form.Label>
					<Form.Control type="text" min={5} maxLength={256} required {...register('email',
						{
							required: 'Campo obligatorio',
							pattern: {
								value: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
								message: 'El correo debe tener el siguiente patron: email@dominio.com'
							}
						})} />
					<Form.Text className="text-danger">
						{errors.email?.message}
					</Form.Text>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label className='fw-bold'>Contraseña:</Form.Label>
					<Form.Control type="password" min={8} maxLength={16} required {
						...register('password', {
							required: 'La contraseña es obligatoria',
							pattern: {
								value: /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/,
								message: 'La contraseña debe tener entre 8 y 16 caracteres, al menos una mayuscula, al menos un numero y al menos un caracter especial'
							}
						})
					} />
					<Form.Text className="text-dark">
						{errors.password?.message}
					</Form.Text>
				</Form.Group>
				<div className="d-flex">
					<button type="submit" disabled={loading} className="mx-auto boton fw-bold">
						{loading ? <SpinnerLoader color='#ffeee3' height='2' width='2'/> : "Ingresar" }
					</button>
				</div>
			</Form>
			<div className="my-4 mx-auto d-flex flex-column">
				<p className="text-center my-2">¿No tenes cuenta?</p>
				<Link className="mx-auto boton fw-bold" to="/*">Registrarse</Link>
			</div>
		</Container>
	)
}

export default Login