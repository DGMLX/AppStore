import { Alert, Box, Button, Divider, Link, Modal, Snackbar, TextField, Typography } from "@mui/material"
import { useContext } from "react";
import AppContext from "../context/appContext";
import {useForm} from "react-hook-form";
import { registerRequest } from "../api/auth";


const ModalRegister = () =>{

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
    const {openModalRegister,setOpenModalRegister,openModalLogin,setOpenModalLogin,signUp,isAuthenticated,openAlertaRegistro,setOpenAlertaRegistro,user}=useContext(AppContext)
    const handleClose = ()=>setOpenModalRegister(false)
    const {register,handleSubmit} = useForm();

    const handleLogin=() =>{
        
        setOpenModalRegister(false)
        setOpenModalLogin(true)
    }
    const onSubmitRequest = handleSubmit(async (values)=>{
        signUp(values)
    })
  
    return(
        <>
            <Snackbar
                    open={openAlertaRegistro}
                    autoHideDuration={5000}
                    onClose={() => setOpenAlertaRegistro(false)}
                    anchorOrigin={{ vertical: "top", horizontal: "center" }}
                >
                    <Alert
                    severity="success"
                    variant="filled"
                    >
                        Felicidades {user.username} tu registro ha sido exitoso!
                    </Alert>
            </Snackbar>
            <Modal
                open={openModalRegister}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                <form onSubmit={onSubmitRequest}>
                    <Typography mb={2} align="center" id="modal-modal-title" variant="h6" component="h2">
                        Registrate
                    </Typography>
                    <Divider/>
                    <Box>
                        <Typography align="center" id="modal-modal-description" sx={{ mt: 2 }}>
                            Nombre de usuario
                        </Typography>
                        
                            <Box sx={{display:"flex",justifyContent:"center"}}>
                                <TextField type="text" label="Ingresa tu nombre" {...register("username",{required:true})}/>
                            </Box>

                            <Typography align="center" id="modal-modal-description" sx={{ mt: 2 }}>
                                Correo electronico
                            </Typography>
                            <Box sx={{display:"flex",justifyContent:"center"}}>
                                <TextField type="email" label="Ingresa tu correo" {...register("email",{required:true})}/>
                            </Box>

                            <Typography align="center" id="modal-modal-description" sx={{ mt: 2 }}>
                                Contraseña
                            </Typography>
                            <Box sx={{display:"flex",justifyContent:"center"}}>
                                <TextField type="password" label="Ingresa tu contraseña..." {...register("password",{required:true})}/>
                            </Box>

                            <Typography align="center" id="modal-modal-description" sx={{ mt: 2 }}>
                                Reingresa tu contraseña
                            </Typography>
                            <Box sx={{display:"flex",justifyContent:"center"}}>
                                <TextField type="password" label="Reingresa tu contraseña..." {...register("passwordReingresado",{required:true})}/>
                            </Box>
                        
                    </Box>

                    <Box sx={{display:"flex",justifyContent:"center"}}>
                        <Button sx={{mt:2,mb:2}} type="submit" variant="contained">Registrarse</Button>
                    </Box>
                    <Typography align="center">¿Ya posees cuenta? <Link onClick={handleLogin}>Iniciar sesion</Link></Typography>
                    </form>
                </Box>
                
            </Modal>
        </>
    )
}

export default ModalRegister