import app from "./app.js";
import {connectDB} from "./db.js";


app.listen(3000,()=>{
    console.log("servidor corriendo en el puerto 3000")
})
connectDB()