import {Button, Typography} from "@mui/material";
import {Link} from "react-router-dom";

const Unauthorized = () => {
    return (
        <div style={{textAlign: "center", marginTop: "50px"}}>
            <Typography variant="h4">Unauthorized Access</Typography>
            <div style={{padding: '80px 0'}}/>
            <Typography variant="body1">
                You are not authorized to access this page. It may be due to missing
                authentication token or expired token.
            </Typography>
            <Typography variant="body1">
                Please log in or register to continue.
            </Typography>
            <div style={{padding: '20px 0'}}/>
            <Button variant="contained" color="primary" component={Link} to="/authentication">
                Log In or Register
            </Button>
        </div>
    )
}
export default Unauthorized