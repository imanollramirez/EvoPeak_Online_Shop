const customersController = {};
import customersModel from "../models/customers.js";


//Select del CRUD 
customersController.getCustomer = async (req, res) => {

    const customer = await customersModel.find();
    res.json(customer)
}

//Insert del CRUD
customersController.createCustomer = async(req, res) => {

    const{direction, email, lastName, name, phone, profilePic} = req.body;
    const newCustomer = new customersModel({direction, email, lastName, name, phone, profilePic});


    await newCustomer.save();
    res.json({message: "Customer created"})
}

customersController.deleteCustomer = async(req, res) => {
    await customersModel.findOneAndDelete(req.params.id)
    res.json({message: "Customer deleted"})

}

customersController.updateCustomer = async(req, res) => {
    const{direction, email, lastName, name, phone, profilePic} = req.body;

    await customersModel.findOneAndUpdate(req.param.id, {
        direction,
        email, 
        lastName,
        name,
        phone, 
        profilePic
    });
    res.json({message: "Customer updated"})
}
export default customersController;
