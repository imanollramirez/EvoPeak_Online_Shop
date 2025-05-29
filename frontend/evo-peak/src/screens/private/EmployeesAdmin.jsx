import Derecho from "../../assets/Rectangle 474.png";
import Izquierdo from "../../assets/Rectangle 475.png";
import "./EmployeesAdmin.css";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import useDataEmployees from "../../components/Employees/Hooks/UseDataEmployees.jsx";
import ListEmployees from "../../components/Employees/ListEmployees.jsx";

const MySwal = withReactContent(Swal);

const AddNewEmployee = (e) => {
  e.stopPropagation();

  MySwal.fire({
    title: "Agregar empleado",
    html: `
      <input id="swal-input1" class="swal2-input" placeholder="Nombre">
      <input id="swal-input2" class="swal2-input" placeholder="Apellido">
      <input id="swal-input3" class="swal2-input" placeholder="Numero de Telefono">
      <input id="swal-input4" class="swal2-input" placeholder="DUI">
      <input id="swal-input5" class="swal2-input" placeholder="Salary">
      <input id="swal-input6" class="swal2-input" placeholder="ISSS">
      <input id="swal-input3" class="swal2-input" placeholder="Foto de Perfil (URL)">
    `,
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Agregar",
  }).then((result) => {
    if (result.isConfirmed) {
      MySwal.fire({
        icon: 'success',
        title: 'Empleado agregado con éxito!',
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true
      });
    }
  });
};

const EmployeesAdmin = () => {
  const { employees, updateEmployee, deleteEmployee } = useDataEmployees();

  return (
    <div className="employee-page-container">
      <img src={Izquierdo} className="triangulo-izquierdo" alt="Triángulo Izquierdo" />
      <img src={Derecho} className="triangulo-derecho" alt="Triángulo Derecho" />

      <div className='employee-page'>
        <div className="employee-header">
          <h1>Empleados</h1>
          <button className="add-btn-employee" onClick={AddNewEmployee}>Agregar <i className="fa-solid fa-user-plus text-light ms-2"></i></button>
        </div>
        <div className="employee-table-header">
          <span>Nombre</span>
          <span>Telefono</span>
          <span>DUI</span>
          <span>Salario</span>
        </div>

        <ListEmployees
          employees={employees}
          deleteEmployee={deleteEmployee}
          updateEmployee={updateEmployee}
        />
      </div>
    </div>
  );
};

export default EmployeesAdmin;
