import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';

// Auth context provider
//it uses data from useFirebase
export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
    const allContext = useFirebase()
    return (
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;