import mongoose from "mongoose";

const productoSchema = new mongoose.Schema({
  nombre: { type: String },
  descripcion: { type: String },
  precio: { type: Number },
  stock: { type: Number },
  categoria: { type: mongoose.Schema.Types.ObjectId, ref: "Categoria" },
});

const Producto = mongoose.model("Producto", productoSchema);

export default Producto;
