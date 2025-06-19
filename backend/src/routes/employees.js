// src/routes/employees.js
import express from "express";
import employeesController from "../controllers/employeesController.js";
import multer from "multer";

const router = express.Router();

// Configura multer con memoryStorage (archivos en memoria)
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Rutas con multer para subir archivo 'profilePic'
router.route("/")
  .get(employeesController.getEmployee)
  .post(upload.single("profilePic"), employeesController.createEmployee);

router.route("/:id")
  .put(upload.single("profilePic"), employeesController.updateEmployee)
  .delete(employeesController.deleteEmployee);

export default router;
