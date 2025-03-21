import {model, Schema} from "mongoose"

const employeesSchema = new Schema({

    name: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true, 
    },

    phone: {
        type: String,
        require: true,
        match: [
            /^[0-9]{8}$/,
            "El numero de telefono debe contener exactamente 8 números"
        ]
    },
   dui: {
    type: String,
    require: true,
    unique: true,
    match: [
        /^[0-9]{9}$/,
        "El numero de dui debe contener exactamente 9 carácteres"
    ]
   },
   salary: {
    type: Number,
    require:true
   },
   isss: {
    type: Number,
    require:true,
    match: [
        /^[0-9]{9}$/,
        "El numero de isss debe contener exactamente 9 números"
    ]
    
   },
    profilePic: {
         type: String,
         require: true,
         maxLenght: 300,
        validate: {
         validator: (value) => {
            const urlRegex = /^https?:\/\/[^\s]+$/;
           return urlRegex.test(value);
         },
        message: props => `${props.value} no es una URL válida para una imagen`
        }
            
    }
}, {
    timestamps: true,
    strict: false
})

export default model("Employees", employeesSchema);
