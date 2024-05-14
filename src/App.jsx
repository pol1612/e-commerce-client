import './App.css'
import {BrowserRouter, Route, Routes, useNavigate} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import AddProductPage from "./pages/AddProductPage.jsx";
import UpdateProductPage from "./pages/UpdateProductPage.jsx";
import AuthenticationPage from "./pages/AuthenticationPage.jsx";
import UnauthorizedPage from "./pages/UnauthorizedPage.jsx";
import {useState} from "react";
import RequiredAuthentication from "./utils/RequiredAuthentication.jsx";
import AuthContext from "./context/AuthContext.jsx";
import DeleteProductPage from "./pages/DeleteProductPage.jsx";


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
        /**<AuthContext.Provider
            value={{
                token: loggedInUser.token,
                userId: loggedInUser.userId,
                isAdmin: loggedInUser.isAdmin,
                login: login,
                logout: logout,
            }}
        >**/
            <BrowserRouter>
                <Routes>

                    <Route  path="/"  element={<HomePage/>} />
                    <Route  path="/authentication" element={<AuthenticationPage/>}/>
                    <Route  path="/unauthorized" element={<UnauthorizedPage/>}/>
                    {/*PRODUCT CRUD ROUTES*/}
                    <Route
                        path="/add-product"
                        element={
                            /**<RequiredAuthentication>**/
                                <AddProductPage/>
                            /**</RequiredAuthentication>**/
                        }
                    />
                    <Route
                        path="/update-product/:id"
                        element={
                            /**<RequiredAuthentication>**/
                                <UpdateProductPage/>
                            /**</RequiredAuthentication>**/
                        }
                    />
                    <Route
                        path="/delete-product/:id"
                        element={
                            /**<RequiredAuthentication>**/
                                <DeleteProductPage/>
                            /**</RequiredAuthentication>**/
                        }
                    />

                </Routes>
            </BrowserRouter>
    /**</AuthContext.Provider>**/

    )
}
export default App
