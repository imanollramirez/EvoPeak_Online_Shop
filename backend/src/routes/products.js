//import de la libreria express
import express from "express";
//import de el controlador de Category
import productsController from "../controllers/productsController.js";
import multer from "multer";

//router nos ayuda a cargar los metodos que tendra mi ruta 
const router = express.Router();

// Configure a local folder to save the images
const upload = multer({dest: "public/"});

router.route("/")
.get(productsController.getProducts)
.post(upload.single("image"),productsController.createProducts)
router.route("/:id")
.put(upload.single("image"),productsController.updateProducts)
.delete(productsController.deleteProducts);

export default router;