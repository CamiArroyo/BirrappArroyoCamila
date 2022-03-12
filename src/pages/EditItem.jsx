import { Button, Container, Form } from 'react-bootstrap';
import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../firebase';
import { collection, getDoc, getDocs, updateDoc, doc } from 'firebase/firestore';
import { CartContext } from '../contexts/CartContext';

const EditItem = () => {

    const { id } = useParams();
    const [brands, setBrands] = useState([]);
    const [name, setName] = useState("")
    const { InfoModal } = useContext(CartContext);
    const [confirm, setConfirm] = useState(false)
    const [ formValues, setFormValues ] = useState(
        {
            name: "",
            description: "",
            unitPrice: "",
            stock: "",
            brand: "",
            category: "",
            urlImg: "",
        }
    )

    const onSubmit = (event) => {
        event.preventDefault();   
        const name = event.target.elements.name.value;
        const description = event.target.elements.description.value;
        const unitPrice = event.target.elements.unitPrice.value;
        const stock = event.target.elements.stock.value;
        const brand = event.target.elements.brand.value; 
        const category = chooseCategory(brand);
        const urlImg = event.target.elements.urlImg.value;
        setName(event.target.elements.name.value)
        addToFirebase(name, description, unitPrice, stock, brand, category, urlImg)
    }

    const chooseCategory = (itemBrand) => {
        let category = "";
        if (itemBrand === "Brahma" || itemBrand === "Quilmes" || itemBrand === "Budweiser") {
            category = "Clásica";
        } else {
            if (itemBrand === "Corona" || itemBrand === "Stella Artois" || itemBrand === "Andes Origen") {
                category = "Premium";
            } else {
                category = "Artesanal";
            }
        }
        return category;
    }

    const addToFirebase = async (name, description, unitPrice, stock, brand, category, urlImg) => {

        const docRef = doc(db, "items", id)

        updateDoc(docRef, {
            name: name,
            description: description,
            unitPrice: unitPrice,
            stock: stock,
            brand: brand,
            category: category,
            urlImg: urlImg
        }).then(doc => {
            console.log("Se actualizó el documento")
            setConfirm(true)
        }).catch(err => {
            console.log(err)
        })
    }

    //Cargamos los datos del item
    useEffect(() => {
        const docRef = doc(db, "items", id)
        getDoc(docRef)
        .then(doc => {
            console.log(doc.data())
            const document = doc.data()
            setFormValues({
                name: document.name,
                description: document.description,
                unitPrice: document.unitPrice,
                stock: document.stock,
                brand: document.brand,
                category: document.category,
                urlImg: document.urlImg,              
            })
        })
        .catch(err => {
            console.log(err)
        })
    }, [id]);

    //Cargamos las marcas
    useEffect(() => {
        getDocs(collection(db, "brand"))
        .then(docs => {
            let preBrands = []
            docs.forEach(doc => {
                preBrands.push({id: doc.id, ...doc.data()})
            })
            setBrands(preBrands)
        })
        .catch(err => {
            console.log(err)
        })
    }, []);

    return (
        <Container style={{marginTop:100}}>
            <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Nombre del producto</Form.Label>
                <Form.Control defaultValue={formValues.name} type="text" placeholder="Ingrese el nombre del producto" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="description">
                <Form.Label>Descripción</Form.Label>
                <Form.Control defaultValue={formValues.description} as="textarea" rows={3} placeholder="Ingrese la descripción del producto" />
            </Form.Group>            
            <Form.Group className="mb-3" controlId="unitPrice">
                <Form.Label>Precio</Form.Label>
                <Form.Control defaultValue={formValues.unitPrice} type="text" placeholder="Ingrese el precio del producto solo numérico" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="stock">
                <Form.Label>Cantidad en stock</Form.Label>
                <Form.Control defaultValue={formValues.stock} type="text" placeholder="Ingrese el stock actual del producto" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="brand">
                <Form.Label>Marca</Form.Label>
                <Form.Select aria-label="Selecciona una marca">
                <option>Selecciona una marca</option>
                {brands.map(brand => {
                    return  <option value={brand.name}>{brand.name}</option>
                })}
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="urlImg">
                <Form.Label>Nombre de la imagen</Form.Label>
                <Form.Control defaultValue={formValues.urlImg} type="text" placeholder="Ingrese el nombre del archivo .jpg del producto" />
            </Form.Group>                        
            <Button style={{marginBottom:50}} variant="secondary" type="submit">
                Modificar producto
            </Button>
            { confirm ? (
                <div>
                    <InfoModal name={name} info="¡Producto modificado!"></InfoModal>
                </div>
            ) : null }
            </Form>
        </Container>
    );

}

export default EditItem;