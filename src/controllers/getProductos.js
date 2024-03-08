const { Productos } = require("../db.js")


async function getProductos(req, res) {
    const productos = Productos.findAll();
    return productos;
}


module.exports = getProductos;