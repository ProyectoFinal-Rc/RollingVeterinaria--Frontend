import { Routes, Route } from "react-router-dom";
import Administrador from "../views/Administrador";
import AdminPacientes from "../views/admins/AdminPacientes"
import AdminTurnos from "../views/admins/AdminTurnos"

const RutasAdministrador = () => {
	return (
		<>
			<Routes>
				<Route exact path="/" element={<Administrador></Administrador>}></Route>
				<Route exact path="/turno" element={<AdminTurnos></AdminTurnos>}></Route>
				<Route exact path="/paciente" element={<AdminPacientes></AdminPacientes>}></Route>
			</Routes>
		</>
	);
};

export default RutasAdministrador;