import { Box, Button, Divider, Link, Modal, TextField, Typography } from "@mui/material"
import { useContext, useState } from "react"
import AppContext from "../context/appContext";


const ModalLogin = () =>{

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

   

   const {openModalRegister,setOpenModalRegister,openModalLogin,setOpenModalLogin}=useContext(AppContext)

    const handleClose = ()=>setOpenModalLogin(false)

    const handleRegister=() =>{
        
        setOpenModalLogin(false)
        setOpenModalRegister(true)
    }
    return(
        <>
            <Modal
                open={openModalLogin}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography mb={2} align="center" id="modal-modal-title" variant="h6" component="h2">
                        Iniciar sesión
                    </Typography>
                    <Divider/>
                    <Box>
                        <Typography align="center" id="modal-modal-description" sx={{ mt: 2 }}>
                            Correo electronico
                        </Typography>
                        <Box sx={{display:"flex",justifyContent:"center"}}>
                            <TextField type="email" label="Ingresa tu correo"/>
                        </Box>
                        <Typography align="center" id="modal-modal-description" sx={{ mt: 2 }}>
                            Contraseña
                        </Typography>
                        <Box sx={{display:"flex",justifyContent:"center"}}>
                            <TextField type="password" label="Ingresa tu contraseña..."/>
                        </Box>
                        
                    </Box>

                    <Box sx={{display:"flex",justifyContent:"center"}}>
                        <Button sx={{mt:2,mb:2}} variant="contained">Ingresar</Button>
                    </Box>
                    <Typography align="center">¿No tienes cuenta? <Link onClick={handleRegister}>Registrate</Link></Typography>
                </Box>
            </Modal>
        </>
    )
}

export default ModalLogin