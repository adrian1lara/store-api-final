const mongoose = require("mongoose");

const categoriaSchema = new mongoose.Schema({
  nombre: { type: String },
  descripcion: { type: String },
});

const Categoria = mongoose.model("Categoria", categoriaSchema);

module.exports = Categoria;
