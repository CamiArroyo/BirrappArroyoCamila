import { useState, useEffect } from 'react';
import { useOutletContext, useParams } from 'react-router-dom';
import { getProductId } from '../services/Products';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    
    const { id } = useParams();
    const [loading, setLoading] = useOutletContext();
    const [product, setProduct] = useState(null);

    const promise = new Promise((resolve, reject) => {
        let product = getProductId(id)
        setTimeout(() => {
            resolve(product)
        }, 2000)
    })

    useEffect(() => {
        let mounted = true
        setLoading(true)
        promise.then(result => {
            if(mounted) {
                setProduct(result)
                setTimeout(() => {
                    setLoading(false)
                }, 0)
            }
        })
        return () => mounted = false;
    }, [])

    return(
        <div className="item-detail-container" style={{marginTop:100}}>
            <h1>{id}</h1>
            <h1>{product}</h1>
            {product ? <ItemDetail product={product}/> : null }
        </div>
    )
}

export default ItemDetailContainer;