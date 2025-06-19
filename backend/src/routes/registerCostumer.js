import express from "express";
import registerCostumerController from "../controllers/registerCostumerController.js";

import multer from "multer";

const upload = multer({dest: "public/"});

const router = express.Router()

// /api/registerClients
router.route("/").post(upload.single("image"),registerCostumerController.registerCostumer);

// /api/registerClients/verifyCodeEmail
//router.route("/verifyCodeEmail").post(registerCostumerController.verifyCodeEmail)

export default router