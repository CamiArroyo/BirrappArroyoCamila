const arregloProductos = [        
    {productId:1, name:"Andes IPA lata 473", brand:"Andes", description:"Aquí habrá una descripción", unitPrice:148, sixPackPrice:880, stock:10},
    {productId:2, name:"Andes Negra lata 473", brand:"Andes", description:"Aquí habrá una descripción", unitPrice:170, sixPackPrice:1005, stock:15}, 
    {productId:3, name:"Andes Roja lata 473", brand:"Andes", description:"Aquí habrá una descripción", unitPrice:170, sixPackPrice:1005, stock:0},
    {productId:4, name:"Andes IPA lata 473", brand:"Andes", description:"Aquí habrá una descripción", unitPrice:148, sixPackPrice:880, stock:10},
    {productId:5, name:"Andes Negra lata 473", brand:"Andes", description:"Aquí habrá una descripción", unitPrice:170, sixPackPrice:1005, stock:15}, 
    {productId:6, name:"Andes Roja lata 473", brand:"Andes", description:"Aquí habrá una descripción", unitPrice:170, sixPackPrice:1005, stock:0},
    {productId:7, name:"Andes IPA lata 473", brand:"Andes", description:"Aquí habrá una descripción", unitPrice:148, sixPackPrice:880, stock:10},
    {productId:8, name:"Andes Negra lata 473", brand:"Andes", description:"Aquí habrá una descripción", unitPrice:170, sixPackPrice:1005, stock:15}, 
    {productId:9, name:"Andes Roja lata 473", brand:"Andes", description:"Aquí habrá una descripción", unitPrice:170, sixPackPrice:1005, stock:0},
    {productId:10, name:"Andes IPA lata 473", brand:"Andes", description:"Aquí habrá una descripción", unitPrice:148, sixPackPrice:880, stock:10},
    {productId:11, name:"Andes Negra lata 473", brand:"Andes", description:"Aquí habrá una descripción", unitPrice:170, sixPackPrice:1005, stock:15}, 
    {productId:12, name:"Andes Roja lata 473", brand:"Andes", description:"Aquí habrá una descripción", unitPrice:170, sixPackPrice:1005, stock:0}
    ];

export const getProducts = () => {
    return arregloProductos
}

export const getProductId = (id) => {
    return arregloProductos.find(object => object.productId === Number(id));
}