import { Typography } from "@mui/material"
import { useParams } from "react-router-dom"
import productosDB from "../data/productos"
import Producto from "../components/Producto"

const ProductosCategoriaPage = () =>{

    const {categoria} = useParams()

    return(
        <>
            <Typography align="center" variant="h3" my={5}>{categoria}</Typography>
            {
                productosDB.map(producto=>{
                    if(producto.categoria === categoria){
                        return (
                            <Producto key={producto.id} producto={producto}/>
                        )
                    }
                })
            }
        </>
    )
}

export default ProductosCategoriaPage