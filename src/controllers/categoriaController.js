import Categoria from "../models/categoria.js";

// obtener todas las categorias
export const listarCategorias = async (req, res) => {
  try {
    const categorias = await Categoria.find();

    return res.status(201).json({ categorias });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "error del servidor, categorias" });
  }
};

// crear una nueva categoria
export const registrarCategoria = async (req, res) => {
  try {
    const { nombre, descripcion } = req.body;

    if (!nombre || !descripcion) {
      return res
        .status(400)
        .json({ msg: "se necesita completar todos los campos" });
    }

    const categoria = new Categoria({
      nombre: nombre,
      descripcion: descripcion,
    });

    await categoria.save();

    return res
      .status(201)
      .json({ categoria, msg: "categoria exitosamente creado" });
  } catch (error) {}
};

// actualizar una categoria
export const actualizarCategoria = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, descripcion } = req.body;

    const categoriaExiste = await Categoria.findById(id);

    if (!categoriaExiste) {
      return res.status(404).json({ msg: "categoria no encontrada" });
    }

    await Categoria.findByIdAndUpdate(id, {
      nombre: nombre,
      descripcion: descripcion,
    });

    return res.status(201).json({ msg: "categoria actualizada exitosamente" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "error del servidor, categorias" });
  }
};

// eliminar una categoria
export const eliminarCategoria = async (req, res) => {
  try {
    const { id } = req.params;
    const categoriaExiste = await Categoria.findById(id);

    if (!categoriaExiste) {
      return res.status(404).json({ msg: "categoria no encontrada" });
    }

    await Categoria.findByIdAndDelete(id);

    return res.status(201).json({ msg: "categoria eliminada exitosamente" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "error del servirdor, categoria" });
  }
};
