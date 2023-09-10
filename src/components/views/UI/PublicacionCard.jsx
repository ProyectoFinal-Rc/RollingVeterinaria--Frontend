import React from 'react'
import { Card, Badge } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { compartir } from '../../../utils'

export const PublicacionCard = ({titulo="", contenido="", imagen="https://picsum.photos/300/200",  tags=[], fecha = "", _id="1"}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title className='d-flex justify-content-between'>{titulo} 
            <NavLink className="badge" style={{backgroundColor:'#FF7E00'}} to={"/publicaciones/"+_id}>Ir</NavLink>
        </Card.Title>
        <Card.Text>
          {contenido}
        </Card.Text>
        {
            tags.length > 0 && tags.map((t,ti)=><Badge key={ti} bg="dark m-1">{"#"+t+""}</Badge>)
        }
      </Card.Body>
      <div className='d-flex justify-content-between px-2 align-items-center'>
        <button type='button' className='btn btn-sm mb-2' style={{backgroundColor:'lightblue'}}  onClick={()=>{compartir(titulo,contenido.slice(0,20)+"...", window.location.href+"publicaciones/"+_id)}}>
          Compartir &nbsp;
          <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-share-fill"
      viewBox="0 0 16 16"
    >
      <path d="M11 2.5a2.5 2.5 0 11.603 1.628l-6.718 3.12a2.499 2.499 0 010 1.504l6.718 3.12a2.5 2.5 0 11-.488.876l-6.718-3.12a2.5 2.5 0 110-3.256l6.718-3.12A2.5 2.5 0 0111 2.5z"></path>
    </svg>
        </button>
        <small className='pe-2 text-secondary'><i>{fecha+""}</i></small>
      </div>
        
    </Card>
  )
}
