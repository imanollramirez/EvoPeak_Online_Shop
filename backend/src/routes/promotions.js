import express from 'express'
import promotionsController from '../controllers/promotionsController.js'

const router = express.Router();

router
.route("/")
.get(promotionsController.getPromotions)
.post(promotionsController.createPromotions);

router
.route("/:id")
.put(promotionsController.updatePromotions)
.delete(promotionsController.deletePromotions);

export default router;
