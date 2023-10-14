import app from "./app.js";
import { connectDB } from "./db.js";

app.listen(4000,()=>{
    console.log("server running on port 4000")
});
connectDB()