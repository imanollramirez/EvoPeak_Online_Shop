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
  try {
    const employee = await employeesModel.find();
    res.json(employee);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener empleados" });
  }
};

// POST crear empleado con imagen
employeesController.createEmployee = async (req, res) => {
  try {
    const { name, lastName, phone, dui, salary, isss } = req.body;

    if (req.file) {
      // Subir la imagen usando el buffer de multer
      const uploadResult = await new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          { folder: "employees" },
          (error, result) => {
            if (error) return reject(error);
            resolve(result);
          }
        );
        stream.end(req.file.buffer);
      });

      const newEmployee = new employeesModel({
        name,
        lastName,
        phone,
        dui,
        salary,
        isss,
        profilePic: uploadResult.secure_url,
      });

      await newEmployee.save();

      res.status(201).json(newEmployee); // Devuelve el empleado creado completo
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

      res.status(201).json(newEmployee); // Devuelve el empleado creado completo
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
      const uploadResult = await new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          { folder: "employees" },
          (error, result) => {
            if (error) return reject(error);
            resolve(result);
          }
        );
        stream.end(req.file.buffer);
      });

      // Actualizar datos y nueva imagen
      employee.name = name;
      employee.lastName = lastName;
      employee.phone = phone;
      employee.dui = dui;
      employee.salary = salary;
      employee.isss = isss;
      employee.profilePic = uploadResult.secure_url;

      await employee.save();

      res.status(200).json(employee); // Devuelve el empleado actualizado completo
    } else {
      // Solo actualizar campos (sin imagen)
      employee.name = name;
      employee.lastName = lastName;
      employee.phone = phone;
      employee.dui = dui;
      employee.salary = salary;
      employee.isss = isss;

      await employee.save();

      res.status(200).json(employee); // Devuelve el empleado actualizado completo
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
