import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './ItemListContainer';
import { useOutletContext, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase';

const Category = () => {

    const { name } = useParams();
    const[setLoading] = useOutletContext();
    const[products, setProducts] = useState([]);

    useEffect(() => {

        const getFromFirebase = async () => {
            const q = query(collection(db, "items"), where("category", "==", name));
            const snapshot = await getDocs(q)
            let array = [];
            snapshot.forEach( (doc) => {
                array.push({id: doc.id, ...doc.data()})
            })
            console.log("ARREGLO: ", array)
            setProducts(array)
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

    return (
        <div>
            <ItemListContainer products={products}/>
        </div>
    );
}

export default Category;