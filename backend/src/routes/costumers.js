//import de la libreria express
import express from "express";
//import de el controlador de Category
import costumerController from "../controllers/costumerController.js";

//router nos ayuda a cargar los metodos que tendra mi ruta 
const router = express.Router();

router.route("/")
.get(costumerController.getCostumer)
.post(costumerController.createCostumer)
router.route("/:id")
.put(costumerController.updateCostumer)
.delete(costumerController.deleteCostumer);

export default router;