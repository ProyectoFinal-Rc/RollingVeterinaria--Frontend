import { Routes, Route } from "react-router-dom";
import Administrador from "../views/Administrador";
import AdminPacientes from "../views/admins/AdminPacientes"
import AdminTurnos from "../views/admins/AdminTurnos"
import { PublicacionesCrud } from "../views/publicacion";

const RutasAdministrador = () => {
	return (
		<>
			<Routes>
				<Route exact path="/" element={<Administrador></Administrador>}></Route>
				<Route exact path="/turno" element={<AdminTurnos></AdminTurnos>}></Route>
				<Route exact path="/paciente" element={<AdminPacientes></AdminPacientes>}></Route>
				<Route exact path="/publicaciones" element={<PublicacionesCrud></PublicacionesCrud>}></Route>
			</Routes>
		</>
	);
};

export default RutasAdministrador;