// Importamos todas las librerías
import jsonwebtoken from "jsonwebtoken";
import bcryptjs from "bcryptjs";
import crypto from "crypto";

import { v2 as cloudinary} from "cloudinary";

import clientsModel from "../models/Costumers.js";
import { config } from "../config.js";

// Array de funciones
const registerCostumerController = {};

// 1- Configure cloudinary con nuestra cuenta
cloudinary.config({
    cloud_name: config.cloudinary.cloudinary_name,
    api_key: config.cloudinary.api_key,
    api_secret: config.cloudinary.api_secret
})


// REGISTRAR CLIENTE
registerCostumerController.registerCostumer = async (req, res) => {
  const {
    email,
    lastName,
    name,
    phone,
    password,
    dui,
  } = req.body;

  try {
    // Verificar si el cliente ya existe
    const existClient = await clientsModel.findOne({ email });
    if (existClient) {
      return res.json({ message: "Client already exists" });
    }

    // Subir imagen a Cloudinary
    let imageURL = "";
    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: "customers",
        allowed_formats: ["jpg", "jpeg", "png"],
      });
      imageURL = result.secure_url;
    }

    // Encriptar la contraseña
    const passwordHash = await bcryptjs.hash(password, 10);

    // Crear nuevo cliente
    const newCustomer = new clientsModel({
      email,
      lastName,
      name,
      phone,
      password: passwordHash,
      dui: dui || null,
      profilePic: imageURL || null
    });

    await newCustomer.save();

    res.json({ message: "Cliente registrado exitosamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al registrar el cliente" });
  }
};

export default registerCostumerController;
