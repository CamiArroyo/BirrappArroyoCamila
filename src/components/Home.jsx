import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './ItemListContainer';
import { useOutletContext } from 'react-router-dom';
import { useEffect } from 'react';

const Home = () => {

    const[loading, setLoading] = useOutletContext();

    useEffect(() => {
        setLoading(true)
        setTimeout(()=> {
            setLoading(false)
        },3000)
    })

    return (
        <div className="App">
            <ItemListContainer/>
        </div>
    );
}

export default Home;