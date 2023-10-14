import { Toolbar } from "@mui/material"
import Navbar from "./components/Navbar"
import CardProducto from "./components/cardProducto"
import AppRoutes from "./routes/AppRoutes"

const App = () =>{
  return(
    <>
      <Navbar/>
      <Toolbar/>
      <AppRoutes/>
    </>
  )
}

export default App