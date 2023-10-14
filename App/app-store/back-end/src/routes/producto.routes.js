import {Router} from "express"
import { authRequired } from "../middlewares/validateToken.js"
import { getProducto, getProductos } from "../controllers/productos.controllers.js";

const router = Router()

router.get("/productos",authRequired,getProductos)
router.get("productos/:id",authRequired,getProducto);

export default router