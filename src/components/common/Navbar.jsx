import { Nav, Navbar, Button } from 'react-bootstrap'
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
		<Navbar expand='lg' id='navbar' className='px-3 px-lg-5'>
			<Navbar.Brand as={Link} to='/'><img src={logo} className='imagenLogo'></img></Navbar.Brand>
			<Navbar.Toggle area-aria-controls='basic-navbar-var'></Navbar.Toggle>
			<Navbar.Collapse id='basic-navbar-var'>
				<Nav className='ms-auto'>
					<NavLink end className='mx-2 fw-semibold nav-item nav-link btn-navbar' to='/'>
						Pagina Principal
					</NavLink>
					<NavLink end className='mx-2 fw-semibold nav-item nav-link btn-navbar' to='/acerca-de-nosotros'>
						Acerca de Nosotros
					</NavLink>
					<NavLink end className='mx-2 fw-semibold nav-item nav-link btn-navbar' to='/contacto'>
						Contacto
					</NavLink>
					{
						(usuarioLogueado)
							? <>
								<NavLink  className='mx-2 fw-semibold nav-item nav-link btn-navbar' to='/administrador'>
                                        Administrador
                                </NavLink>
								<NavLink  className='mx-2 fw-semibold nav-item nav-link btn-navbar' to='/administrador/publicaciones'>
                                        Publicaciones
                                </NavLink>
								<Button onClick={cerrarSesion} variant='mx-2 fw-semibold nav-item nav-link border border-danger border-3' id='btn-cerrarSesion'>Cerrar Sesion</Button>
							</>
							: <NavLink end className='mx-2 fw-semibold nav-item nav-link btn-navbar' to='/login'>
								Ingresar
							</NavLink>
					}
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	)
}

export default Navegacion