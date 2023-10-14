import {Navigate, Route, Routes} from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductosCategoriaPage from "../pages/ProductoCategoriaPage";

const AppRoutes = () =>{
    return(
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/:categoria" element={<ProductosCategoriaPage/>}/>
            <Route path="/*" element={<Navigate to="/"/>}/>

        </Routes>
    )

}

export default AppRoutes;