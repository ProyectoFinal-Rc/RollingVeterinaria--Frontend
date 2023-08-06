import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useFetchGetJson } from '../../../hooks/useFetch';
import { Badge, Col, Container, Row } from 'react-bootstrap';
import { ZoomLoader } from '../UI';
const API_URL = import.meta.env.VITE_API_DEV;

export function Publicacion(){
    const params = useParams();
    //const [pub, setPub] = useState({});
    const {error, data, loading, setError, setData, setLoading} = useFetchGetJson(API_URL+"/publicacion/"+params.id);
    if(data?.active){
        return (
            <Container fluid className="my-5">
                <Row className="mt-5">
                    <Col xs={{ span: 8, offset: 2 }} className="p-3 bg-body-tertiary mt-5">
                        <div className="p-3 text-center">
                            {data == null
                                ?   <>
                                        {loading === true && <ZoomLoader/>}
                                    </>
                                : <>
                                    <h2 className="fw-bold">{data?.titulo+""}</h2>
                                    <p className='text-secondary text-end p-1'><i>{data.updatedAt.slice(0,10)}</i></p>
                                    <p className='text-start'>{data?.contenido+""}</p>
                                    <div className="m-3 text-center">
                                        {
                                            loading ? <div style={{height:'200px'}}><ZoomLoader/></div>
                                            : <img className="my-3" onLoad={(e)=>{e.target.className = 'my-3'}} style={{height:'200px'}} src={data?.imagen+""} alt="Contacto rolling vet" />
                                        }
                                        
                                    </div>                        
                                    Etiquetas:
                                    {data?.tags.map((t,ti)=><Badge key={ti} bg="dark m-1">{t+""}</Badge>)}
                                </>
                            }
                        </div>
                    </Col>
                </Row>
            </Container>
        )        
    }
    return (
        <Container fluid className="my-5">
            <Row className="mt-5">
                <Col xs={{ span: 8, offset: 2 }} className="p-3 bg-body-tertiary mt-5">
                    <div className="p-3 text-center">
                        <h2>Publicacion inexistente o inactiva</h2>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

/*
"_id": "64c99f36aa182162470388ab",
    "titulo": "publicacion #001",
    "contenido": "contenido de la publicacion #001",
    "imagen": "https://picsum.photos/300/200",
    "active": true,
    "tags": [
        "ofertas",
        "alimento",
        "descuentos"
    ],
    "push": false,
    "createdAt": "2023-08-02T00:11:34.155Z",
    "updatedAt": "2023-08-02T00:20:01.210Z",
    "__v": 0
*/