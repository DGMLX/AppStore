import express from "express";
import authRoutes from "./router/auth.routes.js"
import productosRoutes from "./router/producto.routes.js"
import morgan from "morgan"
import cookieParser from "cookie-parser"

const app = express();
app.use(morgan("dev"))
app.use(express.json())
app.use(cookieParser());
app.use("/api",authRoutes)
app.use("/api",productosRoutes)

export default app;