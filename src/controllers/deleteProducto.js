const { Productos } = require("../db.js")

async function deleteProucto(id) {
    const producto = await Productos.findByPk(id);
    
    if (!producto) {
      throw new Error('El producto no fue encontrado');
    }
  
    await producto.destroy();
  }

  module.exports = deleteProucto;