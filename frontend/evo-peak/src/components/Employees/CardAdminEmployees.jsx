
import React, { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import RegisterEmployees from "./RegisterEmployees.jsx";
import useDataEmployees from "./Hooks/useDataEmployees.jsx";

const MySwal = withReactContent(Swal);

const CardAdminEmployees = ({ employee, deleteEmployee }) => {
  const { updateEmployee } = useDataEmployees();
  const [showModal, setShowModal] = useState(false);

  const handleDelete = (e) => {
    e.stopPropagation();

    MySwal.fire({
      title: "¿Deseas eliminar este empleado?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteEmployee(employee._id);
        MySwal.fire({
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

  const handleUpdate = () => {
    MySwal.fire({
      title: "Actualizar Empleado",
      html: (
        <RegisterEmployees
          employee={employee}
          onUpdate={(updatedEmployee) => {
            updateEmployee(updatedEmployee);
            MySwal.fire("¡Actualizado!", "El empleado ha sido actualizado.", "success");
          }}
          onCancel={() => MySwal.close()}
        />
      ),
      showConfirmButton: false,
      showCancelButton: false,
      customClass: {
        popup: "my-swal-popup",
        title: "my-swal-title",
      },
      width: "600px",
      background: "#f9fafb",
      backdrop: "rgba(0, 0, 0, 0.5)",
      showCloseButton: true,
    });
  };

  return (
    <div className="employee-card">
      <span className="employee-name">{employee.name} {employee.lastName}</span>
      <span className="employee-phone">{employee.phone}</span>
      <span className="employee-dui">{employee.dui}</span>
      <span className="employee-salary">${employee.salary}</span>
      <span className="employee-isss">{employee.isss}</span>
       <img src={employee.profilePic} className="employee-img" />

      <div className="employee-buttons">
        <button id="delete-btn" onClick={handleDelete}>
          <i className="fa-solid fa-trash"></i>
        </button>
        <button id="edit-btn" onClick={handleUpdate}>
          <i className="fa-solid fa-pen"></i>
        </button>
      </div>
    </div>
  );
};

export default CardAdminEmployees;
