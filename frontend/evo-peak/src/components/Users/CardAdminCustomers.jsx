import React from "react";
import RegisterCustomer from "./RegisterCustomers2.jsx";
import useDataCustomer from "./Hooks/useDataCustomers.jsx";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const CardAdminCustomers = ({ customer, onDelete }) => { 

const {customers,updateCustomer} = useDataCustomer();

  const handleUpdate = () => {
    MySwal.fire({
      title: "Actualizar Cliente",
      html: (
        <RegisterCustomer
          customer={customers}
          onUpdate={(updateCus) => {
            updateCustomer(updateCus);
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
        onDelete(customer._id);
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

  return(
    <>
  <div className="customer-card">
    <span className="customer-img-box">
      <img
        src={customer.profilePic}
        alt={customer.name}
        className="customer-img"
      />
    </span>
    <span className="customer-name">{customer.name}</span>
    <span className="customer-lastname">{customer.lastName}</span>
    <span className="customer-phone">{customer.phone}</span>
    <span className="customer-email">{customer.email}</span>
    <span className="customer-dui">{customer.dui}</span>
    <span className="customer-actions">
      <button className="icon-btn" onClick={handleDelete}>
        <i className="fa-solid fa-trash"></i>
      </button>
      <button className="icon-btn" onClick={handleUpdate}>
        <i className="fa-solid fa-pen"></i>
      </button>
    </span>
  </div>
    </>
  )
};

export default CardAdminCustomers;
