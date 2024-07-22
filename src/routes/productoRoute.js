const express = require("express");
const {
  actualizarProducto,
  eliminarProducto,
  listarProducto,
  registrarProducto,
} = require("../controllers/productoController.js");

const productoRoute = express.Router();

// registrar un producto
productoRoute.post("/registrar", registrarProducto);

// obtener un producto
productoRoute.get("/:id", listarProducto);

// actualizar un producto
productoRoute.put("/actualizar/:id", actualizarProducto);

// eliminar un producto
productoRoute.delete("/eliminar/:id", eliminarProducto);

module.exports = productoRoute;
