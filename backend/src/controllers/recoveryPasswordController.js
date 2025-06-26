import jsonwebtoken from "jsonwebtoken";
import bcryptjs from "bcryptjs";
import clientsModel from "../models/Costumers.js";
import employeesModel from "../models/employees.js";
import { sendEmail, HTMLRecoveryEmail } from "../utils/mailPasswordRecovery.js";
import { config } from "../config.js";

const passwordRecoveryController = {};

passwordRecoveryController.requestCode = async (req, res) => {
  const { email } = req.body;
  try {
    let userFound, userType;
    userFound = await clientsModel.findOne({ email });
    if (userFound) userType = "client";
    else {
      userFound = await employeesModel.findOne({ email });
      if (userFound) userType = "employee";
    }
    if (!userFound) return res.status(404).json({ message: "User not found" });

    const code = Math.floor(10000 + Math.random() * 90000).toString();
    const token = jsonwebtoken.sign({ email, code, userType, verified: false }, config.JWT.secret, { expiresIn: "20m" });
    res.cookie("tokenRecoveryCode", token, { maxAge: 20 * 60 * 1000, httpOnly: true });

    await sendEmail(email, "Your verification code", "Código para recuperar contraseña:", HTMLRecoveryEmail(code));
    res.json({ message: "correo enviado" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

passwordRecoveryController.verifyCode = async (req, res) => {
  const { code } = req.body;
  try {
    const token = req.cookies.tokenRecoveryCode;
    if (!token) return res.status(401).json({ message: "No token provided" });

    const decoded = jsonwebtoken.verify(token, config.JWT.secret);
    if (decoded.code !== code) return res.status(400).json({ message: "Invalid code" });

    const { exp, iat, ...rest } = decoded;
    const newToken = jsonwebtoken.sign({ ...rest, verified: true }, config.JWT.secret, { expiresIn: "20m" });

    res.cookie("tokenRecoveryCode", newToken, { maxAge: 20 * 60 * 1000});
    res.json({ message: "Code verified successfully" });
  } catch (error) {
    console.error(error, req.body);
    res.status(400).json({ message: "Invalid or expired token" });
  }
};

passwordRecoveryController.newPassword = async (req, res) => {
  const { newPassword } = req.body;
  try {
    const token = req.cookies.tokenRecoveryCode;
    if (!token) return res.status(401).json({ message: "No token" });

    const decoded = jsonwebtoken.verify(token, config.JWT.secret);
    if (!decoded.verified) return res.status(400).json({ message: "Code not verified" });

    const hashedPassword = await bcryptjs.hash(newPassword, 10);
    const { email, userType } = decoded;
    if (userType === "client") {
      await clientsModel.findOneAndUpdate({ email }, { password: hashedPassword });
    } else {
      await employeesModel.findOneAndUpdate({ email }, { password: hashedPassword });
    }

    res.clearCookie('tokenRecoveryCode');
    res.json({ message: "Password updated" });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Invalid request" });
  }
};

export default passwordRecoveryController;
