// src/controllers/employeesController.js
import employeesModel from "../models/employees.js";
import { v2 as cloudinary } from "cloudinary";
import { config } from "../config.js";

// Configura Cloudinary
cloudinary.config({
  cloud_name: config.cloudinary.cloudinary_name,
  api_key: config.cloudinary.api_key,
  api_secret: config.cloudinary.api_secret,
});

const employeesController = {};

// GET empleados
employeesController.getEmployee = async (req, res) => {
  const employee = await employeesModel.find();
  res.json(employee);
};

// POST crear empleado con imagen
employeesController.createEmployee = async (req, res) => {
  try {
    const { name, lastName, phone, dui, salary, isss } = req.body;
    let profilePicUrl = "";

    if (req.file) {
      // Subir la imagen usando el buffer de multer
      const result = await cloudinary.uploader.upload_stream(
        { folder: "employees" },
        (error, result) => {
          if (error) {
            console.error("Cloudinary upload error:", error);
            return res.status(500).json({ message: "Error al subir la imagen" });
          }
          // Crear el empleado y guardar con la URL de imagen
          const newEmployee = new employeesModel({
            name,
            lastName,
            phone,
            dui,
            salary,
            isss,
            profilePic: result.secure_url,
          });
          newEmployee.save();
          res.json({ message: "Empleado creado con imagen" });
        }
      );
      // Importante: pasar el buffer al stream
      result.end(req.file.buffer);
    } else {
      // Sin imagen
      const newEmployee = new employeesModel({
        name,
        lastName,
        phone,
        dui,
        salary,
        isss,
        profilePic: "",
      });
      await newEmployee.save();
      res.json({ message: "Empleado creado sin imagen" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al crear empleado" });
  }
};

// PUT actualizar empleado con imagen
employeesController.updateEmployee = async (req, res) => {
  try {
    const { name, lastName, phone, dui, salary, isss } = req.body;
    const id = req.params.id;

    const employee = await employeesModel.findById(id);
    if (!employee) return res.status(404).json({ message: "Empleado no encontrado" });

    if (req.file) {
      // Subir nueva imagen
      const result = await cloudinary.uploader.upload_stream(
        { folder: "employees" },
        async (error, result) => {
          if (error) {
            console.error("Cloudinary upload error:", error);
            return res.status(500).json({ message: "Error al subir la imagen" });
          }
          // Actualizar datos y nueva imagen
          employee.name = name;
          employee.lastName = lastName;
          employee.phone = phone;
          employee.dui = dui; 
          employee.salary = salary;
          employee.isss = isss;
          employee.profilePic = result.secure_url;

          await employee.save();
          res.json({ message: "Empleado actualizado con imagen", employee });
        }
      );
      result.end(req.file.buffer);
    } else {
      // Solo actualizar campos (sin imagen)
      employee.name = name;
      employee.lastName = lastName;
      employee.phone = phone;
      employee.dui = dui;
      employee.salary = salary;
      employee.isss = isss;

      await employee.save();
      res.json({ message: "Empleado actualizado sin imagen", employee });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al actualizar empleado" });
  }
};

// DELETE empleado
employeesController.deleteEmployee = async (req, res) => {
  try {
    await employeesModel.findByIdAndDelete(req.params.id);
    res.json({ message: "Empleado eliminado" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al eliminar empleado" });
  }
};

export default employeesController;
