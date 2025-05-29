import React, { useState } from "react";
import Swal from "sweetalert2";
import RegisterEmployees from "./RegisterEmployees.jsx";
import useDataEmployees from "./Hooks/useDataEmployees.jsx";

const CardAdminEmployees = ({ employee, deleteEmployee }) => {
  const { updateEmployee } = useDataEmployees();
  const [showModal, setShowModal] = useState(false);

  const handleDelete = (e) => {
    e.stopPropagation();

    Swal.fire({
      title: "¿Deseas eliminar este empleado?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteEmployee(employee._id);
        Swal.fire({
          icon: "success",
          title: "Eliminado con éxito!",
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        });
      }
    });
  };

  const handleUpdate = (e) => {
    e.stopPropagation();
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="employee-card">
        <img src={employee.profilePic} alt={`${employee.name} ${employee.lastname}`} className="employee-img" />
        <span className="employee-name">{employee.name} {employee.lastname}</span>
        <span className="employee-phone">{employee.phone}</span>
        <span className="employee-dui">{employee.dui}</span>
        <span className="employee-salary">${employee.salary}</span>
        <span className="employee-isss">${employee.isss}</span>

        <div className="employee-buttons">
          <button id="delete-btn" onClick={handleDelete}>
            <i className="fa-solid fa-trash"></i>
          </button>
          <button id="edit-btn" onClick={handleUpdate}>
            <i className="fa-solid fa-pen"></i>
          </button>
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <RegisterEmployees
              employee={employee}
              onUpdate={(updatedEmployee) => {
                updateEmployee(updatedEmployee);
                Swal.fire("¡Actualizado!", "El empleado ha sido actualizado.", "success");
                setShowModal(false);
              }}
              onCancel={handleCloseModal}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default CardAdminEmployees;
