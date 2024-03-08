const {
  postProductosHandler,
  getProductosHandler,
  getProductoByIdHandler,
  deleteProductoHandler,
  updateProductoHandler,
} = require("../handlers/index.js");
const { Router } = require("express");

const router = Router();

router.get("/productos", getProductosHandler);
router.post("/productos", postProductosHandler);
router.get("/productos/:id", getProductoByIdHandler);
router.delete("/productos/:id", deleteProductoHandler);
router.put("/productos/:id", updateProductoHandler);
module.exports = router;
