import Presentacion from './views/Presentacion';
import Planes from './views/Planes';
import Servicios from './views/Servicios';
import Colaboradores from './views/Colaboradores';
import Testimonios from './views/Testimonios';
import Marcas from './views/Marcas';
import '../App.css';

const Principal = () => {
    return (
        <>  
            
            <Presentacion></Presentacion>
            <Planes></Planes>
            <Marcas></Marcas>
            <Servicios></Servicios>
            <Colaboradores></Colaboradores>
            <Testimonios></Testimonios>
        </>
    );
};

export default Principal;