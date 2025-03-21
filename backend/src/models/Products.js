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

Nombre: {

    type: String,
    require: true,
    maxLenght: 50
},

Stock:{

    type: Number,
    require: true
},


Precio:{

    type: Number,
    require: true
},

idCategoria:{

    type: Schema.Types.ObjectId,
    ref: "idCategoria",
    require: true
},

Imagen: {

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