//ComboBox
import React, { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import useDataCategories from "./Hooks/useDataCategories.jsx"; 
import "./Categories.css";

const MySwal = withReactContent(Swal);

const CardAdminCategories = ({ category, deleteCategory }) => {

  const { updateCategories } = useDataCategories();

  const handleDelete = (e) => {
    e.stopPropagation();

    MySwal.fire({
      title: "¿Deseas eliminar esta categoría?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteCategory(category._id);
        MySwal.fire({
          icon: "success",
          title: "Eliminada con éxito!",
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
  let selectedCategoryName = category.name;
  let selectedCategoryDescription = category.description;

  MySwal.fire({
    title: "Actualizar Categoría",
    html: `
      <input id="swal-input1" class="swal2-input" placeholder="Nombre" value="${selectedCategoryName}">
      <textarea id="swal-input2" class="swal2-textarea" placeholder="Descripción">${selectedCategoryDescription}</textarea>`,
    showCancelButton: true,
    confirmButtonText: "Actualizar",
    focusConfirm: false,
    preConfirm: () => {
      const name = document.getElementById("swal-input1").value.trim();
      const description = document.getElementById("swal-input2").value.trim();

      if (!name || !description) {
        Swal.showValidationMessage("Por favor completa todos los campos");
      }

      return { id: category._id, name, description }; 
    },
  }).then((result) => {
    if (result.isConfirmed) {
      const { id, name, description } = result.value;

      updateCategories({ id, name, description });

      MySwal.fire({
        icon: "success",
        title: "Categoría actualizada con éxito!",
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
    <div className="category-card">
      <span className="category-name">{category.name}</span>
      <span className="category-description">{category.description}</span>

      <div className="category-buttons">
        <button onClick={handleUpdate}>
          <i className="fa-solid fa-pen"></i>
        </button>
        <button onClick={handleDelete}>
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default CardAdminCategories;
