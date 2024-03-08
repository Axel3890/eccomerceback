const getProductoById = require("../controllers/getProductoByID")

async function getProductoPorIdHandler(req, res) {
  const { id } = req.params;
  console.log("soy el id", id)
  try {
    const producto = await getProductoById(id);
    if (producto) {
      res.status(200).json(producto);
    } else {
      res.status(404).json({ error: 'El producto no fue encontrado' });
    }
  } catch (error) {
    console.error('Error al intentar obtener el producto:', error);
    res.status(500).json({ error: 'Ocurrió un error al obtener el producto' });
  }
}

module.exports = getProductoPorIdHandler;
