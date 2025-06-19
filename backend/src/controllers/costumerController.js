const costumerController = {};
import costumerModel from "../models/Costumers.js";


//Select del CRUD 
costumerController.getCostumer = async (req, res) => {

    const customer = await costumerModel.find();
    res.json(customer)
}

//Insert del CRUD
costumerController.createCostumer = async(req, res) => {

    const{email, lastName, name, phone, password ,dui,profilePic} = req.body;
    const newCustomer = new costumerModel({email, lastName, name, phone, password ,dui, profilePic});


    await newCustomer.save();
    res.json({message: "Customer created"})
}

costumerController.deleteCostumer = async(req, res) => {
    const deleteCustomer = await costumerModel.findByIdAndDelete(req.params.id)
    if(!deleteCustomer)
    {
        return res.status(404).json({message: "Customer deleted"})
    }
    res.json({message: "Customer deleted"})

}

costumerController.updateCostumer = async(req, res) => {
    const{email, lastName, name, phone, dui,profilePic} = req.body;

    await costumerModel.findOneAndUpdate(req.param.id, {
        email, 
        lastName,
        name,
        phone, 
        dui,
        profilePic
    });
    res.json({message: "Customer updated"})
}
export default costumerController;
