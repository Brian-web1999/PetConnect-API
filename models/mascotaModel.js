import mongoose from "mongoose";
const Schema = mongoose.Schema;

const mascotaSchema = new Schema({
  nombre: {
    type: String,
    required: true
  },
  especie: {
    type: String,
    required: true
  },
  edad: {
    type: Number,
    required: true
  },
  duenioId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "dueno",
    required: true
  }
});

mascotaSchema.set('toJSON', {
    transform: function (doc, ret) {
      delete ret.__v;
      return ret;
    }
  });
  
const Mascota = mongoose.model("mascota", mascotaSchema);

export default Mascota;
