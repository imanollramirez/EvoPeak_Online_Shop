import { useState } from "react";
import Swal from "sweetalert2";

const useDataPromotions = () => {
    const API = "http://localhost:4000/api/promotions";
    const [id, setId] = useState("");
    const [Discount, setDiscount] = useState('');
    const [idProducts, setidProducts] = useState('');

    const fetchPromotion = async (id) => {
        try {
            const response = await fetch(`${API}/${id}`);

            if (!response.ok) {
                return null;
            }
            
            const data = await response.json();
            return data;

        } catch (error) {
            console.error(error);
            return null;
        }
    };

    const savePromotions = async (promotionData) => {
        if (
            !promotionData.idProducts ||
            !promotionData.Discount
        ) { return; }
        else {
            try {

                const response = await fetch(API, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(promotionData),
                });

                if (!response.ok) {
                    throw new Error("Error saving the promotion");
                }

                await response.json();

                Swal.fire({
                    icon: "success",
                    title: "Promoción guardada con éxito!",
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true
                });

            } catch (error) {
                console.log(error);
            }
        }
    };

    const updatePromotions = async (promotionData) => {
        if (
            !promotionData.idProducts ||
            !promotionData.Discount
        ) { return; }
        else {
            try {

                const response = await fetch(`${API}/${promotionData.id}`, {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(promotionData),
                });

                if (!response.ok) {
                    throw new Error("Error updating the promotion");
                }

                await response.json();
                Swal.fire({
                    icon: "success",
                    title: "Promoción actualizada con éxito!",
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true
                });

            } catch (error) {
                console.log(error);
            }
        }
    };

    const deletePromotions = async (id) => {
        try {
            const response = await fetch(`${API}/${id}`, {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
            });

            if (!response.ok) {
                throw new Error("Error deleting the promotion");
            }

            await response.json();
        } catch (error) {
            console.error(error);
        }
    };

    return {
        id, setId,
        idProducts, setidProducts,
        Discount, setDiscount, savePromotions,
        updatePromotions, deletePromotions,
        fetchPromotion
    };

};

export default useDataPromotions;