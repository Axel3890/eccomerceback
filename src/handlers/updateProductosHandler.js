const updateProducto = require("../controllers/updateProductos")

async function updateProductoHandler(req, res) {
  const { id } = req.params;
  const { nombre, descripcion, imagenUrl, precio , marcaId } = req.body;

  try {
    const nuevoDatosProducto = {
      name: nombre,
      description: descripcion,
      imagenUrl: imagenUrl,
      price: precio,
      MarcaId: marcaId
    };
    console.log(nuevoDatosProducto)

    const productoActualizado = await updateProducto(id, nuevoDatosProducto);
    res.status(200).json(productoActualizado);
  } catch (error) {
    console.error('Error al intentar actualizar el producto:', error);
    res.status(500).json({ error: 'Ocurrió un error al actualizar el producto' });
  }
}

module.exports = updateProductoHandler;