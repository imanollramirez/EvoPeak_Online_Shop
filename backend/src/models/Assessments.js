/*
Campos: 
value
idProducts

*/

import { Schema, model} from "mongoose";

const AssessmentsSchema = new Schema(
{

value: {

    type: Int,
    require: true,
    max: 5
},

idProducts:{

    type: Schema.Types.ObjectId,
    ref: "idProducts",
    require: true
}

},

{
    timestamps: true,
    strict: false,
}
);

export default model ("Assessments", AssessmentsSchema);