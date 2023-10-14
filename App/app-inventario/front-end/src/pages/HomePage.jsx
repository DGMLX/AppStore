import {Box, Button, Grid, IconButton, TextField, Typography} from "@mui/material";
import NavbarDrawer from "../components/NavbarDrawer";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ModalAdd from "../components/ModalAdd";
import { useState } from "react";

const HomePage = () =>{

  const [modalOpen,setModalOpen] = useState(false);
    const handleModalAdd = () =>{
        setModalOpen(true)
    }
  return(
    <>
      <Grid className="caja-body-principal"  sx={{height:"100vh",width:"100vw"}}>
        <NavbarDrawer/>
        <Box sx={{display:"flex",justifyContent:"flex-end",alignItems:"center",mt:2}}>
          <Typography>Agregar</Typography>
          <IconButton onClick={handleModalAdd} color="primary"><AddCircleOutlineIcon/></IconButton>  
        </Box>
        <Typography align="center"  variant="h4">Tu inventario</Typography>
        <Typography mt={3} align="center">Escribe el nombre de algùn producto para filtrar:</Typography>
        <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",mt:2}}>
          <TextField placeholder="Nombre del producto" sx={{mx:2}}/> <Button variant="contained">Buscar</Button>
        </Box>
      </Grid>
      <ModalAdd modalOpen={modalOpen} setModalOpen={setModalOpen}/>
    </>
  )
}

export default HomePage