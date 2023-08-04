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
            tags.length > 0 && tags.map((t,ti)=><Badge key={ti} bg="dark m-1">{t+""}</Badge>)
        }
      </Card.Body>
      <div className='d-flex justify-content-between'>
        <button type='button' className='btn btn-sm mb-2' onClick={()=>{compartir(titulo,contenido.slice(0,20)+"...", window.location.href+"publicaciones/"+_id)}}>Compartir</button>
        <small className='pe-2 text-secondary'><i>{fecha+""}</i></small>
      </div>
        
    </Card>
  )
}//<Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
