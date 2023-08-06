import { Row } from "react-bootstrap"
import { PublicacionCard } from "./UI"
import { useEffect, useState } from "react"

export default function Publicaciones(){
    const [publicaciones, setPublicaciones] = useState([]);
    const [mensajeError, setMensajeError] = useState("");
    useEffect(()=>{
        fetch("http://localhost:4000/api/publicacion/all/activas/")
        .then(res=>res.json())
        .then(res=>{
            setPublicaciones(res)
            setMensajeError("");
        })
        .catch((error)=>{
            setMensajeError(error?.message+"");
        })
    },[])
  return (
    <section>
        <div className='container my-4 bg-white' >
            <Row id='publicacionesContenedor' className='py-4'>
            <h2 className='letras text-dark'>Ultimas Publicaciones:</h2>
            <div className="d-flex justify-content-center gap-3">
                {
                    mensajeError != "" && <div><b>Error al cargar las publicaciones</b></div> 
                }
                {
                    publicaciones.length > 0
                    && publicaciones.map((p,pi)=> <PublicacionCard key={pi} _id={p._id} titulo={p.titulo} contenido={p.contenido.slice(0, 30)+"..."} imagen={p.imagen} tags={p.tags} fecha={p.updatedAt.slice(0, 10)}/>) 
                }
                
            </div>
            </Row>
        </div>
    </section>
  )
}

/*

_id
64c99f36aa182162470388ab
titulo
"publicacion #001"
contenido
"contenido de la publicacion #001"
imagen
"https://picsum.photos/300/200"
active
true

tags
Array (3)
push
false
createdAt
2023-08-02T00:11:34.155+00:00
updatedAt
2023-08-02T00:20:01.210+00:00
*/