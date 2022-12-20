let productos = [
    // // REMERAS DE MUJER
    // EL CICLÓN (San Lorenzo)
    {
        tipo: 'RemeraF',
        nombre: 'El Ciclón',
        foto1: 'https://cdn.shopify.com/s/files/1/0015/5841/3357/products/PERCHAS-ARGENTINA-WOMEN-CUERVO_550x.png?v=1627407396',
        foto2: 'https://cdn.shopify.com/s/files/1/0015/5841/3357/products/CUERVO-WOMEN-MODEL-1_550x.jpg?v=1627407396',
        talle: ['S', 'M', 'L', 'XL'],
        descripcion: 'Puro y exclusivo producto de moda. Calidad premium fabricado en Perú. 100% algodón de alta calidad como del bordado. Corte slim fit.',
        stock: [11, 23, 5, 17],
        precio: 7100,
    },
    // ACADEMIA (Racing Club)
    {
        tipo: 'RemeraF',
        nombre: 'Academia',
        foto1: 'https://cdn.shopify.com/s/files/1/0015/5841/3357/products/PERCHAS-ARGENTINA-WOMEN-ACADE_550x.png?v=1627407421',
        foto2: 'https://cdn.shopify.com/s/files/1/0015/5841/3357/products/ACADE-WOMEN-1_550x.jpg?v=1627407421',
        talle: ['S', 'M', 'L', 'XL'],
        descripcion: 'Puro y exclusivo producto de moda. Calidad premium fabricado en Perú. 100% algodón de alta calidad como del bordado. Corte slim fit.',
        stock: [11, 23, 5, 17],
        precio: 7100,
    },
    // XENEIZE (Boca Juniors)
    {
        tipo: 'RemeraF',
        nombre: 'Xeneize',
        foto1: 'https://cdn.shopify.com/s/files/1/0015/5841/3357/products/PERCHAS-ARGENTINA-WOMEN-ANCLA_550x.png?v=1627407389',
        foto2: 'https://cdn.shopify.com/s/files/1/0015/5841/3357/products/ANCLA-WOMEN-MODEL-1_550x.jpg?v=1627407389',
        talle: ['S', 'M', 'L', 'XL'],
        descripcion: 'Puro y exclusivo producto de moda. Calidad premium fabricado en Perú. 100% algodón de alta calidad como del bordado. Corte slim fit.',
        stock: [11, 23, 5, 17],
        precio: 8300,
    },
    // MILLONARIO (River Plate)
    {
        tipo: 'RemeraF',
        nombre: 'Millonario',
        foto1: 'https://cdn.shopify.com/s/files/1/0015/5841/3357/products/PERCHAS-ARGENTINA-WOMEN-GALLINA_550x.png?v=1627407429',
        foto2: 'https://cdn.shopify.com/s/files/1/0015/5841/3357/products/GALLINA-WOMEN-MODEL-1_550x.jpg?v=1627407429',
        talle: ['S', 'M', 'L', 'XL'],
        descripcion: 'Puro y exclusivo producto de moda. Calidad premium fabricado en Perú. 100% algodón de alta calidad como del bordado. Corte slim fit.',
        stock: [25, 4, 11, 17],
        precio: 8300,
    },
    // SCALONETA (Argentina)
    {
        tipo: 'RemeraF',
        nombre: 'Scaloneta',
        foto1: 'https://cdn.shopify.com/s/files/1/0015/5841/3357/products/PERCHAS-ARGENTINA-WOMEN-SOL_550x.png?v=1627407437',
        foto2: 'https://cdn.shopify.com/s/files/1/0015/5841/3357/products/WOMEN-SQUARE-SOL_550x.png?v=1606990456',
        talle: ['S', 'M', 'L', 'XL'],
        descripcion: 'Puro y exclusivo producto de moda. Calidad premium fabricado en Perú. 100% algodón de alta calidad como del bordado. Corte slim fit.',
        stock: [4, 3, 21, 19],
        precio: 7100,
    },
    // SCALONETA negro (Argentina)
    {
        tipo: 'RemeraF',
        nombre: 'Scaloneta (negro)',
        foto1: 'https://cdn.shopify.com/s/files/1/0015/5841/3357/products/e39eff45-7b3c-413c-92fc-3df9e5948c7e_550x.jpg?v=1627415726',
        foto2: 'https://cdn.shopify.com/s/files/1/0015/5841/3357/products/SOL-NEGRO-WOMEN-MODEL-1_550x.jpg?v=1627415726',
        talle: ['S', 'M', 'L', 'XL'],
        descripcion: 'Puro y exclusivo producto de moda. Calidad premium fabricado en Perú. 100% algodón de alta calidad como del bordado. Corte slim fit.',
        stock: [4, 3, 7, 39],
        precio: 7100,
    },
    // EL ROJO (Independiente)
    {
        tipo: 'RemeraF',
        nombre: 'El rojo',
        foto1: 'https://cdn.shopify.com/s/files/1/0015/5841/3357/products/PERCHAS-ARGENTINA-WOMEN-DIABLO_550x.jpg?v=1627407406',
        foto2: 'https://cdn.shopify.com/s/files/1/0015/5841/3357/products/CLOSEUP-DIABLO_d9fd9cad-ec44-4574-a3b1-8a60c1099a5c_550x.png?v=1608828828',
        talle: ['S', 'M', 'L', 'XL'],
        descripcion: 'Puro y exclusivo producto de moda. Calidad premium fabricado en Perú. 100% algodón de alta calidad como del bordado. Corte slim fit.',
        stock: [28, 22, 3, 5],
        precio: 7100,
    },
    // // REMERAS DE HOMBRE
    // XENEIZE (Boca)
    {
        tipo: 'RemeraM',
        nombre: 'Xeneize',
        foto1: 'https://cdn.shopify.com/s/files/1/0015/5841/3357/products/CLOSEUP-ANCLA-1_550x.png?v=1572703475',
        foto2: 'https://cdn.shopify.com/s/files/1/0015/5841/3357/products/ANCLA-SQUARE_550x.png?v=1572950486',
        talle: ['S', 'M', 'L', 'XL'],
        descripcion: 'Puro y exclusivo producto de moda. Calidad premium fabricado en Perú. 100% algodón de alta calidad como del bordado. Corte slim fit.',
        stock: [3, 5, 6, 1],
        precio: 9500,
    },
    // MILLONARIO (River)
    {
        tipo: 'RemeraM',
        nombre: 'Millonario',
        foto1: 'https://cdn.shopify.com/s/files/1/0015/5841/3357/products/CLOSEUP-GALLINA-1_550x.png?v=1572947797',
        foto2: 'https://cdn.shopify.com/s/files/1/0015/5841/3357/products/Blueaventurina_550x.jpg?v=1596464726',
        talle: ['S', 'M', 'L', 'XL'],
        descripcion: 'Cool packaging. Calidad premium fabricado en Brasil. 100% algodón de alta calidad como del bordado. Corte slim fit.',
        stock: [2, 4, 4, 15],
        precio: 9500,
    },
    // EL CICLÓN (San Lorenzo)
    {
        tipo: 'RemeraM',
        nombre: 'El Ciclón',
        foto1: 'https://cdn.shopify.com/s/files/1/0015/5841/3357/products/CLOSEUP-CUERVO_550x.png?v=1560877618',
        foto2: 'https://cdn.shopify.com/s/files/1/0015/5841/3357/products/CAJAS-CUERVO_550x.png?v=1560877618',
        talle: ['S', 'M', 'L', 'XL'],
        descripcion: 'Calidad premium fabricado en Perú. Lavado a máquina. 100% algodón de alta calidad como del bordado. Corte slim fit.',
        stock: [6, 3, 5, 5],
        precio: 8300,
    },
    // EL ROJO (Independiente)
    {
        tipo: 'RemeraM',
        nombre: 'El Rojo',
        foto1: 'https://cdn.shopify.com/s/files/1/0015/5841/3357/products/CLOSEUP-DIABLO_550x.png?v=1557007224',
        foto2: 'https://cdn.shopify.com/s/files/1/0015/5841/3357/products/DIABLO-2SMALL_550x.png?v=1560032830',
        talle: ['S', 'M', 'L', 'XL'],
        descripcion: 'Calidad premium fabricado en Perú. Lavado a máquina. 100% algodón de alta calidad como del bordado. Corte slim fit.',
        stock: [1, 4, 11, 7],
        precio: 8300,
    },
    // ACADEMIA (Racing)
    {
        tipo: 'RemeraM',
        nombre: 'Academia',
        foto1: 'https://cdn.shopify.com/s/files/1/0015/5841/3357/products/CLOSEUP-ACADE_550x.png?v=1557007526',
        foto2: 'https://cdn.shopify.com/s/files/1/0015/5841/3357/products/ACADE_550x.png?v=1560032975',
        talle: ['S', 'M', 'L', 'XL'],
        descripcion: 'Calidad premium fabricado en Perú. Lavado a máquina. 100% algodón de alta calidad como del bordado. Corte slim fit.',
        stock: [3, 4, 8, 5],
        precio: 8300,
    },
    // PINCHARRATA (Estudiantes)
    {
        tipo: 'RemeraM',
        nombre: 'Pincharrata',
        foto1: 'https://cdn.shopify.com/s/files/1/0015/5841/3357/products/CLOSEUP-LEON-1_550x.png?v=1572908133',
        foto2: 'https://cdn.shopify.com/s/files/1/0015/5841/3357/products/MODEL-ELLEON_550x.png?v=1610876303',
        talle: ['S', 'M', 'L', 'XL'],
        descripcion: 'Calidad premium fabricado en Perú. Lavado a máquina. 100% algodón de alta calidad como del bordado. Corte slim fit.',
        stock: [2, 3, 7, 5],
        precio: 8300,
    },
    // LA 'T' (Talleres CBA)
    {
        tipo: 'RemeraM',
        nombre: "La 'T'",
        foto1: 'https://cdn.shopify.com/s/files/1/0015/5841/3357/products/CLOSEUP-MATADOR-1_550x.png?v=1572908187',
        foto2: 'https://cdn.shopify.com/s/files/1/0015/5841/3357/products/MODEL-MATADOR_2000x.png?v=1581328056',
        talle: ['S', 'M', 'L', 'XL'],
        descripcion: 'Calidad premium fabricado en Perú. Lavado a máquina. 100% algodón de alta calidad como del bordado. Corte slim fit.',
        stock: [6, 5, 5, 5],
        precio: 8300,
    },
    //PANDILLA (Velez)
    {
        tipo: 'RemeraM',
        nombre: "Pandilla",
        foto1: 'https://cdn.shopify.com/s/files/1/0015/5841/3357/products/CLOSEUP-FORTIN-1_550x.png?v=1572908077',
        foto2: 'https://cdn.shopify.com/s/files/1/0015/5841/3357/products/Leitomarafioti_550x.jpg?v=1610876412',
        talle: ['S', 'M', 'L', 'XL'],
        descripcion: 'Calidad premium fabricado en Perú. Lavado a máquina. 100% algodón de alta calidad como del bordado. Corte slim fit.',
        stock: [6, 13, 7, 4],
        precio: 8300,
    },
    // SEMILLERO (Argentinos Juniors)
    {
        tipo: 'RemeraM',
        nombre: "Semillero",
        foto1: 'https://cdn.shopify.com/s/files/1/0015/5841/3357/products/BICHO-1_550x.jpg?v=1606835817',
        foto2: 'https://cdn.shopify.com/s/files/1/0015/5841/3357/products/MODEL-ARGENTINA-BICHO_550x.jpg?v=1605916459',
        talle: ['S', 'M', 'L', 'XL'],
        descripcion: 'Calidad premium fabricado en Perú. Lavado a máquina. 100% algodón de alta calidad como del bordado. Corte slim fit.',
        stock: [15, 9, 6, 12],
        precio: 8300,
    },
    //EL LOBO (Gimnasia de La Plata)
    {
        tipo: 'RemeraM',
        nombre: "El Lobo",
        foto1: 'https://cdn.shopify.com/s/files/1/0015/5841/3357/products/CLOSEUP-LOBO-1_550x.png?v=1606836107',
        foto2: 'https://cdn.shopify.com/s/files/1/0015/5841/3357/products/LOBO-MODEL-1_550x.jpg?v=1610876341',
        talle: ['S', 'M', 'L', 'XL'],
        descripcion: 'Calidad premium fabricado en Perú. Lavado a máquina. 100% algodón de alta calidad como del bordado. Corte slim fit.',
        stock: [2, 6, 5, 6],
        precio: 8300,
    },
    // LEPROSO (Newell's Old Boys)
    {
        tipo: 'RemeraM',
        nombre: "Leproso",
        foto1: 'https://cdn.shopify.com/s/files/1/0015/5841/3357/products/CLOSEUP-LEPRA-1_550x.png?v=1572706422',
        foto2: 'https://cdn.shopify.com/s/files/1/0015/5841/3357/products/pachi_nob_87_550x.png?v=1610876590',
        talle: ['S', 'M', 'L', 'XL'],
        descripcion: 'Calidad premium fabricado en Perú. Lavado a máquina. 100% algodón de alta calidad como del bordado. Corte slim fit.',
        stock: [6, 2, 1, 4],
        precio: 8300,
    },
    // CANALLA (Rosario Central)
    {
        tipo: 'RemeraM',
        nombre: "Canalla",
        foto1: 'https://cdn.shopify.com/s/files/1/0015/5841/3357/products/CLOSEUP-CANALLA-1_550x.png?v=1572948491',
        foto2: 'https://cdn.shopify.com/s/files/1/0015/5841/3357/products/MODELS-ARGENTINA-CANALLA-1_550x.png?',
        talle: ['S', 'M', 'L', 'XL'],
        descripcion: 'Calidad premium fabricado en Perú. Lavado a máquina. 100% algodón de alta calidad como del bordado. Corte slim fit.',
        stock: [18, 17, 6, 11],
        precio: 8300,
    },
    // TATENGUE (Union de Santa Fe)
    {
        tipo: 'RemeraM',
        nombre: "Tatengue",
        foto1: 'https://cdn.shopify.com/s/files/1/0015/5841/3357/products/CLOSEUP-TATENGUE-1_550x.png?v=1572706395',
        foto2: 'https://cdn.shopify.com/s/files/1/0015/5841/3357/products/Xavi.espindola_550x.jpg?v=1596465050',
        talle: ['S', 'M', 'L', 'XL'],
        descripcion: 'Calidad premium fabricado en Perú. Lavado a máquina. 100% algodón de alta calidad como del bordado. Corte slim fit.',
        stock: [15, 15, 8, 20],
        precio: 8300,
    },
    // PIRATA (Belgrano de Cordoba)
    {
        tipo: 'RemeraM',
        nombre: "Pirata",
        foto1: 'https://cdn.shopify.com/s/files/1/0015/5841/3357/products/CLOSEUP-PIRATA-1_550x.png?v=1572706357',
        foto2: 'https://cdn.shopify.com/s/files/1/0015/5841/3357/products/PIRATA_550x.png?v=1581333725',
        talle: ['S', 'M', 'L', 'XL'],
        descripcion: 'Calidad premium fabricado en Perú. Lavado a máquina. 100% algodón de alta calidad como del bordado. Corte slim fit.',
        stock: [7, 13, 8, 3],
        precio: 8300,
    },
    // // BUZOS UNISEX
    // SCALONETA NEGRO (Argentina)
    {
        tipo: 'Buzo',
        nombre: 'Scaloneta Negro',
        foto1: 'https://cdn.shopify.com/s/files/1/0015/5841/3357/products/HOODIES-SOL-NEGRO-1_550x.png?v=1566724113',
        foto2: 'https://cdn.shopify.com/s/files/1/0015/5841/3357/products/MODEL-HOODIE-SOL_2d929f0a-7169-4877-ac13-8737dbcdf635_550x.png?v=1566724113',
        talle: ['S', 'M', 'L', 'XL'],
        descripcion: 'Modelos unisex. Con capucha y manga larga. 100% algodón Pima de Perú. Lavado a máquina',
        stock: [29, 13, 7, 15],
        precio: 12400,
    },
    // XENEIZE (Boca Juniors)
    {
        tipo: 'Buzo',
        nombre: 'Xeneize',
        foto1: 'https://cdn.shopify.com/s/files/1/0015/5841/3357/products/HOODIES-ANCLA-1_550x.png?v=1565989141',
        foto2: 'https://cdn.shopify.com/s/files/1/0015/5841/3357/products/HOODIE-LIO-ANCLA_63782d68-3f69-4720-8c94-ace7f69ebac4_550x.png?v=1565989141',
        talle: ['S', 'M', 'L', 'XL'],
        descripcion: 'Modelos unisex. Con capucha y manga larga. 100% algodón Pima de Perú. Lavado a máquina',
        stock: [4, 9, 18, 8],
        precio: 12000,
    },
    // EL CICLÓN (San Lorenzo)
    {
        tipo: 'Buzo',
        nombre: 'El Ciclón',
        foto1: 'https://cdn.shopify.com/s/files/1/0015/5841/3357/products/HOODIES-CUERVO-1_550x.png?v=1565989246',
        foto2: 'https://cdn.shopify.com/s/files/1/0015/5841/3357/products/MODEL-HOODIE-CUERVO_550x.png?v=1565989246',
        talle: ['S', 'M', 'L', 'XL'],
        descripcion: 'Modelos unisex. Con capucha y manga larga. 100% algodón Pima de Perú. Lavado a máquina',
        stock: [17, 5, 3, 14],
        precio: 11000,
    },
    // EL ROJO (Independiente)
    {
        tipo: 'Buzo',
        nombre: 'El Rojo',
        foto1: 'https://cdn.shopify.com/s/files/1/0015/5841/3357/products/HOODIES-DIABLO-1_550x.png?v=1570623599',
        foto2: 'https://cdn.shopify.com/s/files/1/0015/5841/3357/products/MODELO-ARGENTINA-DIABLO_2_550x.png?v=1570623599',
        talle: ['S', 'M', 'L', 'XL'],
        descripcion: 'Modelos unisex. Con capucha y manga larga. 100% algodón Pima de Perú. Lavado a máquina',
        stock: [1, 15, 21, 6],
        precio: 11000,
    },
    // MILLONARIO (River)
    {
        tipo: 'Buzo',
        nombre: 'Millonario',
        foto1: 'https://cdn.shopify.com/s/files/1/0015/5841/3357/products/HOODIES-GALLINA_550x.png?v=1595075772',
        foto2: 'https://cdn.shopify.com/s/files/1/0015/5841/3357/products/MODEL-HOODIE-GALLINA_550x.png?v=1595075777',
        talle: ['S', 'M', 'L', 'XL'],
        descripcion: 'Modelos unisex. Con capucha y manga larga. 100% algodón Pima de Perú. Lavado a máquina',
        stock: [11, 1, 5, 9],
        precio: 12000,
    },
    // ACADEMIA (Racing Club)
    {
        tipo: 'Buzo',
        nombre: 'Academia',
        foto1: 'https://cdn.shopify.com/s/files/1/0015/5841/3357/products/HOODIES-ACADE_550x.png?v=1597271500',
        foto2: 'https://cdn.shopify.com/s/files/1/0015/5841/3357/products/HOODIE-ACADE-MODEL-1_550x.jpg?v=1606836240',
        talle: ['S', 'M', 'L', 'XL'],
        descripcion: 'Modelos unisex. Con capucha y manga larga. 100% algodón Pima de Perú. Lavado a máquina',
        stock: [14, 6, 27, 20],
        precio: 12000,
    },
    // FUNEBRERO (Chacarita)
    {
        tipo: 'Buzo',
        nombre: 'Funebrero',
        foto1: 'https://cdn.shopify.com/s/files/1/0015/5841/3357/products/HOODIES-FUNEBRERO_550x.png?v=1619718376',
        foto2: 'https://cdn.shopify.com/s/files/1/0015/5841/3357/products/MODEL-HOODIE-FUNEBRERO_550x.png?v=1619773800',
        talle: ['S', 'M', 'L', 'XL'],
        descripcion: 'Modelos unisex. Con capucha y manga larga. 100% algodón Pima de Perú. Lavado a máquina',
        stock: [7, 7, 7, 7],
        precio: 11000,
    },
]

require('dotenv').config()
require('../../config/database')

const Producto = require('../Producto')

productos.forEach(item => {
    Producto.create({
        tipo: item.tipo,
        nombre: item.nombre,
        foto1: item.foto1,
        foto2: item.foto2,
        talle: item.talle,
        descripcion: item.descripcion,
        stock: item.stock,
        precio: item.precio,
    })
})