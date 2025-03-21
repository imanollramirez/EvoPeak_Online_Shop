//import de la libreria express
import express from "express";
//import de el controlador de Category
import ordersController from "../controllers/ordersController";

//router nos ayuda a cargar los metodos que tendra mi ruta 
const router = express.Router();

router.route("/")
.get(ordersController.getOrders)
.post(ordersController.createOrders)
router.route("/:id")
.put(ordersController.updateOrders)
.delete(ordersController.deleteOrders);

export default router;