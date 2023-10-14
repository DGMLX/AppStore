import { Alert, Box, Button, Divider, Drawer, List,Snackbar,Typography } from "@mui/material"
import { useContext, useEffect, useState } from "react"
import TablaProductos from "./TablaProductos"
import AppContext from "../context/appContext"
let total = 0;

const DrawerCart = ({openCart,setOpenCart}) =>{
    
    const {productos,totalPagar,setTotalPagar,calcularTotalPagar,openAlertaDelete,setOpenAlertaDelete} = useContext(AppContext)

    useEffect(()=>{
        calcularTotalPagar()
    },[productos])
    return(
        <>
            <Drawer
                open={openCart}
                anchor="bottom"
                onClose={()=>setOpenCart(false)}
            >
                <List>
                    <Typography align="center">Tus productos</Typography>
                    <Divider/>
                    {
                        productos.length === 0 ? <Typography align="center">No hay productos seleccionados</Typography> : <TablaProductos/>
                    }
                    <Box sx={{display:"flex",justifyContent:"flex-end"}}>
                        {
                            productos.length > 0 ? <Button>Pagar</Button> : ""
                        }
                        {
                            productos.length > 0 ? <Typography>${totalPagar}</Typography> : ""
                        }
                    </Box>
                    
                </List>
            </Drawer>
            <Snackbar
                open={openAlertaDelete}
                autoHideDuration={500}
                onClose={() => setOpenAlertaDelete(false)}
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            >
                <Alert
                severity="error"
                variant="filled"
                >
                    Producto eliminado del carrito
                </Alert>
        </Snackbar>
        </>
    )
}

export default DrawerCart