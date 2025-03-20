/*
    Ventas:
    idPedido
    Fecha
*/

import {Schema , model} from "mongoose";

const salesModel = new Schema({

    idOrders: {
    type: Schema.Types.ObjectId,
    ref: "Sales",
    require: true
    },
    
    Date: {
        type: Date,
        require: true
    }
},
{
    timestamps: true,
    strict: false
});

export default model("Sales", salesModel)