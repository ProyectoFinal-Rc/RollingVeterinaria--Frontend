import { useEffect, useState } from "react";

export function useFetchGetJson(url="", timeout=3000, extraHeaders={}){
    const[error,setError] = useState("");
    const[data,setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [renew, setRenew] = useState(false);

    useEffect(()=>{
        setLoading(true);
        fetch(url, { signal: AbortSignal.timeout(timeout) })
        .then(res=>{
            if(res.ok){
                return res.json()
            }else{
                throw new Error("Error al parsear la peticion")
            }            
        })
        .then(res=>setData(res))
        .catch(err=>setError(err))
        .finally(f=>{setLoading(false)})
        return ()=>{}
    },[renew])
    return {error, data, loading, renew, setError, setData, setLoading, setRenew}
}

export function useFetchPostJson(url="", timeout=3000, body, extraHeaders){
    const[error,setError] = useState("");
    const[data,setData] = useState(null);
    const [loading, setLoading] = useState(false);

        setLoading(true);
        fetch(url, {
            method:'POST',
            body:JSON.stringify(body),
            headers:{...extraHeaders,"Content-Type":"application/json"},
            signal: AbortSignal.timeout(timeout) })
        .then(res=>res.json())
        .then(res=>setData(res))
        .catch(err=>setError(err))
        .finally(f=>{setLoading(false)})
        
    return {error, data, loading}
}

export function useFetchPutJson(url="", timeout=3000, body, extraHeaders){
    const[error,setError] = useState("");
    const[data,setData] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        setLoading(true);
        fetch(url, {
            method:'PUT',
            body:JSON.stringify(body),
            headers:{...extraHeaders,"Content-Type":"application/json"},
            signal: AbortSignal.timeout(timeout) })
        .then(res=>res.json())
        .then(res=>setData(res))
        .catch(err=>setError(err))
        .finally(f=>{setLoading(false)})
    },[])
    return {error, data, loading}
}

export function useFetchDeleteJson(url="", timeout=3000, body, extraHeaders){
    const[error,setError] = useState("");
    const[data,setData] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        setLoading(true);
        fetch(url, {
            method:'DELETE',
            body:JSON.stringify(body),
            headers:{...extraHeaders,"Content-Type":"application/json"},
            signal: AbortSignal.timeout(timeout) })
        .then(res=>res.json())
        .then(res=>setData(res))
        .catch(err=>setError(err))
        .finally(f=>{setLoading(false)})
    },[])
    return {error, data, loading, setError, setData, setLoading}
}