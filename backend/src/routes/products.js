//import de la libreria express
import express from "express";
//import de el controlador de Category
import productsController from "../controllers/productsController";

//router nos ayuda a cargar los metodos que tendra mi ruta 
const router = express.Router();

router.route("/")
.get(productsController.getProducts)
.post(productsController.createProducts)
router.route("/:id")
.put(productsController.updateProducts)
.delete(productsController.deleteProducts);

export default router;