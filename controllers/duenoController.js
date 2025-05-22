import Dueno from "../models/duenoModel.js";

const getDuenos = async (request, response) => {
  try {
    const duenos = await Dueno.find();
    response.status(200).json({ msg: "ok", data: duenos });
  } catch (error) {
    console.error({ error });
    response.status(500).json({ msg: "Error del servidor", data: [] });
  }
};

const getDuenoById = async (request, response) => {
  try {
    const { id } = request.params;
    const dueno = await Dueno.findById(id);

    if (dueno) {
      response.status(200).json({ msg: "ok", data: dueno });
    } else {
      response.status(404).json({ msg: "Dueño no encontrado", data: {} });
    }
  } catch (error) {
    console.error({ error });
    response.status(500).json({ msg: "Error del servidor", data: {} });
  }
};

const setDueno = async (request, response) => {
  try {
    const { nombre, email, telefono } = request.body;
    const duenoNuevo = new Dueno({ nombre, email, telefono });
    await duenoNuevo.save();
    const id = duenoNuevo._id;

    response.status(202).json({ msg: "Dueño guardado correctamente", id });
  } catch (error) {
    console.error({ error });
    response.status(500).json({ msg: "Error del servidor" });
  }
};

const deleteDuenoById = async (request, response) => {
  try {
    const { id } = request.params;
    const status = await Dueno.findByIdAndDelete(id);
    if (status) {
      response.status(200).json({ msg: "Dueño eliminado", data: [] });
    } else {
      response.status(404).json({ msg: "Dueño no encontrado", data: [] });
    }
  } catch (error) {
    console.error({ error });
    response.status(500).json({ msg: "Error del servidor" });
  }
};

export { getDuenos, getDuenoById, setDueno, deleteDuenoById };
