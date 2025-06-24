import express from 'express'
import promotionsController from '../controllers/promotionsController.js'

const router = express.Router();

router
.route("/")
.post(promotionsController.createPromotions);

router
.route("/:id")
.get(promotionsController.getPromotionById)
.put(promotionsController.updatePromotions)
.delete(promotionsController.deletePromotions);

export default router;
