const categoriesController = {};

import categoriesModel from "../models/Categories.js";


//Select del CRUD 
categoriesController.getCategory = async (req, res) => {

    const category = await categoriesModel.find();
    res.json(category)
}

//Insert del CRUD
categoriesController.createCategory = async(req, res) => {

    const{description, name} = req.body;
    const newCategory = new categoriesModel({description, name});


    await newCategory.save();
    res.json({message: "Category created"})
}

categoriesController.deleteCategory = async(req, res) => {
    await categoriesModel.findOneAndDelete(req.params.id)
    res.json({message: "Category deleted"})

}

categoriesController.updateCategory = async(req, res) => {
    const{description, name} = req.body;

    await categoriesModel.findByIdAndUpdate(
        req.param.id, {
        description,
        name
    });
    res.json({message: "Category updated"})
}
export default categoriesController;
