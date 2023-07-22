import { Nav, Container, Navbar, Button, NavDropdown } from 'react-bootstrap'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import './Navbar.css'
import logo from '/logo.png'

const Navegacion = ({ usuarioLogueado, setUsuarioLogueado }) => {
	const navegacion = useNavigate()

	const cerrarSesion = () => {
		Swal.fire({
			title: '¿Desea cerrar sesion?',
			icon: 'question',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Si, cerrar sesion',
			cancelButtonText: 'Cancelar'
		}).then((respuesta) => {
			if (respuesta.isConfirmed) {
				sessionStorage.removeItem('usuario')
				setUsuarioLogueado('')
				navegacion('/')
			}
		})
	}

	return (
		<Navbar expand='lg' id='navbar' className='px-3'>
			<Navbar.Brand as={Link} to='/'><img src={logo} className='imagenLogo'></img></Navbar.Brand>
			<Navbar.Toggle area-aria-controls='basic-navbar-var'></Navbar.Toggle>
			<Navbar.Collapse id='basic-navbar-var'>
				<Nav className='ms-auto'>
					<NavLink end className='mx-2 fw-semibold nav-item nav-link' to='/'>
						Pagina Principal
					</NavLink>
					<NavLink end className='mx-2 fw-semibold nav-item nav-link' /* to='/acerca-de-nosotros' */>
						Acerca de Nosotros
					</NavLink>
					<NavLink end className='mx-2 fw-semibold nav-item nav-link' to='/contacto'>
						Contacto
					</NavLink>
					{
						(usuarioLogueado)
							? <>
								<NavDropdown title="Administrador" id="navbarScrollingDropdown" end className='mx-2 fw-semibold nav-item nav-link' to='/administrador'>
									<NavDropdown.Item to="/administrador/paciente">Admin pacientes</NavDropdown.Item>
									<NavDropdown.Item to="/administrador/turno">
									Admin turnos
									</NavDropdown.Item>
								</NavDropdown>
								<Button onClick={cerrarSesion} variant='mx-2 fw-semibold nav-item nav-link border border-danger'>Cerrar Sesion</Button>
							</>
							: <NavLink end className='mx-2 fw-semibold nav-item nav-link' to='/login'>
								Ingresar
							</NavLink>
					}
				</Nav>
			</Navbar.Collapse>

		</Navbar>
	)
}

export default Navegacion