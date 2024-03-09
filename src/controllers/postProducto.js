const { Productos } = require("../db.js")


async function postProducto(nombre, descripcion, imagenUrl, precio) {
  console.log(imagenUrl)
  const nuevoProducto = await Productos.create({
    name: nombre,
    description: descripcion,
    imagenUrl: imagenUrl,
    price: precio
  });
  return nuevoProducto;
}


module.exports = postProducto;