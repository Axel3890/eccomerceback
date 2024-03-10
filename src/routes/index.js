const registrarUsuario = require("../controllers/createUser.js");
const login = require("../controllers/login.js");
const {
  postProductosHandler,
  getProductosHandler,
  getProductoByIdHandler,
  deleteProductoHandler,
  updateProductoHandler,
} = require("../handlers/index.js");
const { Router } = require("express");
const registroHandler = require("../handlers/registroHandler.js");

const router = Router();

router.get("/productos", getProductosHandler);
router.post("/productos", postProductosHandler);
router.get("/productos/:id", getProductoByIdHandler);
router.delete("/productos/:id", deleteProductoHandler);
router.put("/productos/:id", updateProductoHandler);
router.get("/login", login)
router.post("/createUser", registroHandler)
module.exports = router;
