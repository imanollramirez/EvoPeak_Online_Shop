import {model, Schema} from "mongoose";
 
 
const saleSchema = new Schema(
    {
        product: { 
            type: String
        },
        category: {
            type: String
        },
        costumer: {
            type: String
        },
        total: {
            type: Number,
            min: 0.01,
            max: 1000
        },
        date: {
            type: Date,
            require: true
        }
       
    },{
        timestamps: true,
        strict: false
    }
)
export default model("sales", saleSchema)