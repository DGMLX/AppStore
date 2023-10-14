import {Router} from "express"
import { authRequired } from "../middlewares/validateToken.js"
import { addProducto, deleteProducto, getProducto, getProductos, updateProducto } from "../controllers/producto.controllers.js";

const router = Router()

router.get("/productos",authRequired,getProductos)
router.get("productos/:id",authRequired,getProducto);
router.post("/productos/agregar",authRequired,addProducto);
router.delete("/productos/:id",authRequired,deleteProducto);
router.put("/productos/:id",authRequired,updateProducto);

export default router