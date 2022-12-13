let gorras = [
    {
        nombre: 'Xeneizes',
        foto1: 'https://cdn.shopify.com/s/files/1/0015/5841/3357/products/GORRAS-ARGENTINA-ANCLA-2_550x.jpg?v=1639828727',
        foto2: 'https://cdn.shopify.com/s/files/1/0015/5841/3357/products/CAP-ANCLA-2_550x.jpg?v=1640077063',
        descripcion: 'Visor curvo. Bordado de calidad. Talla ajustable',
        stock: 33,
        precio: 4500,
    },
    {
        nombre: 'El Rojo',
        foto1: 'https://cdn.shopify.com/s/files/1/0015/5841/3357/products/GORRAS-ARGENTINA-DIABLO-RED-2_550x.jpg?v=1639828931',
        foto2: 'https://cdn.shopify.com/s/files/1/0015/5841/3357/products/CAP-DIABLO_550x.jpg?v=1640077358',
        descripcion: 'Visor curvo. Bordado de calidad. Talla ajustable',
        stock: 35,
        precio: 3900,
    },
    {
        nombre: 'El Ciclón',
        foto1: 'https://cdn.shopify.com/s/files/1/0015/5841/3357/products/GORRAS-ARGENTINA-CUERVO-2_550x.jpg?v=1639828764',
        foto2: 'https://cdn.shopify.com/s/files/1/0015/5841/3357/products/CAP-CUERVO_550x.jpg?v=1640077076',
        descripcion: 'Visor curvo. Bordado de calidad. Talla ajustable',
        stock: 46,
        precio: 3900,
    },
    {
        nombre: "La 'T'",
        foto1: 'https://cdn.shopify.com/s/files/1/0015/5841/3357/products/GORRAS-ARGENTINA-MATADOR-2_550x.jpg?v=1639828868',
        foto2: 'https://cdn.shopify.com/s/files/1/0015/5841/3357/products/CAP-MATADOR_550x.jpg?v=1640077382',
        descripcion: 'Visor curvo. Bordado de calidad. Talla ajustable',
        stock: 34,
        precio: 3900,
    },
    {
        nombre: "Millonario",
        foto1: 'https://cdn.shopify.com/s/files/1/0015/5841/3357/products/GORRAS-ARGENTINA-GALLINA-WHITE-2_550x.jpg?v=1640120200',
        foto2: 'https://cdn.shopify.com/s/files/1/0015/5841/3357/products/HOODIE-MODEL-GALLINA-BLANCO-WHITE_550x.jpg?v=1650274420',
        descripcion: 'Visor curvo. Bordado de calidad. Talla ajustable',
        stock: 28,
        precio: 4500,
    },
    {
        nombre: "El rojo (negro)",
        foto1: 'https://cdn.shopify.com/s/files/1/0015/5841/3357/products/GORRAS-ARGENTINA-DIABLO-BLACK-2_550x.jpg?v=1639828903',
        foto2: 'https://cdn.shopify.com/s/files/1/0015/5841/3357/products/GORRAS-ARGENTINA-DIABLO-BLACK-1_550x.jpg?v=1639828902',
        descripcion: 'Visor curvo. Bordado de calidad. Talla ajustable',
        stock: 28,
        precio: 4300,
    },
    {
        nombre: "Academia",
        foto1: 'https://cdn.shopify.com/s/files/1/0015/5841/3357/products/GORRAS-ARGENTINA-ACADE-2_550x.jpg?v=1639828983',
        foto2: 'https://cdn.shopify.com/s/files/1/0015/5841/3357/products/GORRAS-ARGENTINA-ACADE-1_550x.jpg?v=1639828982',
        descripcion: 'Visor curvo. Bordado de calidad. Talla ajustable',
        stock: 49,
        precio: 3900,
    },
    {
        nombre: "Canalla",
        foto1: 'https://cdn.shopify.com/s/files/1/0015/5841/3357/products/GORRAS-ARGENTINA-CANALLA-2_550x.jpg?v=1639828752',
        foto2: 'https://cdn.shopify.com/s/files/1/0015/5841/3357/products/GORRAS-ARGENTINA-CANALLA-1_550x.jpg?v=1639828751',
        descripcion: 'Visor curvo. Bordado de calidad. Talla ajustable',
        stock: 43,
        precio: 3900,
    },
    {
        nombre: "Leproso",
        foto1: 'https://cdn.shopify.com/s/files/1/0015/5841/3357/products/GORRAS-ARGENTINA-LEPRA-2_550x.jpg?v=1639829285',
        foto2: 'https://cdn.shopify.com/s/files/1/0015/5841/3357/products/GORRAS-ARGENTINA-LEPRA-1_550x.jpg?v=1639829284',
        descripcion: 'Visor curvo. Bordado de calidad. Talla ajustable',
        stock: 11,
        precio: 3900,
    },
    {
        nombre: "Pandilla",
        foto1: 'https://cdn.shopify.com/s/files/1/0015/5841/3357/products/GORRAS-ARGENTINA-FORTIN-2_550x.jpg?v=1639828779',
        foto2: 'https://cdn.shopify.com/s/files/1/0015/5841/3357/products/GORRAS-ARGENTINA-FORTIN-1_550x.jpg?v=1639828777',
        descripcion: 'Visor curvo. Bordado de calidad. Talla ajustable',
        stock: 2,
        precio: 3900,
    },
]

require('dotenv').config()
require('../../config/database')

const Gorra = require('../gorra')

gorras.forEach(item => {
    Gorra.create({
        nombre: item.nombre,
        foto1: item.foto1,
        foto2: item.foto2,
        descripcion: item.descripcion,
        stock: item.stock,
        precio: item.precio,
    })
})