import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import AddProductPage from "./pages/AddProductPage.jsx";
import UpdateProductPage from "./pages/UpdateProductPage.jsx";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route  path="/"  element={<HomePage/>} />
                <Route  path="/add-product"  element={<AddProductPage/>}/>
                <Route  path="/product-update/:id" element={<UpdateProductPage/>}/>
            </Routes>
        </BrowserRouter>

    )
}
export default App
