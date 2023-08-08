export function obtenerFechaParaHTML(format="YYYY/MM/DD", separator="-", evalzero=true, str=true){
    let date = new Date();
    let form_arr = format.toLowerCase().split("/");
    let arr = []; let y = date.getFullYear(); let m = date.getMonth()+1; let d = date.getDate();
    if(evalzero){
        m < 10 && (m = "0"+m);
        d < 10 && (d = "0"+d);
        arr = [y, m, d]
    }else{
        arr = [y, m, d]
    }    

    let res = arr.join(separator)
    if(str){
        return res.toString();
    }else{
        return res;
    }
    
}