import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './ItemListContainer';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase';

const Category = () => {

    const { name } = useParams();
    const[products, setProducts] = useState([]);

    const sortArray = (array) => {
        array.sort((a,b) => {
            if(a.name < b.name) {
                return -1
            }
            if (a.name > b.name) {
                return 1
            }
            return 0
        })
    }

    useEffect(() => {

        const getFromFirebase = async () => {
            const q = query(collection(db, "items"), where("category", "==", name));
            const snapshot = await getDocs(q)
            let array = [];
            snapshot.forEach( (doc) => {
                array.push({id: doc.id, ...doc.data()})
            })
            sortArray(array)
            setProducts(array)
        }

        getFromFirebase()

    }, [name])

    return (
        <div>
            <ItemListContainer products={products}/>
        </div>
    );
}

export default Category;