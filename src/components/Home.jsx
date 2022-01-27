import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './ItemListContainer';
import { useOutletContext } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getProducts } from '../services/Products';

const Home = () => {

    const[products, setProducts] = useState([]);
    const[loading, setLoading] = useOutletContext();

    const promise = new Promise((resolve, reject) => {
        let arregloProductos = getProducts
        setTimeout(() => {
            resolve(arregloProductos)
        }, 2000)
    })
    
    useEffect(() => {
        let mounted = true
        setLoading(true)
        promise.then(results => {
            if(mounted) {
                setProducts(results)
                setTimeout(() => {
                    setLoading(false)
                }, 0)
            }
        })
        return () => mounted = false;
    }, [])

    return (
        <div>
            <ItemListContainer products={products}/>
        </div>
    );
}

export default Home;