import {Schema, model} from "mongoose";


const productoSchema = new Schema({
    nombre:{
        type:String,
        required:true,
        trim:true
    },
    categoria:{
        type:String,
        required:true,
        trim:true
    },
    precio:{
        type:Number,
        required:true,
        trim:true
    },
    stock:{
        type:Number,
        required:true,
        trim:true
    },
    descripcion:{
        type:String,
        required:true,
        trim:true
    }

},{
    timestamps:true
})

export default model("Product",productoSchema)