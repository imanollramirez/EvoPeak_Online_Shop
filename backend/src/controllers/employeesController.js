const employeesController = {};
import employeesModel from "../models/employees.js";


//Select del CRUD 
employeesController.getEmployee = async (req, res) => {

    const employee = await employeesModel.find();
    res.json(employee)
}

//Insert del CRUD
employeesController.createEmployee = async(req, res) => {

    const{name, lastName, phone, dui, salary, isss, profilePic} = req.body;
    const newEmployee = new employeesModel({name, lastName, phone, dui, salary, isss, profilePic});


    await newEmployee.save();
    res.json({message: "Employee created"})
}

employeesController.deleteEmployee = async(req, res) => {
    await employeesModel.findOneAndDelete(req.params.id)
    res.json({message: "Employee deleted"})

}

employeesController.updateEmployee = async(req, res) => {
    const{name, lastName, phone, dui, salary, isss, profilePic} = req.body;

    await employeesModel.findOneAndUpdate(req.param.id, {
      name, 
      lastName, 
      phone, 
      dui, 
      salary, 
      isss,
      profilePic
    });
    res.json({message: "Employee updated"})
}
export default employeesController;
