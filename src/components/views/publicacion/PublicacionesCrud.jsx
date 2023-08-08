import React, { useEffect, useState } from 'react'
import { Col, Container, Modal, Row } from 'react-bootstrap'
import { LockSpinnerLoader, SpinnerLoader } from '../UI';
import { useFetchGetJson } from '../../../hooks/useFetch';
import { toast } from '../../../utils';
import Swal from 'sweetalert2';
/* const API_URL = import.meta.env.VITE_API_DEV; */
const URL_PUBLICACIONES = import.meta.env.VITE_API_PUBLICACIONES


export const PublicacionesCrud = () => {
    const {error, data, loading, renew, setError, setData, setLoading, setRenew} = useFetchGetJson(URL_PUBLICACIONES);
    const [newTags, setNewTags] = useState([]);
    const [show, setShow] = useState(false);
    const [selected, setSelected] = useState({_id:'',contenido:'', imagen:'', tags:[], titulo:''});

    function togglePublicacion(id, active){
        setLoading(true)
        fetch(URL_PUBLICACIONES+"/activar/"+id, 
            {method:'PUT', body: JSON.stringify({active:!active}), headers:{"Content-Type":"application/json"}})
        .then(res=>{
            setData(data.map(d=>{
                if(d._id == id){
                    d.active = !active;
                }
                return d;
            }))
            return res.json()
        })
        .then(res=>{
            res.activa ? toast(res.mensaje, 3000, "bg-success text-white", false) : toast(res.mensaje, 3000, "bg-warning text-dark", false);            
        })
        .catch(err=>{
            setData(data.map(d=>{
                if(d._id == id){
                    d.active = !active;
                }
                return d;
            }))
            toast(err.message+"", 3000, "bg-danger text-white", false);
        }).finally(()=>{setLoading(false)})
    }

    function filtrar(e){
        e.preventDefault();
        let formData = new FormData(e.target);
        setLoading(true);
        fetch(URL_PUBLICACIONES+"/filtrar/", 
            {method:'POST', body: JSON.stringify({titulo: formData.get('titulo')}), headers:{"Content-Type":"application/json"}})
        .then(res=>res.json())
        .then(res=>{
            setData(res);
        })
        .catch(err=>{
            console.log(err);
            toast(err.message+"", 3000, "bg-danger text-white", false);
        })
        .finally(()=>{setLoading(false);})        
    }
    function addTags(tag, checked){
        if(checked){
            setNewTags((p)=>[...p, tag])
        }else{
            setNewTags((p)=>p.filter(pf=>pf!==tag))
        }        
    }
    function enviarPublicacion(e){
        e.preventDefault(); const DTO = {}; setLoading(true);
        let formData = new FormData(e.target);
        formData.forEach((value, key) => {                
            if(!Reflect.has(DTO, key)){
                DTO[key] = value;
                return;
            }
            if(!Array.isArray(DTO[key])){
                DTO[key] = [DTO[key]];    
            }
            DTO[key].push(value);
        });

        if(!Array.isArray(DTO.tags)){
            DTO.tags = [DTO.tags];
        }
        if(DTO.id === ""){
            delete DTO['id'];
            fetch(URL_PUBLICACIONES, {                
                method:'POST', body:JSON.stringify(DTO), headers:{"Content-Type":"application/json"}
            }).then((res)=>{
                if(res.ok){
                    e.target.reset(); setRenew(!renew);
                    return res.json();
                }            
            })
            .then(res=>{
                toast(res.mensaje, 3000, "bg-success text-white", false);
            })
            .catch(err=>{
                console.log(err);
                toast(err.message+"", 3000, "bg-danger text-white", false);
            }).finally(()=>{
                setShow(false);setNewTags([]);
                setLoading(false)
            })
        }else{
            fetch(URL_PUBLICACIONES+"/"+DTO.id, {
                method:'PUT', body:JSON.stringify(DTO), headers:{"Content-Type":"application/json"}
            }).then((res)=>{
                if(res.ok){
                    e.target.reset();
                    setRenew(!renew);
                    return res.json();
                }            
            })
            .then(res=>{
                toast("Modificada correctamente", 3000, "bg-success text-white", false);
            })
            .catch(err=>{
                console.log(err);
                toast(err.message+"", 3000, "bg-danger text-white", false);
            }).finally(()=>{
                setShow(false);setNewTags([]);
                setLoading(false);
            })
        }
    }
    useEffect(()=>{
        if(newTags.length >= 3){
            document.querySelectorAll('form input[type="checkbox"]').forEach((ic)=>{
                if(ic.checked == false){
                    ic.disabled=true;
                }
            })
        }else{
            document.querySelectorAll('form input[type="checkbox"]').forEach((ic)=>{
                if(ic.disabled == true){
                    ic.disabled = false;
                }
            })
        }
    },[newTags])
    function eliminar(id){
        Swal.fire({
            title: 'Esta seguro de borrar esta publicación?',
            text: "El siguiente cambio no podra ser revertido",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, quiero borrar!',
            cancelButtonText: 'Cancelar'
        }).then((resultado) =>{
            if(resultado.isConfirmed){
                setLoading(true)
                fetch(URL_PUBLICACIONES+"/"+id, 
                {method:'DELETE', headers:{"Content-Type":"application/json"}})
                .then(res=>{
                    return res.json()
                })
                .then(res=>{
                    if(res.error){
                        throw new Error(res.mensaje);
                    }
                    setData(data.filter(d=>d._id !== id))
                    toast("Eliminada correctamente", 3000, "bg-success text-white", false);
                })
                .catch(err=>{
                    console.log(err)
                    toast(err.message+"", 3000, "bg-danger text-white", false);
                }).finally(()=>{setLoading(false)})
            }
        })

    }
    function editar(id){
        const sel = data.find(d=>d._id === id);
        setShow(true); setSelected(sel); let aux=[];
        setTimeout(() => {            
            document.querySelectorAll('form input[type="checkbox"]').forEach((ic)=>{
                sel.tags.forEach((st)=>{
                    if(ic.value == st){
                        ic.checked = true;
                        aux.push(st);
                    }
                })
            })
            setNewTags(aux); aux = [];
        }, 100);
    }
    return (
        <Container fluid className="my-3 fade-up">
            <Row>
                <h1 className="fw-bold text-center titular">Publicaciones</h1>
                <Col xs={{ span: 10, offset: 1 }} className="p-3 bg-body-tertiary mt-5">
                    <div>
                        <form id='publicacion-form' onSubmit={(e)=>{filtrar(e)}} className='d-flex align-items-center mb-3'>
                            <label htmlFor="titulo">Titulo: </label><input type="text" name='titulo' placeholder='Ej: #00X o Vacío para buscar todos' className='form-control mx-2'/>
                            {loading ? <SpinnerLoader color='green' width='3' height='2'/> : <LockSpinnerLoader color='#B0BEC5' width='3' height='2'/>}
                            <div className="btn-group ms-2" role="group" aria-label="Basic mixed styles example">
                                <button type="submit" className='btn btn-primary'><i className="bi bi-search"></i></button>
                                <button type="button" className='btn btn-success' onClick={()=>{setShow(!show); setSelected({_id:'',contenido:'', imagen:'', tags:[], titulo:''})}}><i className="bi bi-plus-square"></i></button>
                                <button type="reset" className='btn btn-warning'><i className="bi bi-backspace"></i></button>
                            </div>
                        </form>
                    </div>
                    <div className='table-responsive'>
                        <table className='table table-striped'>
                            <thead>
                                <tr>
                                    <th>TITULO</th>
                                    <th>CONTENIDO</th>
                                    <th>ACCIONES</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data?.map((p,pi)=>{
                                    return (<tr key={pi}>
                                        <td>{p.titulo}</td>
                                        <td>{p.contenido.slice(0,20)+"..."}</td>
                                        <td>
                                        <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                                            <button type="submit" className='btn btn-sm' title='eliminar' onClick={()=>{eliminar(p._id)}}><i className="bi bi-trash text-danger"></i></button>
                                            <button type="reset" className='btn btn-sm' title='editar' onClick={()=>{editar(p._id)}}><i className="bi bi-pencil-square text-warning"></i></button>
                                            <button className='btn btn-sm' title='activar'><input type="checkbox" onClick={()=>togglePublicacion(p._id, p.active)} defaultChecked={p.active} className='form-check-input' name="activa"/></button>
                                        </div>
                                        </td>
                                    </tr>)})}
                            </tbody>
                        </table>
                    </div>
                </Col>
            </Row>
            <>
            <Modal show={show} onHide={()=>{setShow(!show); setNewTags([])}}>
                <Modal.Header closeButton>
                <Modal.Title>Crear / Editar: Nueva Noticia</Modal.Title>
                </Modal.Header>
                <form id='cargaformulario' onSubmit={(e)=>{enviarPublicacion(e);}}>
                    <Modal.Body>
                        <label htmlFor="titulo">Titulo: </label>
                        <input className='form-control mb-3' type="text" id="titulo" name="titulo" placeholder='Titulo de la publicacion' defaultValue={selected.titulo || ''} maxLength={20} minLength={2} required/>
                        <label htmlFor="imagen">Imagen: </label>
                        <input className='form-control mb-3' type="text" id="imagen" name="imagen" placeholder='https://picsum.photos/300/200' defaultValue={selected.imagen || ''} maxLength={550} minLength={15} required/>
                        <label htmlFor="contenido">Contenido: </label>
                        <textarea className='form-control mb-3' id="contenido" name="contenido" defaultValue={selected.contenido || ''} cols="30" rows="10" minLength={15} maxLength={550} placeholder='Contenido de la publicacion' required></textarea>
                        <label htmlFor="tags">Tags: (solo 3) {newTags.length}/3</label>
                        <input type="hidden" name="id" value={selected._id || ''}/>
                        <div className='border rounded p-2'>
                            <label>ofertas: 
                                <input type="checkbox" onChange={(e)=>{addTags(e.target.value, e.target.checked)}} className='form-check-input me-3' name="tags" value={"ofertas"}/>
                            </label>
                            <label>alimento: 
                                <input type="checkbox" onChange={(e)=>{addTags(e.target.value, e.target.checked)}} className='form-check-input me-3' name="tags" value={"alimento"}/>
                            </label>
                            <label>descuento: 
                                <input type="checkbox" onChange={(e)=>{addTags(e.target.value, e.target.checked)}} className='form-check-input me-3' name="tags" value={"descuento"}/>
                            </label>
                            <label>vacunas: 
                                <input type="checkbox" onChange={(e)=>{addTags(e.target.value, e.target.checked)}} className='form-check-input me-3' name="tags" value={"vacunas"}/>
                            </label>
                            <label>castraciones: 
                                <input type="checkbox" onChange={(e)=>{addTags(e.target.value, e.target.checked)}} className='form-check-input me-3' name="tags" value={"castraciones"}/>
                            </label>
                        </div>

                    </Modal.Body>
                    <Modal.Footer>
                        <button type='submit' className='btn btn-primary d-flex' disabled={loading}>Guardar &nbsp;{loading && <SpinnerLoader color='white' height='1' width='1'/>} </button>
                    </Modal.Footer>
                </form>
            </Modal>
            </>
        </Container>
    )
}
