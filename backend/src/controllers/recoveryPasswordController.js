import jsonwebtoken from "jsonwebtoken"; //Token
import bcryptjs from "bcryptjs"; //Encriptar

import clientsModel from "../models/Costumers.js";
import employeesModel from "../models/employees.js";

import { sendEmail, HTMLRecoveryEmail } from "../utils/mailPasswordRecovery.js";
import { config } from "../config.js";

//1- Crear un array de funciones
const passwordRecoveryController = {};

passwordRecoveryController.requestCode = async (req, res) => {
  const { email } = req.body;

  try {
    let userFound;
    let userType;

    userFound = await clientsModel.findOne({ email });
    if (userFound) {
      userType = "costumer";
    } else {
      userFound = await employeesModel.findOne({ email });
      if (userFound) {
        userType = "employee";
      }
    }

    if (!userFound) {
      res.json({ message: "User not found" });
    }

    //Generar un código un aleatorio
    // (El que se va a enviar)
    const code = Math.floor(10000 + Math.random() * 90000).toString();

    //Guardamos todo en un token
    const token = jsonwebtoken.sign(
      //1-¿Que voy a Save?
      { email, code, userType, verified: false },
      //2-secret key
      config.JWT.secret,
      //3-¿Cuando expira?
      { expiresIn: "20m" }
    );

    res.cookie("tokenRecoveryCode", token, { maxAge: 20 * 60 * 1000 });

    //ULTIMO PASO => enviar el correo con el código
    await sendEmail(
      email,
      "You verification code", //Asunto
      "Hello! Remember dont forget your pass", //Cuerpo del mensaje
      HTMLRecoveryEmail(code) //HTML
    );

    res.json({ message: "correo enviado" });
  } catch (error) {
    console.log("error" + error);
  }
};

passwordRecoveryController.verifyCode = async (req, res) => {
  const { code } = req.body;

  try {
    //Sacar el token de las cookies
    const token = req.cookies.tokenRecoveryCode;

    //Extraer la información del token
    const decoded = jsonwebtoken.verify(token, config.JWT.secret);

    if (decoded.code !== code) {
      return res.json({ message: "Invalid code" });
    }

    //Marcar el token como verificado
    const newToken = jsonwebtoken.sign(
      //1-¿Que vamos a Save?
      {
        email: decoded.email,
        code: decoded.code,
        userType: decoded.userType,
        verified: true,
      },
      //2- Secret key
      config.JWT.secret,
      //3- ¿Cuando expira?
      { expiresIn: "20m" }
    );

    res.cookie("tokenRecoveryCode", newToken, { maxAge: 20 * 60 * 1000 });

    res.json({ message: "Code verified successfully" });
  } catch (error) {
    console.log("error" + error);
  }
};

passwordRecoveryController.newPassword = async (req, res) => {
  const { newPassword } = req.body;

  try {
    //Extraer el token de las cookies
    const token = req.cookies.tokenRecoveryCode;

    //Extraer la información del token
    const decoded = jsonwebtoken.verify(token, config.JWT.secret);

    //Comprobar si el codigo fue verificado
    if (!decoded.verified) {
      return res.json({ message: "Code not verified" });
    }

    //Extraer el email y el userType del token
    const { email, userType } = decoded;

    // Encriptar la contraseña
    const hashedPassword = await bcryptjs.hash(newPassword, 10);

    //Actualizar la contraseña del usuario en la base de datos
    let updatedUser;

    if (userType === "client") {
      updatedUser = await clientsModel.findOneAndUpdate(
        { email },
        { password: hashedPassword },
        { new: true }
      );
    } else if (userType === "employee") {
      updatedUser = await employeesModel.findOneAndUpdate(
        { email },
        { password: hashedPassword },
        { new: true }
      );
    }

    //Quitamos el token
    res.clearCookie("tokenRecoveryCode");

    res.json({ message: "Password updated" });
  } catch (error) {
    console.log("error" + error);
  }
};

export default passwordRecoveryController;