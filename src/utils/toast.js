import Swal from 'sweetalert2';

export function toast(mensaje="Mensaje por defecto", timer=2000, css="bg-success text-white", confirmation=false){
    if(confirmation){
        Swal.fire({
            text: mensaje,
            target: 'body',
            customClass: {
              container: 'position-absolute',
              popup: css
            },
            toast: true,
            position: 'bottom-right',
            showConfirmButton:true
        })
    }else{
        Swal.fire({
            text: mensaje,
            target: 'body',
            customClass: {
              container: 'position-absolute',
              popup: css
            },
            toast: true,
            position: 'bottom-right',
            showConfirmButton:false,
            timer
        })
    }
}