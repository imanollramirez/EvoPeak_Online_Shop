//import de la libreria express
import express from "express";
//import de el controlador de Category
import categoryController from "../controllers/categoryController.js";

//router nos ayuda a cargar los metodos que tendra mi ruta 
const router = express.Router();

router.route("/")
.get(categoryController.getCategory)
.post(categoryController.createCategory)
router.route("/:id")
.put(categoryController.updateCategory)
.delete(categoryController.deleteCategory);

export default router;