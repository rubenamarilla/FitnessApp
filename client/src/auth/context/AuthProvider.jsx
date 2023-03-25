
import { useReducer } from 'react'
import { types } from '../types/types';
import { AuthContext } from './AuthContext';
import { authReducer } from './authReducer';


const init = () => {
    const user = JSON.parse(localStorage.getItem('token'))
    return {
        logged: !!user,
        user: user,
    }
}
export const AuthProvider = ({ children }) => {
    const [authState, dispatch] = useReducer(authReducer, {}, init)
    
    const login = async (token) => {
        const user = {
            token
        }
        const action = {
            type: types.login,
            payload: user
        }
        localStorage.setItem('token', JSON.stringify(token));
        // localStorage.setItem("token", token);
        dispatch(action);
    }

    const logout = () => {
        localStorage.removeItem('token');
        const action = {
            type: types.logout
        };
        dispatch(action);
    }
   

    return (
        <AuthContext.Provider value={{
            ...authState,
            login, logout
        }}>
            {children}
        </AuthContext.Provider>
    );
}
