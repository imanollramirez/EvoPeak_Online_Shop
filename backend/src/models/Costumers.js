import {model, Schema} from "mongoose"

const costumerSchema = new Schema({
    direction: {
        type: String,
        require: true, 
        maxlength: 300 
    },
    email: {
        type: String,
        require: true,
        unique: true, // Evita duplicados
        validate: {
            validator: (value) => {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return emailRegex.test(value);
            },
            message: props => `${props.value} no es un email válido`
        }
    },
    lastName: { 
        type: String,
        require: true, 
    },
    name: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true,
        unique: true,
        match: [
            /^[0-9]{8}$/,
            "El numero de telefono debe contener exactamente 8 números"
        ]
    },
    profilePic: {
         type: String,
         require: true,
         maxLenght: 300
            
    }
}, {
    timestamps: true,
    strict: false
})

export default model("Costumers", costumerSchema);
