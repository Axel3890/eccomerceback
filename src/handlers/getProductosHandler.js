const getProductos = require("../controllers/getProductos.js")


async function getProductosHandler(req, res) {
    try {
        const productos = await getProductos();
        res.status(200).json(productos)
    } catch (error) {
        console.error("Error al intentar obtener los Productos");
    }

}

module.exports = getProductosHandler;