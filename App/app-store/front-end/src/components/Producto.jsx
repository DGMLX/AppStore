import { Alert, Box, Button, Card, CardActions, CardContent, CardMedia, Snackbar, Typography } from "@mui/material";
import { useContext } from "react";
import AppContext from "../context/appContext";



const Producto = ({producto}) =>{

    const {agregarProducto,setOpenAlertaAdd,openAlertaAdd} = useContext(AppContext)

    return(
        <>
            <Card  sx={{mb:4,width:"40%"}}>
                <CardContent>
                    <CardMedia
                        component="img"
                        alt={producto.nombre}
                        height="140"
                        image={`/imgProductos/${producto.urlImg}`}
                    />
                    <Typography variant="h6" align="center" my={2}>{producto.nombre}</Typography>
                    <Typography variant="body2" color="text.secondary">
                        {producto.descripcion.substring(0,100)}.....
                    </Typography>
                </CardContent>
                <Box sx={{display:"flex",justifyContent:"space-evenly"}}>
                    <CardContent>
                        <Typography>${producto.precio}</Typography>
                    </CardContent>

                    <CardActions>
                        <Button onClick={()=>agregarProducto(producto)}>Add Cart</Button>
                    </CardActions>
                </Box>
                

            </Card>
            <Snackbar
                open={openAlertaAdd}
                autoHideDuration={500}
                onClose={() => setOpenAlertaAdd(false)}
                anchorOrigin={{ vertical: "top", horizontal: "left" }}
            >
                <Alert
                severity="success"
                variant="filled"
                >
                    Producto agregado al carrito
                </Alert>
        </Snackbar>
        </>
    )
}

export default Producto;