import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import productosDB from "../data/productos";
import { useContext } from "react";
import AppContext from "../context/appContext";
import Producto from "./Producto";

const CardProducto = () =>{

    const {productos,setProductos,agregarProducto} = useContext(AppContext)

    return(
        <>
        <Typography align="center" variant="h3" my={5}>Productos</Typography>
        <Box sx={{display:"flex",justifyContent:"space-around",flexWrap:"wrap"}}>
        {
            productosDB.map(producto=>{
                return(
                    <Producto key={producto.id} producto={producto}/>
                )
            })
        }
        </Box>
        </>
    )
}

export default CardProducto;