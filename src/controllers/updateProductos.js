const { Productos } = require("../db.js")


async function updateProducto(id, nuevoDatosProducto) {
  const producto = await Productos.findByPk(id);
  
  if (!producto) {
    throw new Error('El producto no fue encontrado');
  }

  await producto.update(nuevoDatosProducto);
  
  return producto;
}


module.exports = updateProducto;