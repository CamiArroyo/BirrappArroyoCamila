import { useState, useEffect } from 'react';
import { useOutletContext, useParams } from 'react-router-dom';
import { getProductById } from '../services/Products';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    
    const { id } = useParams();
    const [setLoading] = useOutletContext();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        let mounted = true
        setLoading(true)
        if(mounted) {
            let product = getProductById(id)
            setTimeout(() => {
                setProduct(product)
                setLoading(false)
            }, 1000)
        }
        return () => mounted = false;
    }, [id])

    return(
        <div className="item-detail-container" style={{marginTop:100}}>
            {product ? <ItemDetail product={product}/> : null }
        </div>
    )

}

export default ItemDetailContainer;