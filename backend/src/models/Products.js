/*
Campos: 
Nombre
Stock
Precio
idCategoria
Imagen
*/

import { Schema, model} from "mongoose";

const ProductsSchema = new Schema(
{

Name: {

    type: String,
    require: true,
    maxLenght: 50
},

Stock:{

    type: Number,
    require: true
},


Price:{

    type: Number,
    require: true
},

idCategory:{

    type: Schema.Types.ObjectId,
    ref: "idCategoria",
    require: true
},

Image: {

    type: String,
    require: true,
    
}


},

{
    timestamps: true,
    strict: false,
}
);

export default model ("Products", ProductsSchema);