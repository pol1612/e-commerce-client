import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import AddProductPage from "./pages/AddProductPage.jsx";
import UpdateProductPage from "./pages/UpdateProductPage.jsx";
import AuthenticationPage from "./pages/AuthenticationPage.jsx";
import UnauthorizedPage from "./pages/UnauthorizedPage.jsx";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route  path="/"  element={<HomePage/>} />
                <Route  path="/add-product"  element={<AddProductPage/>}/>
                <Route  path="/product-update/:id" element={<UpdateProductPage/>}/>
                <Route  path="/authentication" element={<AuthenticationPage/>}/>
                <Route  path="/unauthorized" element={<UnauthorizedPage/>}/>

            </Routes>
        </BrowserRouter>

    )
}
export default App
