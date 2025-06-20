const salesController = {};
import salesModel from "../models/Sales.js";

//SELECT
salesController.getSales = async (req, res) => {
  const sales = await salesModel.find();
  res.json(sales);
};

//INSERT
salesController.createSales = async (req, res) => {
  const { product, category, customer, total, date } = req.body;
  const newSale = new salesModel({ product, category, customer, total, date });
  await newSale.save();
  res.json({ message: "Sale saved succesfully" });
};

//DELETE
salesController.deleteSales = async (req, res) => {
  const deleteSale = await salesModel.findByIdAndDelete(req.params.id);
  if (!deleteSale) {
    return res.status(404).json({ message: "Sale Not Found :(" });
  }
  res.json({ message: "Sale Deleted!" });
};

//UPDATE
salesController.updateSales = async (req, res) => {
  const { product, category, customer, total, date } = req.body;
  await salesModel.findByIdAndUpdate(
    req.params.id,
    {
      product,
      category,
      customer,
      total,
      date,
    },
    { new: true }
  );
  res.json({ message: "Sale Updated!" });
};

// Sales by category
salesController.salesByCategory = async (req, res) => {
  try {
    const result = await salesModel.aggregate([
      {
        $group: {
          _id: "$category",
          totalSales: { $sum: "$total" },
        },
      },
      {
        $sort: { totalSales: -1 }, //mayor a menor
      },
    ]);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

salesController.bestSellingProduct = async (req, res) => {
  try {
    const result = await salesModel.aggregate([
      {
        $group: {
          _id: { _id: "$product" },
          cantidad: { $sum: 1 }, //menor a mayor
        },
      },
      {
        //Ordenar
        $sort: { cantidad: -1 }, //mayor a menor
      },
      {
        //Limitar la cantidad de datos a mostrar
        $limit: 5,
      },
    ]);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

salesController.frecuentCustomer = async (req, res) => {
  try {
    const result = await salesModel.aggregate([
      {
        $group: {
          _id: "$customer",
          compras: {$sum: 1}
        }
      },
      {
        $sort: {cantidad: -1}
      },
      {
        $limit: 3
      }
    ]);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

salesController.earnings = async(req,res) => {
  try {
    const result = await salesModel.aggregate(
      [
        {
          $group: {
            _id: null,
            earnings: {$sum: "$total"}
          }
        }
      ]
    )
    res.status(200).json(result)

  } catch (error) {
    
  }
};
export default salesController;
