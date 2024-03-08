const { Productos } = require("../db.js")

async function getProductoById(id) {
  console.log("soy id de controller", id)
  const producto = await Productos.findByPk(id);
  return producto;
}

module.exports = getProductoById;
