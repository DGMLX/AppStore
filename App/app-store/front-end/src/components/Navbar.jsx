import {Box,AppBar,Toolbar, Typography,IconButton,Badge} from "@mui/material"
import { useContext, useEffect, useState } from "react"
import DrawerNav from "./DrawerNav"
import DrawerCart from "./DrawerCart";
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import ModalLogin from "./ModalLogin";
import AppContext from "../context/appContext";
import ModalRegister from "./ModalRegister";
import DrawerPerfil from "./DrawerPerfil";


const Navbar = ()=>{
    const [open,setOpen] = useState(false)
    const [openCart,setOpenCart] = useState(false)
    const {cantidadProductos,productos,calcularTotalDeProductos,setOpenModalLogin,user,openDrawerPerfil,setOpenDrawerPerfil,isAuthenticated} = useContext(AppContext)

    const validacionAutentificacion = () =>{
        if(user){
            return <IconButton onClick={()=>setOpenDrawerPerfil(true)} sx={{color:"white"}}><PersonIcon/></IconButton>
        }else{
            return <IconButton onClick={()=>setOpenModalLogin(true)} sx={{color:"white"}}><PersonIcon/></IconButton>
        }
    }


    useEffect(()=>{
        calcularTotalDeProductos()
    },[productos])
    return(
        <>
            <Box>
                <AppBar position="fixed">
                    <Toolbar sx={{display:"flex",justifyContent:"space-between"}}>
                        <IconButton onClick={()=>setOpen(true)} sx={{color:"white"}}><MenuIcon/></IconButton>
                        <Typography>Nombre almacen</Typography>
                        <Box>   
                            <Badge  badgeContent={cantidadProductos}  color="error" >
                                <IconButton onClick={()=>setOpenCart(true)} sx={{color:"white"}}><ShoppingCartIcon/></IconButton>
                            </Badge>
                            {
                                isAuthenticated ? <IconButton onClick={()=>setOpenDrawerPerfil(true)} sx={{color:"white"}}><PersonIcon/></IconButton> : <IconButton onClick={()=>setOpenModalLogin(true)} sx={{color:"white"}}><PersonIcon/></IconButton>
                            }            
                            
                        </Box>
                    </Toolbar>

                </AppBar>
            </Box>
            
            <DrawerNav open={open} setOpen={setOpen}/>
            <ModalLogin/>
            <ModalRegister/>
            <DrawerPerfil/>
            <DrawerCart openCart={openCart} setOpenCart={setOpenCart}/>
            
        </>
    )
}

export default Navbar