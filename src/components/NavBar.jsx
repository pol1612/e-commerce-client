import {useNavigate} from "react-router-dom";
import {AppBar, Box, Button, Toolbar, Typography} from "@mui/material";
import {useContext, useEffect, useState} from "react";
import AuthContext from "../context/AuthContext.jsx";


const NavBar = () => {
    const navigate = useNavigate();
    const [token, setToken] = useState();
    const [isAdmin, setIsAdmin] = useState();
    const authContext = useContext(AuthContext);

    useEffect(() => {
        setToken(localStorage.getItem("token"));
        setIsAdmin(localStorage.getItem("isAdmin"));
    }, [token]);
    const navigateToHomePage = () => {
        navigate('/');
    }
    const navigateToAddProductPage = () => {
        navigate('/add-product');
    }
    const navigateToLoginPage = () => {
        navigate('/authentication');
    }
    const logOut = () => {
        localStorage.clear()
        navigate("/")
        setIsAdmin(false)
        setToken(null)
        authContext.logout()
    }
    return (
        <>
            <AppBar
                position="fixed"
                sx={{
                    width: '100%',
                    top: 0,
                    backgroundColor: '#D4AF37'
                }}>
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{flexGrow: 1}}
                        onClick={navigateToHomePage}
                    >
                        E-COMMERCE
                    </Typography>

                    <Button color="inherit" onClick={navigateToHomePage}>
                        Home
                    </Button>


                    {isAdmin && token &&(

                        <Button color="inherit" onClick={navigateToAddProductPage}>
                            Add Product
                        </Button>
                    )}
                    {token ? (

                        <Button color="inherit" onClick={logOut}>
                            LogOut
                        </Button>
                    ) : (
                        <Button color="inherit" onClick={navigateToLoginPage}>
                            Login
                        </Button>
                    )}

                </Toolbar>
            </AppBar>
        </>
    )
}

export default NavBar;