// src/Customers/CardAdminCustomers.jsx
import React, { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import RegisterCustomer from "./RegisterCustomer.jsx"; // Formulario para editar/agregar
import { useDataCustomers } from "./Hooks/useDataCustomers.jsx";

const MySwal = withReactContent(Swal);

const CardAdminCustomers = ({ customer, deleteCustomer }) => {
  const { updateCustomer } = useDataCustomers();
  const [showModal, setShowModal] = useState(false);

  const handleDelete = (e) => {
    e.stopPropagation();

    MySwal.fire({
      title: "¿Deseas eliminar este cliente?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteCustomer(customer._id);
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
      title: "Actualizar Cliente",
      html: (
        <RegisterCustomer
          customer={customer}
          onUpdate={(updatedCustomer) => {
            updateCustomer(customer._id, updatedCustomer);
            MySwal.fire("¡Actualizado!", "El cliente ha sido actualizado.", "success");
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
    <div className="customer-card">
      <img src={customer.profilePic} alt={`${customer.name} ${customer.lastName}`} className="customer-img" />
      <span className="customer-name">{customer.name} {customer.lastName}</span>
      <span className="customer-email">{customer.email}</span>
      <span className="customer-phone">{customer.phone}</span>
      <span className="customer-direction">{customer.direction}</span>

      <div className="customer-buttons">
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

export default CardAdminCustomers;
