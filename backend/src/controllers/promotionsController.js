const promotionsController = {};
import promotionModel from "../models/Promotions.js";

//SELECT
promotionsController.getPromotionById = async (req, res) => {
  try {
    const promotion = await promotionModel.findOne({ idProducts: req.params.id });

    if (!promotion) {
      return;
    }
    res.json(promotion);
    
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};


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
    await promotionModel.findByIdAndUpdate(
      req.params.id,
      {
        Discount, idProducts
      },
      { new: true }
    );
    res.json({ message: "Promotion Updated!" });
  };
  
  export default promotionsController;
