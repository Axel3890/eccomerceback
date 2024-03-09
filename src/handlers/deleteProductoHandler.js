const deleteProducto = require("../controllers/deleteProducto")

// Función para manejar la solicitud de eliminar un producto por su ID
async function deleteProductoHandler(req, res) {
  const { id } = req.params;
  console.log(id)
  try {
    await deleteProducto(id);
    res.status(204).send("Producto eliminado");
  } catch (error) {
    console.error('Error al intentar eliminar el producto:', error);
    res.status(500).json({ error: 'Ocurrió un error al eliminar el producto' });
  }
}

module.exports = deleteProductoHandler;