const arregloMarcas = ["Andes", "Brahma", "Budweiser", "Corona", "Patagonia", "Quilmes", "Stella", "Temple"]

const categories = ["Clásica", "Premium", "Artesanal"];

const arregloProductos = [        
    {productId:1, name:"Andes Rubia lata 473cc", urlImg:"andesLataRubia.jpg", category:categories[1], brand:arregloMarcas[0], description:"Aquí habrá una descripción", unitPrice:148, stock:10},
    {productId:2, name:"Andes Negra lata 473cc", urlImg:"andesLataNegra.jpg", category:categories[1], brand:arregloMarcas[0], description:"Aquí habrá una descripción", unitPrice:170, stock:15}, 
    {productId:3, name:"Andes Roja lata 473cc", urlImg:"andesLataRoja.jpg", category:categories[1], brand:arregloMarcas[0], description:"Aquí habrá una descripción", unitPrice:170, stock:20},
    {productId:4, name:"Andes Criolla lata 473cc", urlImg:"andesLataCriolla.jpg", category:categories[1], brand:arregloMarcas[0], description:"Aquí habrá una descripción", unitPrice:148, stock:30},
    {productId:5, name:"Andes IPA lata 473cc", urlImg:"andesLataIpa.jpg", category:categories[1], brand:arregloMarcas[0], description:"Aquí habrá una descripción", unitPrice:170, stock:15}, 
    {productId:6, name:"Andes Miel lata 473cc", urlImg:"andesLataMiel.jpg", category:categories[1], brand:arregloMarcas[0], description:"Aquí habrá una descripción", unitPrice:170, stock:0},
    {productId:7, name:"Andes Rubia botella 1L", urlImg:"andesBotellaRubia.jpg", category:categories[1], brand:arregloMarcas[0], description:"Aquí habrá una descripción", unitPrice:148, stock:10},
    {productId:8, name:"Andes Negra botella 1L", urlImg:"andesBotellaNegra.jpg", category:categories[1], brand:arregloMarcas[0], description:"Aquí habrá una descripción", unitPrice:170, stock:15}, 
    {productId:9, name:"Andes Roja botella 1L", urlImg:"andesBotellaRoja.jpg", category:categories[1], brand:arregloMarcas[0], description:"Aquí habrá una descripción", unitPrice:170, stock:20},
    {productId:10, name:"Andes IPA botella 1L", urlImg:"andesBotellaIpa.jpg", category:categories[1], brand:arregloMarcas[0], description:"Aquí habrá una descripción", unitPrice:148, stock:30},
    {productId:11, name:"Brahma lata 473cc", urlImg:"brahmaLata.jpg", category:categories[0], brand:arregloMarcas[1], description:"Aquí habrá una descripción", unitPrice:148, stock:50},
    {productId:12, name:"Brahma botella 340cc", urlImg:"brahmaBotellaChica.jpg", category:categories[0], brand:arregloMarcas[1], description:"Aquí habrá una descripción", unitPrice:148, stock:50},
    {productId:13, name:"Brahma botella 1L", urlImg:"brahmaBotellaGrande.jpg", category:categories[0], brand:arregloMarcas[1], description:"Aquí habrá una descripción", unitPrice:148, stock:50},
    {productId:14, name:"Budweiser lata 410cc", urlImg:"budweiserLata.jpg", category:categories[0], brand:arregloMarcas[2], description:"Aquí habrá una descripción", unitPrice:170, stock:60}, 
    {productId:15, name:"Budweiser botella 340cc", urlImg:"budweiserBotellaChica.jpg", category:categories[0], brand:arregloMarcas[2], description:"Aquí habrá una descripción", unitPrice:148, stock:50},
    {productId:16, name:"Budweiser botella 1L", urlImg:"budweiserBotellaGrande.jpg", category:categories[0], brand:arregloMarcas[2], description:"Aquí habrá una descripción", unitPrice:148, stock:50},
    {productId:17, name:"Corona lata 269cc", urlImg:"coronaLata.jpg", category:categories[1], brand:arregloMarcas[3], description:"Aquí habrá una descripción", unitPrice:170, stock:100},
    {productId:18, name:"Corona botella 330cc", urlImg:"coronaBotellaChica.jpg", category:categories[1], brand:arregloMarcas[3], description:"Aquí habrá una descripción", unitPrice:148, stock:50},
    {productId:19, name:"Corona botella 710cc", urlImg:"coronaBotellaGrande.jpg", category:categories[1], brand:arregloMarcas[3], description:"Aquí habrá una descripción", unitPrice:148, stock:50},
    {productId:20, name:"Patagonia 24.7 lata 410cc", urlImg:"patagoniaLata247.jpg", category:categories[2], brand:arregloMarcas[4], description:"Aquí habrá una descripción", unitPrice:148, stock:17},
    {productId:21, name:"Patagonia Amber Lager lata 410cc", urlImg:"patagoniaLataAmberLager.jpg", category:categories[2], brand:arregloMarcas[4], description:"Aquí habrá una descripción", unitPrice:170, stock:20}, 
    {productId:22, name:"Patagonia Bohemian Pilsener lata 410cc", urlImg:"patagoniaLataBohemianPilsener.jpg", category:categories[2], brand:arregloMarcas[4], description:"Aquí habrá una descripción", unitPrice:170, stock:0},
    {productId:23, name:"Patagonia Kuné lata 410cc", urlImg:"patagoniaLataKune.jpg", category:categories[2], brand:arregloMarcas[4], description:"Aquí habrá una descripción", unitPrice:170, stock:0},
    {productId:24, name:"Patagonia Weisse lata 410cc", urlImg:"patagoniaLataWeisse.jpg", category:categories[2], brand:arregloMarcas[4], description:"Aquí habrá una descripción", unitPrice:170, stock:55},    
    {productId:25, name:"Patagonia 24.7 botella 730cc", urlImg:"patagoniaBotella247.jpg", category:categories[2], brand:arregloMarcas[4], description:"Aquí habrá una descripción", unitPrice:148, stock:17},
    {productId:26, name:"Patagonia Amber Lager botella 730cc", urlImg:"patagoniaBotellaAmberLager.jpg", category:categories[2], brand:arregloMarcas[4], description:"Aquí habrá una descripción", unitPrice:170, stock:20}, 
    {productId:27, name:"Patagonia Bohemian Pilsener botella 730cc", urlImg:"patagoniaBotellaBohemianPilsener.jpg", category:categories[2], brand:arregloMarcas[4], description:"Aquí habrá una descripción", unitPrice:170, stock:0},
    {productId:28, name:"Patagonia Kuné botella 730cc", urlImg:"patagoniaBotellaKune.jpg", category:categories[2], brand:arregloMarcas[4], description:"Aquí habrá una descripción", unitPrice:170, stock:0},
    {productId:29, name:"Patagonia Weisse botella 730cc", urlImg:"patagoniaBotellaWeisse.jpg", category:categories[2], brand:arregloMarcas[4], description:"Aquí habrá una descripción", unitPrice:170, stock:55},   
    {productId:30, name:"Quilmes Bock lata 473cc", urlImg:"quilmesLataBock.jpg", category:categories[0], brand:arregloMarcas[5], description:"Aquí habrá una descripción", unitPrice:170, stock:60},
    {productId:31, name:"Quilmes Clásica lata 473cc", urlImg:"quilmesLataClasica.jpg", category:categories[0], brand:arregloMarcas[5], description:"Aquí habrá una descripción", unitPrice:170, stock:15},
    {productId:32, name:"Quilmes Doble Malta lata 410cc", urlImg:"quilmesLataDobleMalta.jpg", category:categories[0], brand:arregloMarcas[5], description:"Aquí habrá una descripción", unitPrice:170, stock:10},
    {productId:33, name:"Quilmes Red Lager lata 473cc", urlImg:"quilmesLataRedLager.jpg", category:categories[0], brand:arregloMarcas[5], description:"Aquí habrá una descripción", unitPrice:170, stock:5},
    {productId:34, name:"Quilmes Stout lata 473cc", urlImg:"quilmesLataStout.jpg", category:categories[0], brand:arregloMarcas[5], description:"Aquí habrá una descripción", unitPrice:170, stock:200},
    {productId:35, name:"Quilmes Bock botella 1L", urlImg:"quilmesBotellaBock.jpg", category:categories[0], brand:arregloMarcas[5], description:"Aquí habrá una descripción", unitPrice:170, stock:60},
    {productId:36, name:"Quilmes Clásica botella 1L", urlImg:"quilmesBotellaClasica.jpg", category:categories[0], brand:arregloMarcas[5], description:"Aquí habrá una descripción", unitPrice:170, stock:15},
    {productId:37, name:"Quilmes Doble Malta botella 1L", urlImg:"quilmesBotellaDobleMalta.jpg", category:categories[0], brand:arregloMarcas[5], description:"Aquí habrá una descripción", unitPrice:170, stock:10},
    {productId:38, name:"Quilmes Red Lager botella 1L", urlImg:"quilmesBotellaRedLager.jpg", category:categories[0], brand:arregloMarcas[5], description:"Aquí habrá una descripción", unitPrice:170, stock:5},
    {productId:39, name:"Quilmes Stout botella 1L", urlImg:"quilmesBotellaStout.jpg", category:categories[0], brand:arregloMarcas[5], description:"Aquí habrá una descripción", unitPrice:170, stock:200},
    {productId:40, name:"Stella Rubia lata 269cc", urlImg:"stellaLataChicaRubia.jpg", category:categories[1], brand:arregloMarcas[6], description:"Aquí habrá una descripción", unitPrice:170, stock:0},
    {productId:41, name:"Stella Rubia lata 473cc", urlImg:"stellaLataGrandeRubia.jpg", category:categories[1], brand:arregloMarcas[6], description:"Aquí habrá una descripción", unitPrice:170, stock:30},
    {productId:42, name:"Stella Negra lata 269cc", urlImg:"stellaLataChicaNegra.jpg", category:categories[1], brand:arregloMarcas[6], description:"Aquí habrá una descripción", unitPrice:170, stock:35},
    {productId:43, name:"Stella Negra lata 473cc", urlImg:"stellaLataGrandeNegra.jpg", category:categories[1], brand:arregloMarcas[6], description:"Aquí habrá una descripción", unitPrice:170, stock:40},
    {productId:44, name:"Stella Rubia botella 330cc", urlImg:"stellaBotellaChicaRubia.jpg", category:categories[1], brand:arregloMarcas[6], description:"Aquí habrá una descripción", unitPrice:170, stock:0},
    {productId:45, name:"Stella Rubia botella 975cc", urlImg:"stellaBotellaGrandeRubia.jpg", category:categories[1], brand:arregloMarcas[6], description:"Aquí habrá una descripción", unitPrice:170, stock:30},
    {productId:46, name:"Stella Negra botella 330cc", urlImg:"stellaBotellaChicaNegra.jpg", category:categories[1], brand:arregloMarcas[6], description:"Aquí habrá una descripción", unitPrice:170, stock:35},
    {productId:47, name:"Stella Negra botella 975cc", urlImg:"stellaBotellaGrandeNegra.jpg", category:categories[1], brand:arregloMarcas[6], description:"Aquí habrá una descripción", unitPrice:170, stock:40},
    {productId:48, name:"Temple Cósmica lata 473cc", urlImg:"templeLataCosmica.jpg", category:categories[2], brand:arregloMarcas[7], description:"Aquí habrá una descripción", unitPrice:170, stock:10},
    {productId:49, name:"Temple Honey lata 473cc", urlImg:"templeLataHoney.jpg", category:categories[2], brand:arregloMarcas[7], description:"Aquí habrá una descripción", unitPrice:170, stock:30},
    {productId:50, name:"Temple Wolf IPA lata 473cc", urlImg:"templeLataIpa.jpg", category:categories[2], brand:arregloMarcas[7], description:"Aquí habrá una descripción", unitPrice:170, stock:0},
    {productId:51, name:"Temple Scottish lata 473cc", urlImg:"templeLataScottish.jpg", category:categories[2], brand:arregloMarcas[7], description:"Aquí habrá una descripción", unitPrice:170, stock:25},
];

export const getProducts = () => {
    return arregloProductos
}

export const getProductId = (id) => {
    return arregloProductos.find(object => object.productId === Number(id));
}

export const getProductsCategory = (category) => {
    return arregloProductos.filter(object => object.category == category);
}