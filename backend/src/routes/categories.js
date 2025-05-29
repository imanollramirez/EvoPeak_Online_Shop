//import de la libreria express
import express from "express";
//import de el controlador de Category
import categoriesController from "../controllers/categoriesController.js";

//router nos ayuda a cargar los metodos que tendra mi ruta 
const router = express.Router();

router.route("/")
.get(categoriesController.getCategory)
.post(categoriesController.createCategory)
router.route("/:id")
.put(categoriesController.updateCategory)
.delete(categoriesController.deleteCategory);

export default router;