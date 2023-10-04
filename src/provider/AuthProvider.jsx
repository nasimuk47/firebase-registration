import React, { createContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";
import app from "../firebase.config";

export const Authcontext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [User, setUser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logout = () => {
        return signOut(auth);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            console.log("user in the auth state changed", user);
            setUser(user);
        });
        return () => {
            unsubscribe();
        };
    }, []);

    const AuthInfo = {
        user: User, // Corrected variable name
        createUser,
        signIn,
        logout,
    };

    return (
        <Authcontext.Provider value={AuthInfo}>{children}</Authcontext.Provider>
    );
};

export default AuthProvider;
