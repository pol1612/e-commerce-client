import {Button, Paper, Typography} from "@mui/material";
import {Link} from "react-router-dom";

const Unauthorized = () => {
    return (
        <>
            <br/>
            <br/>
            <br/>
            <br/>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    height: "100vh"
                }}
            >

                <Paper
                    elevation={3}
                    alignContent="center"
                    justifyContent="center"
                    style={{
                        textAlign: "center",
                        padding: "20px",
                        width: 550,
                        paddingBottom: "30px",

                    }}
                >
                    <br/>
                    <Typography variant="h5">Unauthorized Access</Typography>

                    <div style={{padding: "40px 0"}}/>
                    <Typography variant="body1">
                        You are not authorized to access this page. It may be due to a missing
                        authentication token or an expired token.
                    </Typography>
                    <Typography variant="body1">
                        Please log in or register to continue.
                    </Typography>
                    <div style={{padding: "20px 0"}}/>
                    <Button
                        variant="contained"
                        color="primary"
                        component={Link}
                        to="/authentication"
                    >
                        Log In or Register
                    </Button>
                </Paper>

            </div>
        </>


    )
}
export default Unauthorized