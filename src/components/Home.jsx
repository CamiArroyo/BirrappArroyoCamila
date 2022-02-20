import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './ItemListContainer';
import { useOutletContext } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { collection, getDocs, query, where, getDoc, doc } from 'firebase/firestore';
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

/*
    useEffect(() => {//obtengo una copia de la referencia a mi base de datos

        //lo declaramos asíncrono para luego usar el "await"
        const getFromFirebase = async () => {
            
            console.log("Traigo un elemento por nombre, usando un query y un where para filtrar")
            const q = query(collection(db, "items"), where("name", "==", "Andes roja"));
            //si no quiero filtrar los datos, solo hago un getDocs a collection(db, "items")
            const snapshot = await getDocs(q) //para getDocs necesito la referencia a las colecciones
            snapshot.forEach( doc => {
                console.log("El ID:" + doc.id)
                console.log("Los datos de mi item en la colección son:" , doc.data())
            })

            console.log("Traigo un elemento (un solo registro) por ID, usando getDoc")
            const docRef = doc(db, "items", "uQ7Ii2yQYTfoT9gqjuxt")
            const docSnapshot = await getDoc(docRef) //para getDoc necesito la referencia al documento
            console.log(docSnapshot.data())

            console.log("Traigo todos los items de mi colección")
            const nQuery = collection(db, "items");
            const nSnapshot = await getDocs(nQuery);
            let arreglo = [];
            nSnapshot.forEach( doc => {
                console.log("El ID: " , doc.id) //el "id" no está dentro de data()
                console.log("Demás datos del producto: ", doc.data()) //con doc.data() obtengo los datos de mi item en la colección
                arreglo.push({id: doc.id, ...doc.data()})
            })
            console.log("Arreglo completo: ", arreglo)
        }

        getFromFirebase()

    }, []);
*/

    return (
        <div>
            <ItemListContainer products={products}/>
        </div>
    );
}

export default Home;