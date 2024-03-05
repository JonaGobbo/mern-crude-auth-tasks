/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { createContext, useState, useContext } from 'react';
import { registerRequest } from '../api/auth'

export const AuthContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth must be used within a AuthProvider");
    return context;
};

    export const AuthProvider = ({ children }) => {

        const [user, setUser] = useState(null);
        const [isAuthenticated, setisAuthenticated] = useState(false);
        const [errors, setErrors] = useState([]);

            const singup = async (user) => {
                try{
                    const res = await registerRequest(user)
                    console.log(res.data);
                    setUser(res.data);
                    setisAuthenticated(true);
                
                }catch (error) {
                setErrors(error.response.data);
           } 
        };
    return (
     <AuthContext.Provider value={{
                singup,
                user,
                isAuthenticated,
                errors,
        }}>
                {children}
            </AuthContext.Provider>
        )
    }