import Administrador from "./components/views/Administrador"
import "bootstrap/dist/css/bootstrap.min.css";
import AdminTurnos from "./components/views/admins/AdminTurnos";
import AgregarTurno from "./components/views/admins/AgregarTurno";
import AgregarPaciente from "./components/views/admins/AdminPacientes";
import CardPaciente from "./components/views/admins/CardPaciente";
import AdminPacientes from "./components/views/admins/AdminPacientes";
import CardTurno from "./components/views/admins/CardTurno";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditarTurno from "./components/views/admins/EditarTurno";








function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/admin-turnos" element={<AdminTurnos></AdminTurnos>} ></Route>
    </Routes>
    </BrowserRouter>
  
  )
}

export default App
