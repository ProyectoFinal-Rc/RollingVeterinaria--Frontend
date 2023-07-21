import Presentacion from './Presentacion';
import Planes from './Planes';
import Servicios from './Servicios';
import Colaboradores from './Colaboradores';
import Testimonios from './Testimonios';
import Marcas from './Marcas';
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