const promotionsController = {};
import promotionModel from "../models/Promotions.js";

//SELECT
promotionsController.getPromotions =  async(req,res) => {
    const promotions = await promotionModel.find();
    res.json(promotions)
}

//INSERT
promotionsController.createPromotions = async(req,res) => {
    const { Discount, idProducts } = req.body;
    const newPromotion = new promotionModel({Discount,idProducts});
    await newPromotion.save();
    res.json({message: "Promotion Saved Succesfully"});
};

//DELETE
promotionsController.deletePromotions = async (req, res) => {
    const deletePromotion = await promotionModel.findByIdAndDelete(req.params.id);
    if (!deletePromotion) {
      return res.status(404).json({ message: "Promotion Not Found :(" });
    }
    res.json({ message: "Promotion Deleted!" });
  };

//UPDATE
promotionsController.updatePromotions = async (req, res) => {
    const { Discount, idProducts } = req.body;
    await branchsModel.findByIdAndUpdate(
      req.params.id,
      {
        Discount, idProducts
      },
      { new: true }
    );
    res.json({ message: "Promotion Updated!" });
  };
  
  export default promotionsController;
