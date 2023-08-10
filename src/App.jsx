import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Principal from './components/Principal'
import Footer from './components/common/Footer'
import Navegacion from './components/common/Navbar'
import Login from './components/Login'
import { useState } from 'react'
import RutasProtegidas from "./components/routes/RutasProtegidas";
import RutasAdministrador from "./components/routes/RutasAdministrador";
import Contacto from "./components/Contacto";
import Error404 from "./components/Error404";
import About from "./components/About";
import {Publicacion} from "./components/views/publicacion/";

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
          <Route exact path="/acerca-de-nosotros" element={<About></About>}></Route>
          <Route exact path="/contacto" element={<Contacto></Contacto>}></Route> 
          <Route exact path="/publicaciones/:id" element={<Publicacion></Publicacion>}></Route>
          <Route exact path="*" element={<Error404></Error404>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  )
}

export default App