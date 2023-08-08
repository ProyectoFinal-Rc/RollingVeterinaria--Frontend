import { useParams } from 'react-router-dom';
import { useFetchGetJson } from '../../../hooks/useFetch';
import { Badge, Col, Container, Row } from 'react-bootstrap';
import { ZoomLoader } from '../UI';

const URL_PUBLICACIONES = import.meta.env.VITE_API_PUBLICACIONES

export function Publicacion(){
    const params = useParams();
    const {error, data, loading, setError, setData, setLoading} = useFetchGetJson(URL_PUBLICACIONES+"/"+params.id);
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
                                            : <img className="my-3" onError={(e)=>{e.target.src = "https://cristian021195.github.io/portfolio/img/others/404-image.svg";}} onLoad={(e)=>{e.target.className = 'my-3 bg-secondary rounded p-2'}} style={{height:'200px'}} src={data?.imagen+""} alt="Contacto rolling vet" />
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

