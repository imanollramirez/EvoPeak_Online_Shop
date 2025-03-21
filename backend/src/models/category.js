import {model, Schema} from "mongoose"

const categorySchema = new Schema({

    description:{
        type: String,
        require: true,
        maxLenght: 200
        

    },
    name: {
        type: String,
        require: true
    }
    



    
}, {
    timestamps: true,
    strict: false
})

export default model("Category", categorySchema);