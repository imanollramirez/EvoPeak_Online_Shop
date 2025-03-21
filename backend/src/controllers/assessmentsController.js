//Array de metodos (C R U D)
const assessmentsController = {};
import assessmentsModel from "../models/Assessments.js";

// SELECT
assessmentsController.getas = async (req, res) => {
  const assessments = await assessmentsModel.find();
  res.json(assessments);
};

// INSERT
assessmentsController.createAssessments = async (req, res) => {
  const { value, idProducts  } = req.body;

  const newClient = new assessmentsModel({ value, idProducts});
  await newClient.save();
  res.json({ message: "assessments saved" });
};

// DELETE
assessmentsController.deleteAssessments = async (req, res) => {
  const deletedassessments = await assessmentsModel.findByIdAndDelete(req.params.id);
  if (!deletedassessments) {
    return res.status(404).json({ message: "assessments not found" });
  }
  res.json({ message: "assessments deleted" });
};

// UPDATE
assessmentsController.updateAssessments = async (req, res) => {
  // Solicito todos los valores
  const {value, idProducts } = req.body;
  // Actualizo
  await assessmentsModel.findByIdAndUpdate(
    req.params.id,
    {
        value, idProducts
    },
    { new: true }
  );
  // muestro un mensaje que todo se actualizo
  res.json({ message: "assessments updated" });
};

export default assessmentsController;