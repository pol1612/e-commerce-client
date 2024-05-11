import {useNavigate} from "react-router-dom";
import {AppBar, Box, Button, Toolbar, Typography} from "@mui/material";


const NavBar = () => {
    const navigate = useNavigate();

    const navigateToHomePage = () => {
        navigate('/');
    }
    const navigateToAddProductPage = () => {
        navigate('/add-product');
    }
    return (
        <>
            <AppBar
                position="static"
                sx={{ width: '100%',
                    backgroundColor: '#D4AF37'
                }}>
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{flexGrow: 1}}
                    >
                        E-COMMERCE
                    </Typography>
                    <Button color="inherit" onClick={navigateToHomePage}>
                        Home
                    </Button>
                    <Button color="inherit" onClick={navigateToAddProductPage}>
                        Add Product
                    </Button>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default NavBar;