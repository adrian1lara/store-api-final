const express = require("express");
const {
  actualizarEstadoOrden,
  eliminarOrden,
  listarOrden,
  registrarOrden,
} = require("../controllers/ordenController.js");

const ordenRoute = express.Router();

// registrar una orden
ordenRoute.post("/registrar", registrarOrden);

// obtener una orden
ordenRoute.get("/:id", listarOrden);

// actualizar el estado de una orden
ordenRoute.put("/actualizar/:id", actualizarEstadoOrden);

// eliminar una orden
ordenRoute.delete("/eliminar/:id", eliminarOrden);

module.exports = ordenRoute;
