const arregloMarcas = ["Andes", "Brahma", "Budweiser", "Corona", "Patagonia", "Quilmes", "Stella", "Temple"]

const arregloProductos = [        
    {productId:1, name:"Andes Rubia lata 473cc", urlImg:"andesLataRubia.jpg", brand:arregloMarcas[0], description:"Aquí habrá una descripción", unitPrice:148, stock:10},
    {productId:2, name:"Andes Negra lata 473cc", urlImg:"andesLataNegra.jpg", brand:arregloMarcas[0], description:"Aquí habrá una descripción", unitPrice:170, stock:15}, 
    {productId:3, name:"Andes Roja lata 473cc", urlImg:"andesLataRoja.jpg", brand:arregloMarcas[0], description:"Aquí habrá una descripción", unitPrice:170, stock:20},
    {productId:4, name:"Andes Criolla lata 473cc", urlImg:"andesLataCriolla.jpg", brand:arregloMarcas[0], description:"Aquí habrá una descripción", unitPrice:148, stock:30},
    {productId:5, name:"Andes IPA lata 473cc", urlImg:"andesLataIpa.jpg", brand:arregloMarcas[0], description:"Aquí habrá una descripción", unitPrice:170, stock:15}, 
    {productId:6, name:"Andes Miel lata 473cc", urlImg:"andesLataMiel.jpg", brand:arregloMarcas[0], description:"Aquí habrá una descripción", unitPrice:170, stock:0},
    {productId:1, name:"Andes Rubia botella 1L", urlImg:"andesBotellaRubia.jpg", brand:arregloMarcas[0], description:"Aquí habrá una descripción", unitPrice:148, stock:10},
    {productId:2, name:"Andes Negra botella 1L", urlImg:"andesBotellaNegra.jpg", brand:arregloMarcas[0], description:"Aquí habrá una descripción", unitPrice:170, stock:15}, 
    {productId:3, name:"Andes Roja botella 1L", urlImg:"andesBotellaRoja.jpg", brand:arregloMarcas[0], description:"Aquí habrá una descripción", unitPrice:170, stock:20},
    {productId:4, name:"Andes IPA botella 1L", urlImg:"andesBotellaIpa.jpg", brand:arregloMarcas[0], description:"Aquí habrá una descripción", unitPrice:148, stock:30},
    {productId:7, name:"Brahma lata 473cc", urlImg:"brahmaLata.jpg", brand:arregloMarcas[1], description:"Aquí habrá una descripción", unitPrice:148, stock:50},
    {productId:7, name:"Brahma botella 340cc", urlImg:"brahmaBotellaChica.jpg", brand:arregloMarcas[1], description:"Aquí habrá una descripción", unitPrice:148, stock:50},
    {productId:7, name:"Brahma botella 1L", urlImg:"brahmaBotellaGrande.jpg", brand:arregloMarcas[1], description:"Aquí habrá una descripción", unitPrice:148, stock:50},
    {productId:8, name:"Budweiser lata 410cc", urlImg:"budweiserLata.jpg", brand:arregloMarcas[2], description:"Aquí habrá una descripción", unitPrice:170, stock:60}, 
    {productId:7, name:"Budweiser botella 340cc", urlImg:"budweiserBotellaChica.jpg", brand:arregloMarcas[2], description:"Aquí habrá una descripción", unitPrice:148, stock:50},
    {productId:7, name:"Budweiser botella 1L", urlImg:"budweiserBotellaGrande.jpg", brand:arregloMarcas[2], description:"Aquí habrá una descripción", unitPrice:148, stock:50},
    {productId:9, name:"Corona lata 269cc", urlImg:"coronaLata.jpg", brand:arregloMarcas[3], description:"Aquí habrá una descripción", unitPrice:170, stock:100},
    {productId:7, name:"Corona botella 330cc", urlImg:"coronaBotellaChica.jpg", brand:arregloMarcas[3], description:"Aquí habrá una descripción", unitPrice:148, stock:50},
    {productId:7, name:"Corona botella 710cc", urlImg:"coronaBotellaGrande.jpg", brand:arregloMarcas[3], description:"Aquí habrá una descripción", unitPrice:148, stock:50},
    {productId:10, name:"Patagonia 24.7 lata 410cc", urlImg:"patagoniaLata247.jpg", brand:arregloMarcas[4], description:"Aquí habrá una descripción", unitPrice:148, stock:17},
    {productId:11, name:"Patagonia Amber Lager lata 410cc", urlImg:"patagoniaLataAmberLager.jpg", brand:arregloMarcas[4], description:"Aquí habrá una descripción", unitPrice:170, stock:20}, 
    {productId:12, name:"Patagonia Bohemian Pilsener lata 410cc", urlImg:"patagoniaLataBohemianPilsener.jpg", brand:arregloMarcas[4], description:"Aquí habrá una descripción", unitPrice:170, stock:0},
    {productId:13, name:"Patagonia Kuné lata 410cc", urlImg:"patagoniaLataKune.jpg", brand:arregloMarcas[4], description:"Aquí habrá una descripción", unitPrice:170, stock:0},
    {productId:14, name:"Patagonia Weisse lata 410cc", urlImg:"patagoniaLataWeisse.jpg", brand:arregloMarcas[4], description:"Aquí habrá una descripción", unitPrice:170, stock:55},    
    {productId:10, name:"Patagonia 24.7 botella 730cc", urlImg:"patagoniaBotella247.jpg", brand:arregloMarcas[4], description:"Aquí habrá una descripción", unitPrice:148, stock:17},
    {productId:11, name:"Patagonia Amber Lager botella 730cc", urlImg:"patagoniaBotellaAmberLager.jpg", brand:arregloMarcas[4], description:"Aquí habrá una descripción", unitPrice:170, stock:20}, 
    {productId:12, name:"Patagonia Bohemian Pilsener botella 730cc", urlImg:"patagoniaBotellaBohemianPilsener.jpg", brand:arregloMarcas[4], description:"Aquí habrá una descripción", unitPrice:170, stock:0},
    {productId:13, name:"Patagonia Kuné botella 730cc", urlImg:"patagoniaBotellaKune.jpg", brand:arregloMarcas[4], description:"Aquí habrá una descripción", unitPrice:170, stock:0},
    {productId:14, name:"Patagonia Weisse botella 730cc", urlImg:"patagoniaBotellaWeisse.jpg", brand:arregloMarcas[4], description:"Aquí habrá una descripción", unitPrice:170, stock:55},   
    {productId:15, name:"Quilmes Bock lata 473cc", urlImg:"quilmesLataBock.jpg", brand:arregloMarcas[5], description:"Aquí habrá una descripción", unitPrice:170, stock:60},
    {productId:16, name:"Quilmes Clásica lata 473cc", urlImg:"quilmesLataClasica.jpg", brand:arregloMarcas[5], description:"Aquí habrá una descripción", unitPrice:170, stock:15},
    {productId:17, name:"Quilmes Doble Malta lata 410cc", urlImg:"quilmesLataDobleMalta.jpg", brand:arregloMarcas[5], description:"Aquí habrá una descripción", unitPrice:170, stock:10},
    {productId:18, name:"Quilmes Red Lager lata 473cc", urlImg:"quilmesLataRedLager.jpg", brand:arregloMarcas[5], description:"Aquí habrá una descripción", unitPrice:170, stock:5},
    {productId:19, name:"Quilmes Stout lata 473cc", urlImg:"quilmesLataStout.jpg", brand:arregloMarcas[5], description:"Aquí habrá una descripción", unitPrice:170, stock:200},
    {productId:15, name:"Quilmes Bock botella 1L", urlImg:"quilmesBotellaBock.jpg", brand:arregloMarcas[5], description:"Aquí habrá una descripción", unitPrice:170, stock:60},
    {productId:16, name:"Quilmes Clásica botella 1L", urlImg:"quilmesBotellaClasica.jpg", brand:arregloMarcas[5], description:"Aquí habrá una descripción", unitPrice:170, stock:15},
    {productId:17, name:"Quilmes Doble Malta botella 1L", urlImg:"quilmesBotellaDobleMalta.jpg", brand:arregloMarcas[5], description:"Aquí habrá una descripción", unitPrice:170, stock:10},
    {productId:18, name:"Quilmes Red Lager botella 1L", urlImg:"quilmesBotellaRedLager.jpg", brand:arregloMarcas[5], description:"Aquí habrá una descripción", unitPrice:170, stock:5},
    {productId:19, name:"Quilmes Stout botella 1L", urlImg:"quilmesBotellaStout.jpg", brand:arregloMarcas[5], description:"Aquí habrá una descripción", unitPrice:170, stock:200},
    {productId:20, name:"Stella Rubia lata 269cc", urlImg:"stellaLataChicaRubia.jpg", brand:arregloMarcas[6], description:"Aquí habrá una descripción", unitPrice:170, stock:0},
    {productId:21, name:"Stella Rubia lata 473cc", urlImg:"stellaLataGrandeRubia.jpg", brand:arregloMarcas[6], description:"Aquí habrá una descripción", unitPrice:170, stock:30},
    {productId:22, name:"Stella Negra lata 269cc", urlImg:"stellaLataChicaNegra.jpg", brand:arregloMarcas[6], description:"Aquí habrá una descripción", unitPrice:170, stock:35},
    {productId:23, name:"Stella Negra lata 473cc", urlImg:"stellaLataGrandeNegra.jpg", brand:arregloMarcas[6], description:"Aquí habrá una descripción", unitPrice:170, stock:40},
    {productId:20, name:"Stella Rubia botella 330cc", urlImg:"stellaBotellaChicaRubia.jpg", brand:arregloMarcas[6], description:"Aquí habrá una descripción", unitPrice:170, stock:0},
    {productId:21, name:"Stella Rubia botella 975cc", urlImg:"stellaBotellaGrandeRubia.jpg", brand:arregloMarcas[6], description:"Aquí habrá una descripción", unitPrice:170, stock:30},
    {productId:22, name:"Stella Negra botella 330cc", urlImg:"stellaBotellaChicaNegra.jpg", brand:arregloMarcas[6], description:"Aquí habrá una descripción", unitPrice:170, stock:35},
    {productId:23, name:"Stella Negra botella 975cc", urlImg:"stellaBotellaGrandeNegra.jpg", brand:arregloMarcas[6], description:"Aquí habrá una descripción", unitPrice:170, stock:40},
    {productId:24, name:"Temple Cósmica lata 473cc", urlImg:"templeLataCosmica.jpg", brand:arregloMarcas[7], description:"Aquí habrá una descripción", unitPrice:170, stock:10},
    {productId:26, name:"Temple Honey lata 473cc", urlImg:"templeLataHoney.jpg", brand:arregloMarcas[7], description:"Aquí habrá una descripción", unitPrice:170, stock:30},
    {productId:27, name:"Temple Wolf IPA lata 473cc", urlImg:"templeLataIpa.jpg", brand:arregloMarcas[7], description:"Aquí habrá una descripción", unitPrice:170, stock:0},
    {productId:28, name:"Temple Scottish lata 473cc", urlImg:"templeLataScottish.jpg", brand:arregloMarcas[7], description:"Aquí habrá una descripción", unitPrice:170, stock:25},
];

export const getProducts = () => {
    return arregloProductos
}

export const getProductId = (id) => {
    return arregloProductos.find(object => object.productId === Number(id));
}