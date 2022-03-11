import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from '../components/containers/ItemListContainer';
import { useOutletContext } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

const Home = () => {

    const[products, setProducts] = useState([]);
    const[setLoading] = useOutletContext();

    useEffect(() => {

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

        const getFromFirebase = async () => {
            const query = collection(db, "items");
            const snapshot = await getDocs(query);
            let array = [];
            snapshot.forEach( (doc) => {
                array.push({id: doc.id, ...doc.data()})
            })
            sortArray(array)
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

export default Home;