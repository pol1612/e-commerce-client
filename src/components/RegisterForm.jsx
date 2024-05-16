import {useNavigate} from "react-router-dom";
import {useContext, useState} from "react";
import AuthContext from "../context/AuthContext.jsx";
import axios from "axios";
import {Box, Button, Checkbox, FormControlLabel, Grid, Paper, TextField} from "@mui/material";

const RegisterForm = (props) => {
    const baseApiUrl = import.meta.env.VITE_BASE_URL
    const navigate = useNavigate();
    const authContext = useContext(AuthContext)
    const [registerData, setRegisterData] = useState({
        username: "",
        email: "",
        password: "",
        isAdmin: false
    })
    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setRegisterData({ ...registerData, [name]: value });
    }
    const handleIsAdminChange = (event) => {
        setRegisterData({ ...registerData, isAdmin: !registerData.isAdmin });
    }
    const handleRegisterSubmit = async () => {
        try{
            const response = await axios.post(`${baseApiUrl}/authentication/register`, registerData);
            if(response.status === 200){
                authContext.login(
                    response.data.token,
                    response.data.userId,
                    response.data.isAdmin
                )
                navigate("/")
            }
        }catch (e) {
            console.log(e);
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
                            label="Username"
                            variant="outlined"
                            type="text"
                            name="username"
                            onChange={handleInputChange}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
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
                        <FormControlLabel
                          control={<Checkbox onChange={handleIsAdminChange} value={registerData.isAdmin} />}
                          label="Admin"
                        />
                    </Grid>

                    <Grid item>
                        <Box
                            textAlign="center"
                            justifyContent="center"
                            sx={{ display: "flex", flexDirection: "row", gap: "10px" }}
                        >
                            <Button variant="contained" onClick={handleRegisterSubmit}>
                                Register
                            </Button>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    onClick={props.showRegister}
                                >
                                    Login
                                </Button>
                        </Box>
                    </Grid>
                    <Grid item />
                </Grid>
            </Paper>
        </>
    )
}
export default RegisterForm