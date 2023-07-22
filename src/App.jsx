import Administrador from "./components/views/Administrador"
import "bootstrap/dist/css/bootstrap.min.css";
import AdminTurnos from "./components/views/admins/AdminTurnos";
import AgregarTurno from "./components/views/admins/AgregarTurno";
import AgregarPaciente from "./components/views/admins/AdminPacientes";
import AdminPacientes from "./components/views/admins/AdminPacientes";
import CardTurno from "./components/views/admins/CardTurno";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditarTurno from "./components/views/admins/EditarTurno";
import './App.css'
import { Error404 } from './components/views/Error404'
import { Contacto } from './components/views/Contacto'
import Principal from './components/Principal'
import Footer from './components/common/Footer'
import Navegacion from './components/common/Navbar'
import About from "./components/About";

function App() {

  return (
    <>

      
      

      

      <Error404/>
      <Contacto/>
      {/* <Administrador></Administrador> */}
      {/* <AdminTurnos></AdminTurnos> */}
      {/* <AgregarTurno></AgregarTurno> */}
      {/* <AgregarPaciente></AgregarPaciente> */}

      <AdminPacientes></AdminPacientes> 
      <CardTurno></CardTurno>  */}
      <About/>
    </>  
  )
}

export default App