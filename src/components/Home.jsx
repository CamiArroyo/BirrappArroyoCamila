import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './ItemListContainer';
import { useOutletContext } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getProducts } from '../services/Products';

const Home = () => {

    const[products, setProducts] = useState([]);
    const[setLoading] = useOutletContext();

    useEffect(() => {
        let mounted = true
        setLoading(true)
        if(mounted) {
            let productsArray = getProducts()
            setTimeout(() => {
                setProducts(productsArray)
                setLoading(false)
            }, 1000)
        }
        return () => mounted = false;
    }, [])

    return (
        <div>
            <ItemListContainer products={products}/>
        </div>
    );
}

export default Home;