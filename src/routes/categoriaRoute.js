import express from "express";
import {
  actualizarCategoria,
  eliminarCategoria,
  listarCategorias,
  registrarCategoria,
} from "../controllers/categoriaController.js";

const categoriaRoute = express.Router();

// crear una nueva categoria
categoriaRoute.post("/registrar", registrarCategoria);

// obtener todas las categorias
categoriaRoute.get("/all", listarCategorias);

// actualizar una categoria id
categoriaRoute.put("/actualizar/:id", actualizarCategoria);

// eliminar una categoria por id
categoriaRoute.delete("/eliminar/:id", eliminarCategoria);

export default categoriaRoute;
