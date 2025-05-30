import Derecho from "../../assets/Rectangle 474.png";
import Izquierdo from "../../assets/Rectangle 475.png";
import "./EmployeesAdmin.css";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import useDataEmployees from "../../components/Employees/Hooks/UseDataEmployees.jsx";
import ListEmployees from "../../components/Employees/ListEmployees.jsx";

const MySwal = withReactContent(Swal);

const EmployeesAdmin = () => {
  const { employees, updateEmployee, deleteEmployee, saveEmployee } = useDataEmployees();

  const AddNewEmployee = (e) => {
    e.stopPropagation();

    let selectedImageFile = null;

    MySwal.fire({
      title: "Agregar empleado",
      html: `
        <input id="swal-input1" class="swal2-input" placeholder="Nombre">
        <input id="swal-input2" class="swal2-input" placeholder="Apellido">
        <input id="swal-input3" class="swal2-input" placeholder="Número de Teléfono">
        <input id="swal-input4" class="swal2-input" placeholder="DUI">
        <input id="swal-input5" class="swal2-input" placeholder="Salario">
        <input id="swal-input6" class="swal2-input" placeholder="ISSS">

        
        <input type="file" id="swal-input7" accept="image/*" style="display:none" />
      
        <button type="button" id="select-image-btn" style="
          background: #3085d6;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 5px;
          cursor: pointer;
          margin-top: 10px;
          width: 100%;
          font-size: 16px;
        ">
          Seleccionar imagen
        </button>
        <!-- Vista previa -->
        <div id="image-preview" style="margin-top: 10px; text-align: center;"></div>
      `,
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Agregar",
      didOpen: () => {
        const fileInput = document.getElementById("swal-input7");
        const previewDiv = document.getElementById("image-preview");
        const selectImageBtn = document.getElementById("select-image-btn");

        // Al hacer click en el botón abrir input file oculto
        selectImageBtn.addEventListener("click", () => fileInput.click());

        fileInput.addEventListener("change", (event) => {
          const file = event.target.files[0];
          if (file) {
            selectedImageFile = file;
            const reader = new FileReader();
            reader.onload = (e) => {
              previewDiv.innerHTML = `<img src="${e.target.result}" alt="Vista previa" style="width: 120px; height: 120px; object-fit: cover; border-radius: 5px;" />`;
            };
            reader.readAsDataURL(file);
          } else {
            selectedImageFile = null;
            previewDiv.innerHTML = "";
          }
        });
      },
      preConfirm: () => {
        const name = document.getElementById("swal-input1").value.trim();
        const lastName = document.getElementById("swal-input2").value.trim();
        const phone = document.getElementById("swal-input3").value.trim();
        const dui = document.getElementById("swal-input4").value.trim();
        const salary = document.getElementById("swal-input5").value.trim();
        const isss = document.getElementById("swal-input6").value.trim();

        if (!name || !lastName || !phone || !dui || !salary || !isss || !selectedImageFile) {
          MySwal.showValidationMessage("Por favor, completa todos los campos y sube una imagen");
          return false;
        }

        if (!/^\d{8}$/.test(phone)) {
          MySwal.showValidationMessage("El número de teléfono debe tener exactamente 8 dígitos");
          return false;
        }

        if (!/^\d{9}$/.test(dui)) {
          MySwal.showValidationMessage("El DUI debe tener exactamente 9 dígitos");
          return false;
        }

        if (!/^\d+$/.test(salary) || !/^\d+$/.test(isss)) {
          MySwal.showValidationMessage("Salario e ISSS deben ser números válidos");
          return false;
        }

        const formData = new FormData();
        formData.append("name", name);
        formData.append("lastName", lastName);
        formData.append("phone", phone);
        formData.append("dui", dui);
        formData.append("salary", salary);
        formData.append("isss", isss);
        formData.append("profilePic", selectedImageFile);

        return formData;
      },
    }).then((result) => {
      if (result.isConfirmed && result.value) {
        // saveEmployee debe manejar recibir FormData (ajusta backend si es necesario)
        saveEmployee(result.value);

        MySwal.fire({
          icon: "success",
          title: "Empleado agregado con éxito!",
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        });
      }
    });
  };

  return (
    <div className="employee-page-container">
      <img src={Izquierdo} className="triangulo-izquierdo" alt="Triángulo Izquierdo" />
      <img src={Derecho} className="triangulo-derecho" alt="Triángulo Derecho" />

      <div className="employee-page">
        <div className="employee-header">
          <h1>Empleados</h1>
          <button className="add-btn-employee" onClick={AddNewEmployee}>
            Agregar <i className="fa-solid fa-user-plus text-light ms-2"></i>
          </button>
        </div>
        <div className="employee-table-header">
          <span className="text-light">Foto</span>
          <span>Nombre</span>
          <span>Telefono</span>
          <span>DUI</span>
          <span>Salario</span>
          <span>ISSS</span>
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
