import { useContext } from "react"
import ProductoCardDrawer from "./ProductoCardDrawer";
import AppContext from "../context/appContext";


const TablaProductos = () =>{

    const {productos} = useContext(AppContext);

    return(
        <>
        
            {
            productos.map(producto=>(
                <ProductoCardDrawer key={producto.id} producto={producto}/>
            )) 
        }
        </>
    )
}

export default TablaProductos