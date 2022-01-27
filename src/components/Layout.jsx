import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import Loading from './Loading';

const Layout = () => {

    const [loading, setLoading] = useState(false);

    /* Uso outlet que es donde voy a renderizar contenido (todos los componentes adicionales)
    Context: todos los componentes tendrán disponible el loading y el setLoading */
    /* Al emebeber el loading acá significa que lo podemos usar en cualquier página */

    return (
        <div className="App">
            <NavBar/>
            <Outlet context={[loading, setLoading]} />
            {loading ? <Loading/> : null}
        </div>
    )
}

export default Layout;