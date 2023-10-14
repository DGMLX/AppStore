import express from "express";
import morgan from "morgan";
import authRoutes from "./routes/auth.routes.js"
import productoRoutes from "./routes/producto.routes.js"
import cookieParser from "cookie-parser";
import cors from "cors"

const app = express();

app.use(cors({
    origin:"http://localhost:5173"
}))
app.use(morgan("dev"))
app.use(cookieParser());
app.use(express.json())
app.use("/api",authRoutes)
app.use("/api",productoRoutes)

export default app;