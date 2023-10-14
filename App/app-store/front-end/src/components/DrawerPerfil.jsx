import { Divider, Drawer, List, ListItem, ListItemButton, Typography } from "@mui/material"
import { useContext } from "react"
import AppContext from "../context/appContext"


const DrawerPerfil = () =>{

    const {openDrawerPerfil,setOpenDrawerPerfil,user} = useContext(AppContext)

    const cerrarDrawer=()=>{
        setOpenDrawerPerfil(false)

    }

    return(
        <Drawer
        open={openDrawerPerfil}
        anchor="right"
        onClose={()=>setOpenDrawerPerfil(false)}
    >
        <List>
                    <Typography>{user.username}</Typography>
                    <Divider/>
                    <ListItem sx={{mt:2}}>
                        <ListItemButton onClick={()=>cerrarDrawer()}>
                            <Typography>Perfil</Typography>
                        </ListItemButton>
                    </ListItem>
                    <ListItem sx={{mt:2}}>
                        <ListItemButton onClick={()=>cerrarDrawer()}>
                            <Typography>Mensajes</Typography>
                        </ListItemButton>
                    </ListItem>
                    <ListItem sx={{mt:2}}>
                        <ListItemButton onClick={()=>cerrarDrawer()}>
                            <Typography>Direccion</Typography>
                        </ListItemButton>
                    </ListItem>
                    <ListItem sx={{mt:2}}>
                        <ListItemButton onClick={()=>cerrarDrawer()}>
                            <Typography>Tus compras</Typography>
                        </ListItemButton>
                    </ListItem>
                    <ListItem sx={{mt:2}}>
                        <ListItemButton onClick={()=>cerrarDrawer()}>
                            <Typography>Cerrar sesion</Typography>
                        </ListItemButton>
                    </ListItem>
                    
                </List>
    </Drawer>
    )
}

export default DrawerPerfil