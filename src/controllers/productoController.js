import Categoria from "../models/categoria.js";
import Producto from "../models/producto.js";

// crear un producto nuevo
export const registrarProducto = async (req, res) => {
  try {
    const { nombre, descripcion, precio, stock, categoria } = req.body;

    if (!nombre || !descripcion || !precio || !stock || !categoria) {
      return res
        .status(400)
        .json({ msg: "todos los campos deben ser completados" });
    }

    const categoriaExiste = await Categoria.findById(id);

    if (!categoriaExiste) {
      return res.status(404).json({ msg: "categoria inexistente" });
    }

    const producto = new Producto({
      nombre: nombre,
      descripcion: descripcion,
      precio: precio,
      stock: stock,
      categoria: categoria,
    });

    await producto.save();

    return res
      .status(201)
      .json({ producto, msg: "producto correctamente registrado" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "error de servidor, producto" });
  }
};

// obtener detalles de producto
export const listarProducto = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ msg: "se debe completar el id" });
    }

    const producto = await Producto.findById(id);

    if (!producto) {
      return res.status(404).json({ msg: "producto no enctrado" });
    }

    return res.status(201).json({ producto });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "error del servidor, producto" });
  }
};

// actualizar un producto existente
export const actualizarProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const { precio, stock } = req.body;

    if (!precio || !stock) {
      return res
        .status(404)
        .json({ msg: "se deben completar todos los campos" });
    }

    const producto = await Producto.findById(id);

    if (!producto) {
      return res.status(404).json({ msg: "producto no encontrado" });
    }

    await Producto.findOneAndUpdate(id, {
      precio: precio,
      stock: stock,
    });

    return res.status(201).json({ msg: "producto exitosamente actualizado" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "error del servidor, producto" });
  }
};

// eliminar un producto
export const eliminarProducto = async (req, res) => {
  try {
    const { id } = req.params;

    const productoExiste = await Producto.findById(id);

    if (!productoExiste) {
      return res.status(404).json({ msg: "el producto no existe" });
    }

    await Producto.findByIdAndDelete(id);

    return res.status(201).json({ msg: "prducto eliminado exitosamente" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "error del servidor, producto" });
  }
};
