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
            <Box sx={{flexGrow: 1}}>
                <AppBar position="static">
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
            </Box>
        </>
    )
}

export default NavBar;