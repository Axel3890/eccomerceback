const { Productos } = require("../db.js")


async function postProducto(nombre, descripcion, imageUrl, precio) {
  const nuevoProducto = await Productos.create({
    name: nombre,
    description: descripcion,
    imageUrl: imageUrl,
    price: precio
  });
  return nuevoProducto;
}


module.exports = postProducto;