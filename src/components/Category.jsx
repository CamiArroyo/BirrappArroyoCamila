import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './ItemListContainer';
import { useOutletContext, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getProductsByCategory } from '../services/Products';

const Category = () => {

    const[products, setProducts] = useState([]);
    const[setLoading] = useOutletContext();
    const { id } = useParams();

    useEffect(() => {
        let mounted = true
        setLoading(true)
        if(mounted) {
            let productsArray = getProductsByCategory(id)
            setTimeout(() => {
                setProducts(productsArray)
                setLoading(false)
            }, 1000)
        }
        return () => mounted = false;
    }, [id])

    return (
        <div>
            <ItemListContainer products={products}/>
        </div>
    );
}

export default Category;