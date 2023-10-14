import { Box, Button, Divider,  Modal, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";


const ModalAdd = ({modalOpen,setModalOpen}) =>{
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
    return(
        <>
            <Modal
                open={modalOpen}
                onClose={()=>setModalOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography mb={2} align="center" id="modal-modal-title" variant="h6" component="h2">
                        Agregar producto
                    </Typography>
                    <Divider/>
                    <Box>
                        <Typography align="center" id="modal-modal-description" sx={{ mt: 2 }}>
                            Nombre del producto:
                        </Typography>
                        <Box sx={{display:"flex",justifyContent:"center"}}>
                            <input />
                        </Box>
                        <Typography align="center" id="modal-modal-description" sx={{ mt: 2 }}>
                            Descripcion:
                        </Typography>
                        <Box sx={{display:"flex",justifyContent:"center"}}>
                            <input />
                        </Box>
                        <Typography align="center" id="modal-modal-description" sx={{ mt: 2 }}>
                            Categoria:
                        </Typography>
                        <Box sx={{display:"flex",justifyContent:"center"}}>
                            <input  />
                        </Box>
                        <Typography align="center" id="modal-modal-description" sx={{ mt: 2 }}>
                            Precio:
                        </Typography>
                        <Box sx={{display:"flex",justifyContent:"center"}}>
                            <input />
                        </Box>
                        <Typography align="center" id="modal-modal-description" sx={{ mt: 2 }}>
                            Stock:
                        </Typography>
                        <Box sx={{display:"flex",justifyContent:"center"}}>
                            <input />
                        </Box>
                        
                    </Box>

                    <Box sx={{display:"flex",justifyContent:"space-around"}}>
                        <Button sx={{mt:2,mb:2}} variant="outlined">Agregar</Button>
                        <Button sx={{mt:2,mb:2}} variant="outlined" color="error" onClick={()=>setModalOpen(false)}>Cancelar</Button>
                    </Box>
                    
                </Box>
            </Modal>
        </>
    )
}

export default ModalAdd;