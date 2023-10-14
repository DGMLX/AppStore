import { Divider, Drawer, List, ListItem, ListItemButton, Typography } from "@mui/material"
import {Link as LinkRouter} from "react-router-dom";

const DrawerNav = ({open,setOpen}) =>{
    const categorias = ["Bebidas","Galletas","Lacteos","Dulces"]

    const cerrarDrawer=()=>{
        setOpen(false)

    }
    return(
        <>
            <Drawer
                open={open}
                onClose={()=>setOpen(false)}
            >
                <List>
                    <Typography>Categorias</Typography>
                    <Divider/>
                    <ListItem sx={{mt:2}}>
                        <ListItemButton onClick={()=>cerrarDrawer()} component={LinkRouter} to="/">
                            <Typography>Inicio</Typography>
                        </ListItemButton>
                    </ListItem>
                    {categorias.map(categoria=>{
                        return(
                            <ListItem key={categoria.charAt(0)}>
                                <ListItemButton component={LinkRouter} onClick={()=>cerrarDrawer()} to={categoria}>
                                    <Typography>{categoria}</Typography>
                                </ListItemButton>
                            </ListItem>
                        )
                    })}
                </List>
            </Drawer>
        </>
    )
}

export default DrawerNav