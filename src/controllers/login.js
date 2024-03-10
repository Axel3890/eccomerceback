const bcrypt = require('bcrypt');
const { User } = require("../db.js");

async function login(req, res) {
  const { email, password } = req.body;

  try {

    const usuario = await User.findOne({ where: { email } });

    if (!usuario) {
      return res.status(401).json({ error: 'Correo electrónico o contraseña incorrectos' });
    }


    const passwordMatch = await bcrypt.compare(password, usuario.password);

    if (passwordMatch) {

      return res.status(200).json({ message: 'Inicio de sesión exitoso', usuario });
    } else {

      return res.status(401).json({ error: 'Correo electrónico o contraseña incorrectos' });
    }
  } catch (error) {
    console.error('Error al intentar iniciar sesión:', error);
    return res.status(500).json({ error: 'Ocurrió un error al intentar iniciar sesión' });
  }
}

module.exports = login;
