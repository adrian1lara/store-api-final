const Cliente = require("../models/cliente.js");
const Orden = require("../models/orden.js");
const Producto = require("../models/producto.js");

// eliminar una orden
exports.eliminarOrden = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res
        .status(400)
        .json({ msg: "se debe completar el id de la orden" });
    }

    const ordenExiste = await Orden.findById(id);

    if (!ordenExiste) {
      return res.status(404).json({ msg: "no se encontro ninguna orden" });
    }

    await Orden.findByIdAndDelete(id);

    return res.status(201).json({ msg: "se elimino la orden exitosamente" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "error del servidor, orden" });
  }
};

// actualizar el estado de una orden
exports.actualizarEstadoOrden = async (req, res) => {
  const { id } = req.params;
  const { estado } = req.body;

  if (!id) {
    return res.status(400).json({ msg: "se necesita el id" });
  }

  const ordenExiste = await Orden.findById(id);

  if (!ordenExiste) {
    return res.status(404).json({ msg: "no se encontro ninguna orden" });
  }

  if (!estado) {
    return res.status(400).json({ msg: "se necesita el estado" });
  }

  await Orden.findByIdAndUpdate(id, {
    estado: estado,
  });

  return res.status(201).json({ msg: "orden exitosamente actualizada" });
};

// obtener detalle de una orden
exports.listarOrden = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ msg: "se necesita el id" });
    }

    const orden = await Orden.findById(id);

    if (!orden) {
      return res.status(404).json({ msg: "no se encontro ninguna orden" });
    }

    return res.status(201).json({ orden });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "error del servidor, orden" });
  }
};

// crear una nueva orden
exports.registrarOrden = async (req, res) => {
  try {
    const { cliente, producto, cantidad, total, estado } = req.body;
    if (!cliente || !producto || !cantidad || !total || !estado) {
      return res
        .status(400)
        .json({ msg: "se debe completar todos los campos" });
    }

    const productoExistente = await Producto.findById(producto);

    if (!productoExistente) {
      return res.status(404).json({ msg: "producto no encontrado" });
    }

    const clienteExistente = await Cliente.findById(cliente);

    if (!clienteExistente) {
      return res.status(404).json({ msg: "cliente no encontrado" });
    }

    const orden = new Orden({
      cliente: cliente,
      producto: producto,
      cantidad: cantidad,
      total: total,
      estado: estado,
    });

    await orden.save();

    return res
      .status(201)
      .json({ orden, msg: "orden exitosamente registrada" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "error del servidor, orden" });
  }
};
