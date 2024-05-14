import './App.css'
import {BrowserRouter, Route, Routes, useNavigate} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import AddProductPage from "./pages/AddProductPage.jsx";
import UpdateProductPage from "./pages/UpdateProductPage.jsx";
import AuthenticationPage from "./pages/AuthenticationPage.jsx";
import UnauthorizedPage from "./pages/UnauthorizedPage.jsx";
import {useState} from "react";


function App() {
    const [loggedInUser, setLoggedInUser] = useState({
        token: null,
        userId: null,
        isAdmin: false,
    });

    const login = (token, userId, isAdmin) => {
        localStorage.setItem("token", token);
        localStorage.setItem("userId", userId);
        setLoggedInUser({token: token,userId: userId,isAdmin: isAdmin});
    }

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        setLoggedInUser({token: null, userId: null, isAdmin: false});
    }
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
