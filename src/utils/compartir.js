export function compartir(title='Titulo', text='Texto a compartir', url='/'){
    if(navigator) {
        if (navigator.share) {
            navigator.share({
                title,
                text,
                url
            }).then(() => {
                return true;
            }).catch((err) => {
                window.alert("Su navegador no soporta Share API, o no tiene los permisos para usarlo en su navegador / localhost");
                return false;
            })
        } else {
            window.alert("Su navegador no soporta Share API, o no tiene los permisos para usarlo en su navegador / localhost");
            return false;
        }
    } else {
        return false;
    }
    return false;
}
export function copiarTexto(texto){
    if (window) {
        if (navigator) {
            if (navigator.clipboard) {
                navigator.clipboard.writeText(texto).then().catch(() => { window.alert("¡Error al copiar dato!") }
                );
                return true;
            } else {
                window.alert("Su navegador no soporta Clipboard API, o no tiene los permisos para usarlo en su navegador / localhost");
                return false;
            }
        } else {
            return false;
        }
    }
}