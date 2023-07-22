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
import About from "./components/About";

function App() {

  return (
    <>
      {/* <Administrador/>
      <AdminTurnos/>
      <AgregarTurno/>
      <AgregarPaciente/>
      <CardPaciente/>
      <AdminPacientes/> 
      <CardTurno/> */}
      <About/>
    </>  
  )
}

export default App