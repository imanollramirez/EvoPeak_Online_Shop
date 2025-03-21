//Array de metodos (C R U D)
const OrdersController = {};
import OrdersModel from "../models/Orders.js";

// SELECT
OrdersController.getOrders = async (req, res) => {
  const products = await OrdersModel.find();
  res.json(products);
};

// INSERT
OrdersController.createOrders = async (req, res) => {
  const { IdCostumers,
    products,
    total,
    status,
     } = req.body;

  const newOrders = new OrdersModel({ Nombre,
    IdCostumers,
    products,
    total,
    status,});
  await newOrders.save();
  res.json({ message: "orders saved" });
};

// DELETE
OrdersController.deleteOrders = async (req, res) => {
  const deleteorders = await OrdersModel.findByIdAndDelete(req.params.id);
  if (!deleteorders) {
    return res.status(404).json({ message: "orders not found" });
  }
  res.json({ message: "orders deleted" });
};

// UPDATE
OrdersController.updateOrders = async (req, res) => {
  // Solicito todos los valores
  const {IdCostumers,
    products,
    total,
    status, } = req.body;
  // Actualizo
  await OrdersModel.findByIdAndUpdate(
    req.params.id,
    {
        IdCostumers,
        products,
        total,
        status,
    },
    { new: true }
  );
  // muestro un mensaje que todo se actualizo
  res.json({ message: "orders updated" });
};

export default OrdersController;