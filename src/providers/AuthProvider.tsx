import { iAuthProvider, iLoginUserProps } from '@app/@types/myTypes';
import { createContext } from 'react';
import JWTAuth from '../services/JWTAuth';
import loginUser from '../services/LoginUser'

var DEFAULT_VALUE: iAuthProvider = {
    onLogin: async () => { },
    onLogout: async () => { },
    isAuthed: async () => false,
}

const AuthContext = createContext<iAuthProvider>(DEFAULT_VALUE);
const LoginUser = new loginUser()
const AuthContextProvider = ({ children }: { children: JSX.Element }) => {


    const handleLogin = async (props: iLoginUserProps) => {
        await LoginUser.execute(props)
            .then()
            .catch((err: Error) => {
                const defaultErrorToBeThrown = new Error()
                defaultErrorToBeThrown.message = err.message
                defaultErrorToBeThrown.name = err.name
                throw defaultErrorToBeThrown
            })
    };

    const handleLogout = async () => {
        //expire JWT function

    };

    const handleIsAuthed = async () => {
        const booleanIsAuthed = await JWTAuth()
        return booleanIsAuthed;
    }

    const value: iAuthProvider = {
        onLogin: handleLogin,
        onLogout: handleLogout,
        isAuthed: handleIsAuthed
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};



export { AuthContextProvider, AuthContext }