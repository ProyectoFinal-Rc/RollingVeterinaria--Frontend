import { Row } from "react-bootstrap"
import { PublicacionCard } from "./UI"
import { useEffect, useState } from "react"
const URL_PUBLICACIONES = import.meta.env.VITE_API_PUBLICACIONES

export default function Publicaciones(){
    const [publicaciones, setPublicaciones] = useState([]);
    const [mensajeError, setMensajeError] = useState("");
    useEffect(()=>{
        fetch(URL_PUBLICACIONES+"/all/activas/"
        )
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
            <h2 className='letras text-dark fs-2'>Ultimas noticias:</h2>
            <div className="d-flex justify-content-center gap-3 flex-wrap">
                {
                    mensajeError != "" && <div><b>Error al cargar las publicaciones</b></div> 
                }
                {
                    publicaciones.length > 0?
                    publicaciones.map((p,pi)=> <PublicacionCard key={pi} _id={p._id} titulo={p.titulo} contenido={p.contenido.slice(0, 30)+"..."} imagen={p.imagen} tags={p.tags} fecha={p.updatedAt.slice(0, 10)}/>):
                    (<h5>No hay noticias nuevas.</h5>)
                }
            </div>
            </Row>
        </div>
    </section>
)
}
