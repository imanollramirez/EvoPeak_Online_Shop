const promotionController = {};
import promotionModel from "../models/Promotions.js";

//SELECT
promotionController.getPromotions =  async(req,res) => {
    const promotions = await promotionModel.find();
    res.json(promotions)
}

//INSERT
promotionController.createPromotions = async(req,res) => {
    const { Discount, idProducts } = req.body;
    const newPromotion = new promotionModel({Discount,idProducts});
    await newPromotion.save();
    res.json({message: "Promotion Saved Succesfully"});
};

//DELETE
promotionController.deletePromotion = async (req, res) => {
    const deletePromotion = await promotionModel.findByIdAndDelete(req.params.id);
    if (!deletePromotion) {
      return res.status(404).json({ message: "Promotion Not Found :(" });
    }
    res.json({ message: "Promotion Deleted!" });
  };

//UPDATE
promotionsController.updateBranchs = async (req, res) => {
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
