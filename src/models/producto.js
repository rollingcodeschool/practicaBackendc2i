import mongoose, {Schema} from "mongoose";
// {
//     "nombreProducto": "brownie",
//     "imagen": "https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     "precio": "400",
//     "categoria": "bebida-fria"
//   },

const productoSchema = new Schema({
    nombreProducto: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 50,
        unique: true
    },
    imagen:{
        type: String,
        required: true
    },
    precio:{
        type: Number,
        required: true,
        min: 0,
        max: 9000
    },
    categoria:{
        type: String,
        required: true,
        maxlength: 40
    }
});

const Producto = mongoose.model('producto', productoSchema)

export default Producto;