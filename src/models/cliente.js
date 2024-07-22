const mongoose = require("mongoose");

const clienteSchema = new mongoose.Schema({
  nombre: { type: String },
  direccion: { type: String },
  correo: { type: String },
  telefono: { type: String },
});

const Cliente = mongoose.model("Cliente", clienteSchema);

module.exports = Cliente;
