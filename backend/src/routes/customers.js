//import de la libreria express
import express from "express";
//import de el controlador de Category
import customersController from "../controllers/customersController";

//router nos ayuda a cargar los metodos que tendra mi ruta 
const router = express.Router();

router.route("/")
.get(customersController.getCustomer)
.post(customersController.createCustomer)
router.route("/:id")
.put(customersController.updateCustomer)
.delete(customersController.deleteCustomer);

export default router;