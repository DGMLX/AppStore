import { AppBar, Drawer, IconButton, Toolbar, Typography ,Button} from "@mui/material";
import { useState } from "react";
import NavbarListDrawer from "./NavbarListDrawer";
import MenuIcon from '@mui/icons-material/Menu';
import {Link as linkRouter} from "react-router-dom"
import ModalAdd from "./ModalAdd";

const NavbarDrawer = () =>{
    const [open,setOpen] = useState(false);
    

    return(
        <>
            <AppBar position="static">
                <Toolbar sx={{display:"flex",justifyContent:"space-between"}}>
                    <IconButton  color="inherit" size="large" edge="start" aria-label="menu" onClick={()=>setOpen(true)} sx={{display:{xs:"block",sm:"none"}}}>
                       <MenuIcon color="inherit"/>
                    </IconButton>
                    <Typography>Nombre del negocio</Typography>
                    <Button component={linkRouter} variant="contained" color="primary" to="/login">
                        <Typography sx={{color:"white"}}>Logout</Typography>
                    </Button>
                </Toolbar>
                
            </AppBar>

            <Drawer anchor="left" open={open} onClose={()=>setOpen(false)} sx={{display:{xs:"block",sm:"none"}}}>
               <NavbarListDrawer/> 
            </Drawer>    
            
        </>
    )
}

export default NavbarDrawer;