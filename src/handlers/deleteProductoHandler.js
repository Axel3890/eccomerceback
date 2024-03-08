const deleteProducto = require("../controllers/deleteProducto")

// Función para manejar la solicitud de eliminar un producto por su ID
async function deleteProductoHandler(req, res) {
  const { id } = req.params;

  try {
    await deleteProducto(id);
    res.status(204).send();
  } catch (error) {
    console.error('Error al intentar eliminar el producto:', error);
    res.status(500).json({ error: 'Ocurrió un error al eliminar el producto' });
  }
}

module.exports = deleteProductoHandler;