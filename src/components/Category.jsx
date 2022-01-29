import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './ItemListContainer';
import { useOutletContext, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getProductsCategory } from '../services/Products';

const Category = () => {

    const[products, setProducts] = useState([]);
    const[loading, setLoading] = useOutletContext();
    const { name } = useParams();

    const promise = new Promise((resolve, reject) => {
        let arregloProductos = getProductsCategory(name)
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

export default Category;