import mongoose from "mongoose";
const Schema = mongoose.Schema;

const duenoSchema = new Schema({
  nombre: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  telefono: {
    type: String,
    required: true
  }
});

duenoSchema.set('toJSON', {
    transform: function (doc, ret) {
      delete ret.__v;
      return ret;
    }
  });

const Dueno = mongoose.model("dueno", duenoSchema);

export default Dueno;
