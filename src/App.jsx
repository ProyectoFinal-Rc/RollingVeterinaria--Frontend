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
import './App.css'
import Principal from './components/Principal'
import Footer from './components/common/Footer'
import Navegacion from './components/common/Navbar'
import Login from './components/Login'
import { useState } from 'react'
import { Acerca } from "./components/AcercaPrueba";
import { Contacto } from "./components/Contacto";
import RutasProtegidas from "./components/routes/RutasProtegidas";
import RutasAdministrador from "./components/routes/RutasAdministrador";

function App() {
  const usuarioSesionStorage = JSON.parse(sessionStorage.getItem('usuario')) || ''
  const [usuarioLogueado, setUsuarioLogueado] = useState(usuarioSesionStorage)

  return (
    <>
      <BrowserRouter>
        <Navegacion usuarioLogueado={usuarioLogueado} setUsuarioLogueado={setUsuarioLogueado}></Navegacion>
        <Routes>
          <Route exact path="/" element={<Principal></Principal>}></Route>
          <Route exact path="/login" element={<Login setUsuarioLogueado={setUsuarioLogueado}></Login>}></Route>
          <Route path="/administrador/*" element={<RutasProtegidas><RutasAdministrador></RutasAdministrador></RutasProtegidas>}></Route>
          <Route exact path="/acerca-de-nosotros" element={<Acerca></Acerca>}></Route>
          <Route exact path="/contacto" element={<Contacto></Contacto>}></Route>
          {/* <Route exact path="*" element={<ErrorPrueba></ErrorPrueba>}></Route> */}
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
      {/* <AdminTurnos></AdminTurnos> */}
      {/* <AgregarTurno></AgregarTurno> */}
      {/* <AgregarPaciente></AgregarPaciente> */}
      {/* <CardPaciente></CardPaciente> */}
      {/* <AdminPacientes></AdminPacientes>  */}
      {/* <CardTurno></CardTurno>  */}
    </>
  )
}

export default App