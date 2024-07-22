import mongoose from "mongoose";

const categoriaSchema = new mongoose.Schema({
  nombre: { type: String },
  descripcion: { type: String },
});

const Categoria = mongoose.model("Categoria", categoriaSchema);

export default Categoria;
