import {useContext} from "react";
import AuthContext from "../context/AuthContext.jsx";
import {Navigate, useLocation} from "react-router-dom";

const RequiredAuthentication = ({children}) => {
    const authContext = useContext(AuthContext);
    const location = useLocation();
    const token = localStorage.getItem('token');
    console.log(token);
    if(token === null && authContext.token === null){
        return <Navigate to="/unauthorized" state={{from: location}} replace/>;
    }

    return children;
}

export default RequiredAuthentication;