const categoryController = {};
import categoryModel from "../models/category.js";


//Select del CRUD 
categoryController.getCategory = async (req, res) => {

    const category = await categoryModel.find();
    res.json(category)
}

//Insert del CRUD
categoryController.createCategory = async(req, res) => {

    const{description, name} = req.body;
    const newCategory = new categoryModel({description, name});


    await newCategory.save();
    res.json({message: "Category created"})
}

categoryController.deleteCategory = async(req, res) => {
    await categoryModel.findOneAndDelete(req.params.id)
    res.json({message: "Category deleted"})

}

categoryController.updateCategory = async(req, res) => {
    const{description, name} = req.body;

    await categoryModel.findOneAndUpdate(req.param.id, {
        description,
        name
    });
    res.json({message: "Category updated"})
}
export default categoryController;
