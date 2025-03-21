const wishListController = {};
import wishListModel from "../models/WishList.js";

//SELECT
wishListController.getWishList =  async(req,res) => {
    const wishList = await wishListModel.find();
    res.json(wishList)
}

//INSERT
wishListController.createWishList = async (req,res) => 
{
    const { idProducts, idCostumers} = req.body;
    const newWishList = await new wishListModel({idProducts, idCostumers});
    await newWishList.save();
    res.json({message: "Product Saved succesfully"})
}

//DELETE -- Check because, the wishlist contains products, and we cannot delete the whole wishlist, we got to delete product by product.
wishListController.deleteWishList = async(req,res) => {
    const deleteWishList = await wishListModel.findByIdAndDelete(req.params.id);
    if (!deleteWishList) {
      return res.status(404).json({ message: "Product Not Found :(" });
    }
    res.json({ message: "Product Deleted!" });
  };

  //UPDATE

   //UPDATE
wishListController.updateWishList = async (req, res) => {
    const { idProducts, idCostumers } = req.body;
    await wishListModel.findByIdAndUpdate(
      req.params.id,
      {
        idProducts, idCostumers
      },
      { new: true }
    );
    res.json({ message: "WishList Updated!" });
  };
  
  export default wishListController;
