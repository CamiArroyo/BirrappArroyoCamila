import { Button, Container, Form } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { getDocs } from 'firebase/firestore';


const AddItem = () => {

    const [brands, setBrands] = useState([])

    const onSubmit = (event) => {
        event.preventDefault();   
        const name = event.target.elements.name.value;
        const description = event.target.elements.description.value;
        const unitPrice = event.target.elements.unitPrice.value;
        const stock = event.target.elements.stock.value;
        const brand = event.target.elements.brand.value; 
        const category = chooseCategory(brand);
        const urlImg = event.target.elements.urlImg.value;
        addToFirebase(name, description, unitPrice, stock, brand, category, urlImg)
    }

    const chooseCategory = (itemBrand) => {
        let category = "";
        if (itemBrand == "Brahma" || itemBrand == "Quilmes" || itemBrand == "Budweiser") {
            category = "Clásica";
        } else {
            if (itemBrand == "Corona" || itemBrand == "Stella Artois" || itemBrand == "Andes Origen") {
                category = "Premium";
            } else {
                category = "Artesanal";
            }
        }
        return category;
    }

    const addToFirebase = async (name, description, unitPrice, stock, brand, category, urlImg) => {
        addDoc(collection(db, "items"), {
            name: name,
            description: description,
            unitPrice: unitPrice,
            stock: stock,
            brand: brand,
            category: category,
            urlImg: urlImg
        }).then(doc => {
            console.log("Se creó el item con el id ", doc.id)
        }).catch(err => {
            console.log(err)
        })
    }

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
                <Form.Control type="text" placeholder="Ingrese el nombre del producto" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="description">
                <Form.Label>Descripción</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Ingrese la descripción del producto" />
            </Form.Group>            
            <Form.Group className="mb-3" controlId="unitPrice">
                <Form.Label>Precio</Form.Label>
                <Form.Control type="text" placeholder="Ingrese el precio del producto solo numérico" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="stock">
                <Form.Label>Cantidad en stock</Form.Label>
                <Form.Control type="text" placeholder="Ingrese el stock actual del producto" />
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
                <Form.Control type="text" placeholder="Ingrese el nombre del archivo .jpg del producto" />
            </Form.Group>                        
            <Button variant="primary" type="submit">
                Agregar producto
            </Button>
            </Form>
        </Container>
    );

}

export default AddItem;