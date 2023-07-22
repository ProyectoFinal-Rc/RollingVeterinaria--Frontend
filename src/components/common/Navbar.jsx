import { Nav, Container, Navbar } from 'react-bootstrap'
import './Navbar.css'
import logo from '/logo.png'

const Navegacion = () => {
	return (
		<Navbar expand='lg' id='navbar'>
			<Container>
				<Navbar.Brand href='#'><img src={logo} className='imagenLogo'></img></Navbar.Brand>
				<Navbar.Toggle area-aria-controls='basic-navbar-var'></Navbar.Toggle>
				<Navbar.Collapse id='basic-navbar-var'>
					<Nav className='ms-auto'>
						<Nav.Link className='mx-2 fw-semibold' href='#'>Pagina Principal</Nav.Link>
						<Nav.Link className='mx-2 fw-semibold' href='#'>Acerca de Nosotros</Nav.Link>
						<Nav.Link className='mx-2 fw-semibold' href='#'>Contacto</Nav.Link>
						<Nav.Link className='mx-2 fw-semibold' href='#'>Productos</Nav.Link>
						<Nav.Link className='mx-2 fw-semibold' href='#'>Administrador</Nav.Link>
						<Nav.Link className='mx-2 fw-semibold' href='#'>Ingresar</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default Navegacion