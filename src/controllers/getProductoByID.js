const { Productos, Marcas } = require("../db.js");

async function getProductoById(id) {
  const producto = await Productos.findByPk(id, {
    include: Marcas
  });
  
  return producto;
}

module.exports = getProductoById;

