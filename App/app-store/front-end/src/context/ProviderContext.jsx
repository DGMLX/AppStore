import { useEffect, useState } from "react"
import AppContext from "./appContext"
import { Alert,  Snackbar } from "@mui/material";
import { registerRequest } from "../api/auth";

const ProviderContext = ({children}) =>{
    let total = 0;
    let cantidadDeProductos = 0;
    const[openAlertaAdd,setOpenAlertaAdd] = useState(false);
    const[openAlertaDelete,setOpenAlertaDelete] = useState(false);
    const [openAlertaRegistro,setOpenAlertaRegistro] = useState(false);
    const [productos,setProductos] = useState([]);
    const [totalPagar,setTotalPagar] = useState(0);
    const [cantidadProductos,setCantidadProductos] = useState(0)
    const [openModalRegister,setOpenModalRegister] = useState(false)
    const [openModalLogin,setOpenModalLogin] = useState(false)
    const [openDrawerPerfil,setOpenDrawerPerfil] = useState(false)
    const [user,setUser] = useState({})
    const [isAuthenticated,setIsAuthenticated] = useState(false);

    const signUp = async (user) =>{
        try {
            const res = await registerRequest(user);
            setUser(res.data)
            setIsAuthenticated(true);
            setOpenModalRegister(false)
            setOpenAlertaRegistro(true)
            console.log(user)
        } catch (error) {
            console.log(error)
        }
        
    }


    const agregarProducto = (producto) =>{
        
        const newProducto={
            id:producto.id,
            nombre:producto.nombre,
            categoria:producto.categoria,
            descripcion:producto.descripcion,
            precio:producto.precio,
            cantidad:1,
        }
        if(productos.length===0){
            setProductos([newProducto])
        }else{
            const existe = productos.some(product=>product.id === newProducto.id)
            if(existe){
                const arregloProductos = productos.map(product=>{
                    if(product.id === newProducto.id){
                        product.cantidad++;
                        return product;
                    }else{
                        return product;
                    }
                })
                setProductos([...arregloProductos]);
            }else{
                setProductos([...productos,newProducto])            
            }
        }
        setOpenAlertaAdd(true)
        
    }
  
    const calcularTotalPagar = () =>{
        productos.forEach(product=>total = total + (product.precio*product.cantidad))
        setTotalPagar(total)
    }

    const calcularTotalDeProductos = () =>{
        productos.forEach(producto=>{
            cantidadDeProductos += producto.cantidad
        })
        setCantidadProductos(cantidadDeProductos)
    }

    const eliminarProducto = (id) =>{
        const filtroProductos = productos.filter(product=>product.id!==id)
        setProductos([...filtroProductos])
        setOpenAlertaDelete(true)
    }

    return(

        <AppContext.Provider value={{productos,setProductos,agregarProducto,totalPagar,setTotalPagar,eliminarProducto,calcularTotalPagar,cantidadProductos,calcularTotalDeProductos,openModalRegister,setOpenModalRegister,openModalLogin,setOpenModalLogin,setOpenAlertaAdd,openAlertaAdd,openAlertaDelete,setOpenAlertaDelete,signUp,user,isAuthenticated,openAlertaRegistro,setOpenAlertaRegistro,openDrawerPerfil,setOpenDrawerPerfil}}>
            {children}
        </AppContext.Provider>
    )
}

export default ProviderContext