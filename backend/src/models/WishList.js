/*
    Lista de deseos:
    idProducto
    idCliente
*/

import {Schema , model} from "mongoose";

const wishListModel = new Schema ({

    idProducts: [{
        type: Schema.Types.ObjectId,
        ref: "WishList",
        require: true
    }],

    idCostumers: {
        type: Schema.Types.ObjectId,
        require: true
    }
},
{
    timestamps: true,
    strict: false
});

export default model("WishList",wishListModel)