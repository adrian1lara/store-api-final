import express from "express";
import {
  actualizarEstadoOrden,
  eliminarOrden,
  listarOrden,
  registrarOrden,
} from "../controllers/ordenController.js";

const ordenRoute = express.Router();

// registrar una orden
ordenRoute.post("/registrar", registrarOrden);

// obtener una orden
ordenRoute.get("/:id", listarOrden);

// actualizar el estado de una orden
ordenRoute.put("/actualizar/:id", actualizarEstadoOrden);

// eliminar una orden
ordenRoute.delete("/eliminar/:id", eliminarOrden);

export default ordenRoute;
