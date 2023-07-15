import { Nav, Container, Navbar } from 'react-bootstrap'
import './Navbar.css'

const Navegacion = () => {
	return (
		<Navbar bg='info' expand='lg' id='navbar'>
			<Container>
				<Navbar.Brand href='#'>Logo VET</Navbar.Brand>
				<Navbar.Toggle area-aria-controls='basic-navbar-var'></Navbar.Toggle>
				<Navbar.Collapse id='basic-navbar-var'>
					<Nav className='ms-auto'>
						<Nav.Link href='#'>Pagina Principal</Nav.Link>
						<Nav.Link href='#'>Acerca de Nosotros</Nav.Link>
						<Nav.Link href='#'>Contacto</Nav.Link>
						<Nav.Link href='#'>Productos</Nav.Link>
						<Nav.Link href='#'>Administrador</Nav.Link>
						<Nav.Link href='#'>Ingresar</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default Navegacion