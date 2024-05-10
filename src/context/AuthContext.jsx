import React from "react";

const AuthContext = React.createContext({
    token: null,
    userId: null,
    isAdmin: false,
    login: (token, userId, isAdmin) => {},
    logout: () => {}
});

export default AuthContext;