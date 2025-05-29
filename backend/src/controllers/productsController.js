//Array de metodos (C R U D)
const ProductsController = {};
import ProductsModel from "../models/Products.js";
import { v2 as cloudinary} from "cloudinary";

import {config} from "../config.js";

// 1- Configure cloudinary con nuestra cuenta
cloudinary.config({
    cloud_name: config.cloudinary.cloudinary_name,
    api_key: config.cloudinary.api_key,
    api_secret: config.cloudinary.api_secret
})

// SELECT
ProductsController.getProducts = async (req, res) => {
  const products = await ProductsModel.find().populate('idCategory', 'name');
  res.json(products);
};

// INSERT
ProductsController.createProducts = async (req, res) => {
  const { 
    name,
    stock,
    price,
    idCategory } = req.body;

    let imageURL = ""
    let imgPublic = ""

    // Upload the images to cloudinary
    if(req.file)
    {
        const result = await cloudinary.uploader.upload(
            req.file.path,
            { 
                folder: "public",
                allowed_formats: ["png", "jpg", "jpeg"]
            }
        )

        // Save the URL where the Image was uploaded to.
        imageURL = result.secure_url
        imgPublic = result.public_id
    }

  const newProduct = new ProductsModel({ 
    name,
    stock,
    price,
    idCategory,
    image: imageURL,
    imagePublicID: imgPublic
  });
  await newProduct.save();
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
  const { name, stock, price, idCategory } = req.body;

  try {
    const product = await ProductsModel.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product wasn't found" });

    let imageURL = product.image; 
    let imgPublic = product.imagePublicID; 

    // Si hay una nueva imagen, subirla y borrar la anterior
    if (req.file) {
      // Borrar la imagen anterior en Cloudinary si existe
      if (imgPublic) {
        await cloudinary.uploader.destroy(imgPublic);
      }

      // Subir la nueva imagen a Cloudinary
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: "public",
        allowed_formats: ["jpg", "png", "jpeg"],
      });

      imageURL = result.secure_url;
      imgPublic = result.public_id;
    }

    // Actualizar el producto
    const updatedProduct = await ProductsModel.findByIdAndUpdate(
      req.params.id,
      {
        name,
        stock,
        price,
        idCategory,
        image: imageURL,
        imagePublicID: imgPublic,
      },
      { new: true }
    );

    res.json({ message: "Product updated", product: updatedProduct });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error });
  }
};


export default ProductsController;