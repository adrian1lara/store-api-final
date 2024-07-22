const express = require("express");
const {
  actualizarCliente,
  eliminarCliente,
  listarCliente,
  listarClientes,
  registrarCliente,
} = require("../controllers/clienteController.js");

const clienteRoute = express.Router();

// registrar un cliente
clienteRoute.post("/registrar", registrarCliente);

// actualizar cliente por id
clienteRoute.put("/actualizar/:id", actualizarCliente);

// listar todos los clientes
clienteRoute.get("/all", listarClientes);

// listar a un cliente por id
clienteRoute.get("/:id", listarCliente);

//eliminar al cliente por id
clienteRoute.delete("/eliminar/:id", eliminarCliente);

module.exports = clienteRoute;
