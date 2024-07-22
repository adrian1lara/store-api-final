import Cliente from "../models/cliente.js";

// actualizar la informacion del cliente
export const actualizarCliente = async (req, res) => {
  try {
    const { id } = req.params;
    const { direccion, telefono } = req.body;

    if (!direccion || !telefono) {
      return res
        .status(400)
        .json({ msg: "se necesita completar todos los campos" });
    }

    await Cliente.findByIdAndUpdate(id, {
      direccion: direccion,
      telefono: telefono,
    });

    return res.status(201).json({ msg: "cliente exitosamente actualizado" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "error en el servidor, clientes" });
  }
};

// eliminar cliente por id
export const eliminarCliente = async (req, res) => {
  try {
    const { id } = req.params;

    const cliente = await Cliente.findById(id);

    if (!cliente) {
      return res.status(404).json({ msg: "cliente no encotrado" });
    }

    await Cliente.findByIdAndDelete(id);

    return res.status(201).json({ msg: "cliente eliminado especificamente" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "error del servidor, clientes" });
  }
};

// listar cliente por su id
export const listarCliente = async (req, res) => {
  try {
    const { id } = req.params;

    const cliente = await Cliente.findById(id);

    if (!cliente) {
      return res.status(404).json({ msg: "cliente no existe" });
    }

    return res.status(201).json({ cliente });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "error del servidor, clientes" });
  }
};

// listar todos los clientes
export const listarClientes = async (req, res) => {
  try {
    const clientes = await Cliente.find();

    return res.status(201).json(clientes);
  } catch (error) {
    return res.status(500).json({ msg: "error del servidor, clientes" });
  }
};

// registar un cliente nuevo
export const registrarCliente = async (req, res) => {
  try {
    const { nombre, direccion, correo, telefono } = req.body;

    if (!nombre || !direccion || !correo || !telefono) {
      return res
        .status(400)
        .json({ msg: "todos los campos deben ser completados" });
    }

    const clienteExiste = await Cliente.findOne({
      correo: { $regex: correo, $options: "i" },
    });

    if (clienteExiste) {
      return res
        .status(409)
        .json({ msg: "este correo ya esta asociado a un cliente" });
    }

    const cliente = new Cliente({
      nombre: nombre,
      direccion: direccion,
      correo: correo,
      telefono: telefono,
    });

    await cliente.save();

    return res
      .status(201)
      .json({ cliente, msg: "cliente creado exitosamente" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "error del servidor, clientes" });
  }
};
