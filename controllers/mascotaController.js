import Mascota from "../models/mascotaModel.js";

const getMascotas = async (request, response) => {
  try {
    const mascotas = await Mascota.find().populate("duenioId");
    response.status(200).json({ msg: "ok", data: mascotas });
  } catch (error) {
    console.error({ error });
    response.status(500).json({ msg: "Error del servidor", data: [] });
  }
};

const getMascotaById = async (request, response) => {
  try {
    const { id } = request.params;
    const mascota = await Mascota.findById(id).populate("duenioId");

    if (mascota) {
      response.status(200).json({ msg: "ok", data: mascota });
    } else {
      response.status(404).json({ msg: "Mascota no encontrada", data: {} });
    }
  } catch (error) {
    console.error({ error });
    response.status(500).json({ msg: "Error del servidor", data: {} });
  }
};

const setMascota = async (request, response) => {
  try {
    const { nombre, especie, edad, duenioId } = request.body;
    const mascotaNueva = new Mascota({ nombre, especie, edad, duenioId });
    await mascotaNueva.save();
    const id = mascotaNueva._id;

    response.status(202).json({ msg: "Mascota guardada correctamente", id });
  } catch (error) {
    console.error({ error });
    response.status(500).json({ msg: "Error del servidor" });
  }
};

const deleteMascotaById = async (request, response) => {
  try {
    const { id } = request.params;
    const status = await Mascota.findByIdAndDelete(id);
    if (status) {
      response.status(200).json({ msg: "Mascota eliminada", data: [] });
    } else {
      response.status(404).json({ msg: "Mascota no encontrada", data: [] });
    }
  } catch (error) {
    console.error({ error });
    response.status(500).json({ msg: "Error del servidor" });
  }
};

export { getMascotas, getMascotaById, setMascota, deleteMascotaById };
