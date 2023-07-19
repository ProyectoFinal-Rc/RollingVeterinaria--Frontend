import { Form, Button, Container } from "react-bootstrap"
import './Login.css'

const Login = () => {
	

	return (
		<Container className="d-flex flex-column contenedor-formulario">
			<Form className="d-flex flex-column">
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Correo Electronico:</Form.Label>
					<Form.Control type="email" />
					<Form.Text className="text-muted">
					</Form.Text>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Contraseña:</Form.Label>
					<Form.Control type="password" />
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