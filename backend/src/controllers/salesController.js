const salesController = {};
import salesModel from "../models/Sales.js";

//SELECT
salesController.getSales =  async(req,res) => {
    const sales = await salesModel.find();
    res.json(sales)
}

//INSERT
salesController.createSales = async(req,res) => {
    const { idOrders , Date } = req.body;
    const newSale = new salesModel({idOrders, Date})
    await newSale.save();
    res.json({message: "Sale saved succesfully"});
};

//DELETE
salesController.deleteSales = async(req,res) => {
    const deleteSale = await salesModel.findByIdAndDelete(req.params.id);
    if (!deleteSale) {
      return res.status(404).json({ message: "Sale Not Found :(" });
    }
    res.json({ message: "Sale Deleted!" });
  };

  //UPDATE
  salesController.updateSales = async (req, res) => {
    const { idOrders, Date } = req.body;
    await salesModel.findByIdAndUpdate(
      req.params.id,
      {
        idOrders, Date
      },
      { new: true }
    );
    res.json({ message: "Sale Updated!" });
  };
  
  export default salesController;