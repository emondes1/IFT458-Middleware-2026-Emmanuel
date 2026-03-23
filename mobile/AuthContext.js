import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const login = (userData, tokenData) => {
        setUser(userData);
        setToken(tokenData);
        setError(null);
    };

    const logout = () => {
        setUser(null);
        setToken(null);
        setError(null);
    };

    const setLoading = (loading) => {
        setIsLoading(loading);
    };

    const setAuthError = (err) => {
        setError(err);
    };

    return (
        <AuthContext.Provider value={{
            user,
            token,
            isLoading,
            error,
            login,
            logout,
            setLoading,
            setAuthError,
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);