import './Footer.css'
import logo from "../../../public/logo.png"
import QRCode from "react-qr-code";
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<footer className=' d-flex flex-column pt-4'>
			<div className='d-md-flex justify-content-md-around pb-3'>
				<div className='my-auto d-flex flex-column align-items-center'>
					<img
					src={logo}
					id='logoFooter'
					/>
					<p className='text-center mb-1 fs-4 pt-3 fw-bold'>Nuestras Redes</p>
					<div className='d-flex justify-content-center'>
						<Link to="/*"><i className="bi bi-facebook mx-3 fs-1 links-redes"></i></Link>
						<Link to="/*"><i className="bi bi-instagram mx-3 fs-1 links-redes"></i></Link>
					</div>
				</div>
				<div>
				<p className='text-center fs-4 pt-3 fw-bold'>Escanea Nuestro QR!</p>
				<div className='d-flex justify-content-center'>
				<QRCode value={window.location.origin} style={{maxWidth:"10rem",maxHeight:"10rem"}}/>
				</div>
				</div>
				<section className='my-4'>
					<p className='text-center mb-2 fs-4 fw-bold'>¿Donde estamos?</p>
					<div className='d-flex justify-content-center px-3'>
						<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1258.690134403313!2d-65.20762807358261!3d-26.83634787210734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225d3ad7f30f1d%3A0xf8606cd659b8e3e4!2sRollingCode%20School!5e0!3m2!1ses-419!2sar!4v1689725606145!5m2!1ses-419!2sar"></iframe>
					</div>
				</section>
			</div>
			<p className='text-center fw-bolder bg-black text-white m-0  py-5'>&copy; Todos los derechos reservados</p>
		</footer>
	)
}

export default Footer