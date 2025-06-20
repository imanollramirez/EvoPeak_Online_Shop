import express from "express";
import salesController from "../controllers/salesController.js";

const router = express.Router()

router
.route("/")
  .get(salesController.getSales)
  .post(salesController.createSales);

router
  .route("/:id")
  .put(salesController.updateSales)
  .delete(salesController.deleteSales);

  //Graphics
  router.route("/category").get(salesController.salesByCategory);
  router.route("/bestSellingsProducts").get(salesController.bestSellingProduct);
  router.route("/frecuentCustomer").get(salesController.frecuentCustomer);
  router.route("/earnings").get(salesController.earnings);

export default router;