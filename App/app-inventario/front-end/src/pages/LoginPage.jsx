import {Button, Divider, Grid, TextField, Typography,Box} from "@mui/material"
import {Link as linkRouter} from "react-router-dom"

const LoginPage = () =>{
  
  return(
    <>
      <Grid className="caja-auth-principal" sx={{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",width:"100vw"}}>
        <Grid className="caja-auth">
        <Typography align="center" mt={2} variant="h5">Login</Typography>
            <Divider/>

              <Typography align="center" mt={5} mb={1}>Correo electrónico:</Typography>
              <TextField sx={{display:"flex",justifyContent:"center",mx:5}} type="email" label="Ingresa tu correo"/>
              <Typography mt={2} align="center" mb={1}>Contraseña:</Typography>
              <TextField sx={{display:"flex",justifyContent:"center",mx:5}}  type="password" label="Ingresa tu contraseña"/>
              <Box sx={{display:"flex",justifyContent:"center",marginTop:3}}>
                <Button component={linkRouter} to="/"  variant="contained">Ingresar</Button>
              </Box>

        </Grid>
        
      </Grid>
    </>
  )
}

export default LoginPage