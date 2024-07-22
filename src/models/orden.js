import mongoose from "mongoose";

const ordenSchema = new mongoose.Schema({
  cliente: { type: mongoose.Schema.Types.ObjectId, ref: "Cliente" },
  producto: { type: mongoose.Schema.Types.ObjectId, ref: "Producto" },
  cantidad: { type: Number },
  total: { type: Number },
  estado: { type: String },
});

const Orden = mongoose.model("Orden", ordenSchema);

export default Orden;
