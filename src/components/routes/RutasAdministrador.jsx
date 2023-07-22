import { Routes, Route } from "react-router-dom";
import Administrador from "../views/Administrador";

const RutasAdministrador = () => {
	return (
		<>
			<Routes>
				<Route exact path="/" element={<Administrador></Administrador>}></Route>
				{/* <Route exact path="/turno" element={<AdministradorTurno></AdministradorTurno>}></Route> */}
				{/* <Route exact path="/*" element={<ErrorPrueba></ErrorPrueba>}></Route> */}
			</Routes>
		</>
	);
};

export default RutasAdministrador;