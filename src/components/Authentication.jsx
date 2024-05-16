import {useState} from "react";
import {Grid} from "@mui/material";
import LoginForm from "./LoginForm.jsx";
import RegisterForm from "./RegisterForm.jsx";

const Authentication = () => {

    const [showLogin, setShowLogin] = useState(true);

    const showRegister = () => {
        setShowLogin(!showLogin);
    }

    return(
        <>
            <Grid
                container
                direction="column"
                alignContent="center"
                justifyContent="center"
                gap={5}
                style={{paddingTop: "50px"}}
            >
                <Grid item>
                    {showLogin ? (
                        <LoginForm showRegister={showRegister}/>
                    ) : (
                        <RegisterForm showRegister={showRegister}/>
                    )}
                </Grid>
            </Grid>
        </>
    )
}
export default Authentication