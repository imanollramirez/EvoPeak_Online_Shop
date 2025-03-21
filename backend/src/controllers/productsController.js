//Array de metodos (C R U D)
const ProductsController = {};
import ProductsModel from "../models/Products.js";

// SELECT
ProductsController.getProducts = async (req, res) => {
  const products = await ProductsModel.find();
  res.json(products);
};

// INSERT
ProductsController.createProducts = async (req, res) => {
  const { Nombre,
    Stock,
    Precio,
    idCategoria,
    Imagen } = req.body;

  const newClient = new ProductsModel({ Nombre,
    Stock,
    Precio,
    idCategoria,
    Imagen});
  await newClient.save();
  res.json({ message: "products saved" });
};

// DELETE
ProductsController.deleteProducts = async (req, res) => {
  const deletedassessments = await ProductsModel.findByIdAndDelete(req.params.id);
  if (!deletedassessments) {
    return res.status(404).json({ message: "product not found" });
  }
  res.json({ message: "product deleted" });
};

// UPDATE
ProductsController.updateProducts = async (req, res) => {
  // Solicito todos los valores
  const {Nombre,
    Stock,
    Precio,
    idCategoria,
    Imagen } = req.body;
  // Actualizo
  await ProductsModel.findByIdAndUpdate(
    req.params.id,
    {
        Nombre,
Stock,
Precio,
idCategoria,
Imagen
    },
    { new: true }
  );
  // muestro un mensaje que todo se actualizo
  res.json({ message: "product updated" });
};

export default ProductsController;