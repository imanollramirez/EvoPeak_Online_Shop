//import de la libreria express
import express from "express";
//import de el controlador de Category
import employeesController from "../controllers/employeesController.js";

//router nos ayuda a cargar los metodos que tendra mi ruta 
const router = express.Router();

router.route("/")
.get(employeesController.getEmployee)
.post(employeesController.createEmployee)
router.route("/:id")
.put(employeesController.updateEmployee)
.delete(employeesController.deleteEmployee);

export default router;