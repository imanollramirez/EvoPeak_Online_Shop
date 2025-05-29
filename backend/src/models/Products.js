/*
Campos: 
Nombre
Stock
Precio
idCategoria
Imagen
*/

import { Schema, model } from "mongoose";

const ProductsSchema = new Schema(
    {

        name: {

            type: String,
            require: true,
            maxLenght: 50
        },

        stock: {

            type: Number,
            require: true
        },


        price: {

            type: Number,
            require: true
        },

        idCategory: {

            type: Schema.Types.ObjectId,
            ref: "idCategoria",
            require: true
        },

        image: {

            type: String,
            require: true,

        },
        imagePublicID: {
            type: String,
            require: true,
        }


    },

    {
        timestamps: true,
        strict: false,
    }
);

export default model("Products", ProductsSchema);