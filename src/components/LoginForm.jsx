import {useNavigate} from "react-router-dom";
import AuthContext from "../context/AuthContext.jsx";
import React, {useContext, useState} from "react";
import axios from "axios";
import {Box, Button, Grid, Paper, TextField} from "@mui/material";

const LoginForm = (props) => {

    const baseApiUrl = import.meta.env.VITE_BASE_URL
    const navigate = useNavigate();
    const authContext = useContext(AuthContext);
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    })
    const handleInputChange = (e) => {
        const {name, value} = e.target
        setLoginData({...loginData, [name]: value});
    }
    const handleLoginSubmit = async () => {
        try{
            const response = await axios.post(`${baseApiUrl}/authentication/login`, loginData);
            console.log(response);
            if (response.status === 200) {
                authContext.login(
                    response.data.token,
                    response.data.userId,
                    response.data.isAdmin
                )
                navigate("/")
            }

        }catch(err){
            console.log(err);
        }
    }

    return(
        <>
            <Paper
                elevation={3}
                style={{
                    width: 500,
                }}
            >
                <Grid
                    container
                    direction="column"
                    alignContent="center"
                    justifyContent="center"
                    gap={5}
                    style={{ paddingTop: "50px" }}
                >
                    <Grid item>
                        <TextField
                            label="E-mail"
                            variant="outlined"
                            type="text"
                            name="email"
                            onChange={handleInputChange}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            label="Password"
                            variant="outlined"
                            type="password"
                            name="password"
                            onChange={handleInputChange}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item>
                        <Box
                            textAlign="center"
                            justifyContent="center"
                            sx={{ display: "flex", flexDirection: "row", gap: "10px" }}
                        >
                            <Button variant="contained" onClick={handleLoginSubmit}>
                                Login
                            </Button>
                            {Object.keys(props)[0] !== "closeForm" && (
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    onClick={props.showRegister}
                                >
                                    Sign up
                                </Button>
                            )}
                        </Box>
                    </Grid>
                    <Grid item />
                </Grid>
            </Paper>

        </>
    )
}
export default LoginForm
