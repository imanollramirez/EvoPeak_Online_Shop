/*
Campos: 




*/

import { Schema, model} from "mongoose";

const OrdersSchema = new Schema(
{



    idCostumers: {
 
        type: Schema.Types.ObjectId,
        ref: "costumers",
        required: true,

    },

products: [

{

    idProduct: {
 
        type: Schema.Types.ObjectId,
        ref: "Products",
        required: true,

    },

    quantity: {




        type: Number,

        min: [1, "La cantidad debe ser al menos 1"],
        required: true,

    },

    subtotal: {


        type: Number,
        required: true,
        min: [0, "El subtotal no puede ser negativo"],


    },

},



],

total: {

    type: Number,
    required: true,
    min: [0, "El total no puede ser negativo"]
},

status: {

    type: String,
    required: true,
   
}


},

{
    timestamps: true,
    strict: false,
}
);

export default model ("Orders", OrdersSchema);