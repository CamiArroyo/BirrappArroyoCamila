import { useState, useEffect } from 'react';
import { useOutletContext, useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';

const ItemDetailContainer = () => {
    
    const { id } = useParams();
    const [setLoading] = useOutletContext();
    const [product, setProduct] = useState(null);

    useEffect(() => {

        const getFromFirebase = async () => {
            const docRef = doc(db, "items", id)
            const docSnapshot = await getDoc(docRef)
            setProduct(docSnapshot.data())
        }

        let mounted = true
        setLoading(true)
        if(mounted) {
            setTimeout(() => {
                getFromFirebase()
                setLoading(false)
            }, 1000)
        }

        return () => mounted = false;
    }, [])

    return(
        <div className="item-detail-container" style={{marginTop:100}}>
            {product ? <ItemDetail product={product}/> : null }
        </div>
    )

}

export default ItemDetailContainer;