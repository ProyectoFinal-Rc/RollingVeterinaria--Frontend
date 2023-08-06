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
                return false;
            })
        } else {
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
                navigator.clipboard.writeText(texto).then(//res=>{alert("¡copiado!")}
                ).catch(() => { alert("¡Erro al copiar dato!") }
                );
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
}