import customersModel from "../models/Costumers.js";
import employeesModel from "../models/employees.js";
import bcryptjs from "bcryptjs"; 
import jsonwebtoken from "jsonwebtoken";
import { config } from "../config.js";

const loginController = {};

loginController.login = async (req, res) => {
    const { email, password } = req.body;

  try {
    // 1. Admin, 2. Empleado, 3. Cliente

    let userFound;
    let userType;

    //1. Admin
    if (
      email === config.ADMIN.email &&
      password === config.ADMIN.password
    ) {
      userType = "admin";
      userFound = { _id: "admin" };
    } else {
      //2. Empleados
      userFound = await employeesModel.findOne({ email });
      userType = "employee";
      if (!userFound) {
        //3. Cliente
        userFound = await customersModel.findOne({ email });
        userType = "costumer";
      }
    }

    //Si no encontramos a ningun usuario con esas credenciales
    if (!userFound) {
      return res.status(400).json({ message: "User not found" });
    }

    // Validar la contraseña
    // SOLO SI NO ES ADMIN
    if (userType !== "admin") {
      const isMatch = await bcryptjs.compare(password, userFound.password);
      if (!isMatch) {
        return res.status(400).json({ message: "Invalid password" });
      }
    }

    //// TOKEN
    //Para validar que inició sesión
    jsonwebtoken.sign(
      //1-Que voy a guardar
      { id: userFound._id, userType },
      //2-Secreto
      config.JWT.secret,
      //3-Cuando expira
      { expiresIn: config.JWT.expiresIn },
      //4. Funcion flecha
      (err, token) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ message: "Error generating token" });
        }

        // Guardar el token en una cookie con configuraciones adecuadas
        res.cookie("authToken", token, { 
          httpOnly: true,
          maxAge: 24 * 60 * 60 * 1000, // 24 horas en milisegundos
          path: '/', // Cookie disponible en toda la aplicación
          sameSite: 'lax', // Protección contra CSRF
          secure: process.env.NODE_ENV === 'production' // Solo HTTPS en producción
        });
        res.status(200).json({ message: `${userType} login successful`, token, userId: userFound._id });
      }
    );
  } catch (error) {
    res.status(500).json({ message: "Error", error: error.message });
  }
};

export default loginController;