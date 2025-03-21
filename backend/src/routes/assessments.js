//import de la libreria express
import express from "express";
//import de el controlador de Category
import assessmentsController from "../controllers/assessmentsController.js";

//router nos ayuda a cargar los metodos que tendra mi ruta 
const router = express.Router();

router.route("/")
.get(assessmentsController.getas)
.post(assessmentsController.createAssessments)
router.route("/:id")
.put(assessmentsController.updateAssessments)
.delete(assessmentsController.deleteAssessments);

export default router;