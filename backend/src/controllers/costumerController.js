const costumerController = {};
import costumerModel from "../models/costumers.js";


//Select del CRUD 
costumerController.getCostumer = async (req, res) => {

    const customer = await costumerModel.find();
    res.json(customer)
}

//Insert del CRUD
costumerController.createCostumer = async(req, res) => {

    const{email, lastName, name, phone, profilePic} = req.body;
    const newCustomer = new costumerModel({email, lastName, name, phone, profilePic});


    await newCustomer.save();
    res.json({message: "Customer created"})
}

costumerController.deleteCostumer = async(req, res) => {
    await costumerModel.findOneAndDelete(req.params.id)
    res.json({message: "Customer deleted"})

}

costumerController.updateCostumer = async(req, res) => {
    const{email, lastName, name, phone, profilePic} = req.body;

    await costumerModel.findOneAndUpdate(req.param.id, {
        email, 
        lastName,
        name,
        phone, 
        profilePic
    });
    res.json({message: "Customer updated"})
}
export default costumerController;
