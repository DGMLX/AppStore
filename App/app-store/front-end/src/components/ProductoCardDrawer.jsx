import {  Box, Button,Typography } from "@mui/material"
import { useContext } from "react"
import AppContext from "../context/appContext"


const ProductoCardDrawer = ({producto}) =>{

  const {eliminarProducto,openAlertaDelete,setOpenAlertaDelete} = useContext(AppContext);

    return(
        <>
        <Box sx={{display:"flex",justifyContent:"space-between"}}>
            <Typography>{producto.nombre}</Typography>
            <Typography>${producto.precio}</Typography>
            <Typography>{producto.cantidad}</Typography>
            <Typography>${producto.precio*producto.cantidad}</Typography>
            <Button onClick={()=>eliminarProducto(producto.id)}>Eliminar</Button>
        </Box>
       
        </>

        
    )
}

export default ProductoCardDrawer