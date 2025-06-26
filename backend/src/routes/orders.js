import express from "express";
import ordersController from "../controllers/ordersController.js";

const router = express.Router();

router.route("/")
  .get(ordersController.getOrders)
  .post(ordersController.createOrders);

router.route("/:id")
  .put(ordersController.updateOrders)
  .delete(ordersController.deleteOrders);

export default router;
