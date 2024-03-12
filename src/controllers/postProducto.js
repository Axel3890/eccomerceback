const { Productos, Marcas } = require("../db.js");

async function postProducto(nombre, descripcion, imagenUrl, precio, marcaId) {
  const marcaExistente = await Marcas.findByPk(marcaId);
  if (!marcaExistente) {
    throw new Error('La marca proporcionada no existe');
  }

  const nuevoProducto = await Productos.create({
    name: nombre,
    description: descripcion,
    imagenUrl: imagenUrl,
    price: precio,
    marcaId: marcaId
  });

  return nuevoProducto;
}

module.exports = postProducto;