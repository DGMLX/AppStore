import mongoose from "mongoose";

export const connectDB = async () =>{
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/pruebadb",{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("Conectado a la base de datos")
    }catch(error){
        console.log(error)
    }
}