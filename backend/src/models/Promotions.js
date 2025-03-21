/*
    Promociones:
    Discount
    idProducts
*/

import {Schema, model} from 'mongoose';

const promotionsSchema = new Schema ({
    Discount: {
        type: Number,
        require: true,
        max: 90
    },

    idProducts: {
        type: Schema.Types.ObjectId,
    ref: "Products",
    require: true
    }
},
{
    timestamps: true,
    strict: false
});

export default model("Promotions",promotionsSchema)