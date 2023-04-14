import React, { useState } from "react";

const AuthContext = React.createContext({
    token: '',
    isLoggedin: false,
    login: (token) => {},
    logout: () => {},
    user: '',
})

export const AuthContextProvider = (props) => {
    const[token , setToken] = useState(null)

    const userIsLoggedIn = !!token;

    const loginHandler = (token, email) => {
        setToken(token);
        
        localStorage.setItem('token', token);
        localStorage.setItem('email', email.replace('@','').replace('.',''));


    }

    const logoutHandler = () => {
        setToken(null)
        localStorage.removeItem('token');
        localStorage.removeItem('email')
    }

    const contextValue = {
        token: token,
        isLoggedin: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler,
    }
   return(
    <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>
   )
}

export default AuthContext;