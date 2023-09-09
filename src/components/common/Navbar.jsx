import { Nav, Navbar, Button ,Container} from 'react-bootstrap'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import './Navbar.css'
import logo from '/logo.png'
import { useState } from 'react'

const Navegacion = ({ usuarioLogueado, setUsuarioLogueado }) => {
	const navegacion = useNavigate()
	const [navbarExpanded, setNavbarExpanded] = useState();
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

	const handleNavLinkClick = () => {
	setNavbarExpanded(false);
	};
	const handleMenuButtonClick  = ()=>{
		setNavbarExpanded(true);
	}
	return (
		<Navbar collapseOnSelect expand='md' expanded={navbarExpanded}id='navbar' className='px-3 px-lg-5 site-wrap'>
			<Container>
			<Navbar.Brand as={Link} to='/'><img src={logo} className='imagenLogo'></img></Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={handleMenuButtonClick}/>
			<Navbar.Collapse className="responsive-navbar-nav">
				<Nav className='ms-auto'>
					<NavLink end className='mx-2 fw-semibold nav-item nav-link btn-navbar' to='/'onClick={handleNavLinkClick}>
						Pagina Principal
					</NavLink>
					<NavLink end className='mx-2 fw-semibold nav-item nav-link btn-navbar' to='/acerca-de-nosotros' onClick={handleNavLinkClick}>
						Acerca de Nosotros
					</NavLink>
					<NavLink end className='mx-2 fw-semibold nav-item nav-link btn-navbar' to='/contacto' onClick={handleNavLinkClick}>
						Contacto
					</NavLink>
					{
						(usuarioLogueado)
							? <>
								<NavLink  className='mx-2 fw-semibold nav-item nav-link btn-navbar' to='/administrador' onClick={handleNavLinkClick}>
                                        Administrador
                                </NavLink>
								<NavLink  className='mx-2 fw-semibold nav-item nav-link btn-navbar' to='/administrador/publicaciones' onClick={handleNavLinkClick}>
                                        Publicaciones
                                </NavLink>
								<Button onClick={cerrarSesion} variant='mx-2 fw-semibold nav-item nav-link border border-danger border-3' id='btn-cerrarSesion'>Cerrar Sesion</Button>
							</>
							: <NavLink end className='mx-2 fw-semibold nav-item nav-link btn-navbar' to='/login' onClick={handleNavLinkClick}>
								Ingresar
							</NavLink>
					}
				</Nav>
			</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default Navegacion