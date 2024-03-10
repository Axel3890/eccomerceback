
const bcrypt = require('bcrypt');
const { User } = require("../db.js");

async function registroHandler(req, res) {
    const { email, password } = req.body;
    try {

      const usuarioExistente = await User.findOne({ where: { email } });
      if (usuarioExistente) {
        return res.status(400).json({ error: 'El correo electrónico ya está en uso' });
      }
      

      const hashedPassword = await bcrypt.hash(password, 10);
      const nuevoUsuario = await User.create({ email, password: hashedPassword });
      
      res.status(201).json({ message: 'Usuario registrado exitosamente', usuario: nuevoUsuario });
    } catch (error) {
      console.error('Error al intentar registrar usuario:', error);
      res.status(500).json({ error: 'Ocurrió un error al intentar registrar usuario' });
    }
  }
  
  module.exports = registroHandler;