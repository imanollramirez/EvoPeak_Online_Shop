import express from "express";
import wishListController from "../controllers/wishListController.js";

const router = express.Router()

router
 .route("/")
  .get(wishListController.getWishList)
  .post(wishListController.createWishList);

router
  .route("/:id")
  .put(wishListController.updateWishList)
  .delete(wishListController.deleteWishList);

export default router;