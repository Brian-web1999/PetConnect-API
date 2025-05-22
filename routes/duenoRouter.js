import express from "express";
import {
  getDuenos,
  getDuenoById,
  setDueno,
  deleteDuenoById
} from "../controllers/duenoController.js";

const router = express.Router();

router.get('/', getDuenos);
router.get('/:id', getDuenoById);
router.post('/', setDueno);
router.delete('/:id', deleteDuenoById);

export default router;
