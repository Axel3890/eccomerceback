
const bcrypt = require('bcrypt');
const { User } = require("../db.js");

async function registrarUsuario(req, res) {
  const { email, password  } = req.body
  const hashedPassword = await bcrypt.hash(password, 10);
  const usuario = await User.create({ email, password: hashedPassword });
  return usuario;
}

module.exports = registrarUsuario;
