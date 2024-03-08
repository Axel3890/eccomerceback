const postProducto = require("../controllers/postProducto.js")


async function postProductoHandler(req, res) {
  const { nombre, descripcion, imageUrl, precio } = req.body;

  try {
    const nuevoProducto = await postProducto(nombre, descripcion, imageUrl, precio);
    res.status(201).json(nuevoProducto);
  } catch (error) {
    console.error('Error al intentar crear el producto:', error);
    res.status(500).json({ error: 'Ocurrió un error al crear el producto' });
  }
}

module.exports = postProductoHandler;
