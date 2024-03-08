const getProductosHandler = require("./getProductosHandler");
const postProductosHandler = require("./postProductoHandler");
const updateProductoHandler = require("./updateProductosHandler");
const deleteProductoHandler = require("./deleteProductoHandler");
const getProductoByIdHandler = require("./getProductoByIdHandler");


module.exports = {
    getProductosHandler, postProductosHandler, updateProductoHandler, deleteProductoHandler, getProductoByIdHandler
}