import { Form, Button, Container } from "react-bootstrap"
import './Login.css'
import { useForm } from 'react-hook-form'
import { IniciarSesion } from "./helpers/queriesLogin"
import Swal from "sweetalert2"

const Login = () => {
	const { register, handleSubmit, formState: { errors }, reset } = useForm()

	const onSubmit = (usuario) => {
		IniciarSesion(usuario).then((respuesta)=> {
			if (respuesta) {
				sessionStorage.setItem('usuario', JSON.stringify(respuesta.nombreUsuario))
				reset()
			} else [
				Swal.fire(
					'Error',
					'Email y/o contraseña incorrecta.',
					'error'
				)
			]
		})
	}

	return (
		<Container className="d-flex flex-column contenedor-formulario">
			<Form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Correo Electronico:</Form.Label>
					<Form.Control type="text" min={5} maxLength= {256} required {...register('email',
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
					<Form.Label>Contraseña:</Form.Label>
					<Form.Control type="password"  min={8} maxLength= {16} required {
						...register('password', {
							required: 'La contraseña es obligatoria',
							pattern: {
								value: /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/,
								message: 'La contraseña debe tener entre 8 y 16 caracteres, al menos una mayuscula, al menos un numero y al menos un caracter especial'
							}
						})
					}/>
					<Form.Text className="text-danger">
						{errors.password?.message}
					</Form.Text>
				</Form.Group>
				<Button type="submit" className="w-50 mx-auto">
					Ingresar
				</Button>
			</Form>
			<div className="my-4 d-flex flex-column">
				<p className="text-center my-2">¿No tenes cuenta?</p>
				<Button className="w-50 mx-auto">Crear cuenta</Button>
			</div>
		</Container>
	)
}

export default Login