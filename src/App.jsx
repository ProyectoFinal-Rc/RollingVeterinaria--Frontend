
import './App.css'
//import { Contacto } from './components/views/Contacto'
import "bootstrap/dist/css/bootstrap.min.css"
import { Error404 } from './components/views/Error404'
import { Contacto } from './components/views/Contacto'

function App() {

  return (
    <>
      <Error404/>
      <Contacto/>
    </>
  )
}

export default App
