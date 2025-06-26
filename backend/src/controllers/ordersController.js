const OrdersController = {};
import OrdersModel from "../models/Orders.js";

OrdersController.getOrders = async (req, res) => {
  try {
    const orders = await OrdersModel.find()
      .populate("idCostumers", "name lastName email phone")
      .populate("products.idProduct", "name image price");

    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: "Error al obtener órdenes", error: err });
  }
};



// INSERT: crear nueva orden asociada a un cliente
OrdersController.createOrders = async (req, res) => {
  try {
    const { idCostumers, products, total, status } = req.body;

    const newOrder = new OrdersModel({
      idCostumers,
      products,
      total,
      status,
    });

    await newOrder.save();
    res.status(201).json({ message: "Orden creada exitosamente", order: newOrder });
  } catch (err) {
    res.status(400).json({ message: "Error al crear la orden", error: err });
  }
};

// DELETE
OrdersController.deleteOrders = async (req, res) => {
  const deleted = await OrdersModel.findByIdAndDelete(req.params.id);
  if (!deleted) {
    return res.status(404).json({ message: "Orden no encontrada" });
  }
  res.json({ message: "Orden eliminada" });
};

// UPDATE
OrdersController.updateOrders = async (req, res) => {
  const { idCostumers, products, total, status } = req.body;
  try {
    const updated = await OrdersModel.findByIdAndUpdate(
      req.params.id,
      { idCostumers, products, total, status },
      { new: true }
    );
    res.json({ message: "Orden actualizada", order: updated });
  } catch (err) {
    res.status(400).json({ message: "Error al actualizar", error: err });
  }
};

export default OrdersController;
