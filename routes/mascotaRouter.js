import express from "express";
import {
  getMascotas,
  getMascotaById,
  setMascota,
  deleteMascotaById
} from "../controllers/mascotaController.js";

const router = express.Router();

router.get('/', getMascotas);
router.get('/:id', getMascotaById);
router.post('/', setMascota);
router.delete('/:id', deleteMascotaById);

export default router;
