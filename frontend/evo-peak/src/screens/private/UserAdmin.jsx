import React from "react";
import Derecho from "../../assets/Rectangle 474.png";
import Izquierdo from "../../assets/Rectangle 475.png";
import "./UserAdmin.css"; // Crea o adapta tu CSS según el diseño

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import useDataCustomers from "../../components/Users/Hooks/useDataCustomers.jsx";
import ListCustomers from "../../components/Users/ListCustomers.jsx";
import RegisterCustomer from "../../components/Users/RegisterCustomers2.jsx";

const MySwal = withReactContent(Swal);

const UserAdmin = () => {
  const { customers, createCustomer, updateCustomer, deleteCustomer } = useDataCustomers();

  // Handler para agregar nuevo usuario
  const AddNewUser = (e) => {
    e.stopPropagation();
    MySwal.fire({
      title: "Agregar Cliente",
      html: (
        <RegisterCustomer
          onUpdate={(data) => {
            createCustomer(data);
            MySwal.fire({
              icon: "success",
              title: "Cliente agregado con éxito!",
              toast: true,
              position: "top-end",
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
            });
          }}
          onCancel={() => MySwal.close()}
        />
      ),
      showCancelButton: false,
      showConfirmButton: false,
    });
  };

  return (
    <div className="user-page-container">
      <img src={Izquierdo} className="triangulo-izquierdo" alt="Triángulo Izquierdo" />
      <img src={Derecho} className="triangulo-derecho" alt="Triángulo Derecho" />

      <div className="user-page">
        <div className="user-header">
          <h1>Usuarios</h1>
          <button className="add-btn-user" onClick={AddNewUser} style={{ width: "180px" }}>
            Agregar <i className="fa-solid fa-user-plus text-light ms-2"></i>
          </button>
        </div>
        <div className="user-table-header">
          <span className="text-light">Foto</span>
          <span>Nombre</span>
          <span>Apellido</span>
          <span>Telefono</span>
          <span>Correo</span>
          <span>DUI</span>

        </div>
        <ListCustomers
          customers={customers}
          deleteCustomer={deleteCustomer}
          updateCustomer={updateCustomer}
        />
      </div>
    </div>
  );
};

export default UserAdmin;
