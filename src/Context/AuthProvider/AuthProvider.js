import React, { Children } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    const user = { displayName: "Mugdho" }


    // Sigup with email password
    const userWithEmailPass = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };
    //Login With email pass
    const loginEmailPass = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    // login with Google
    const signUpGoogle = (provider) => {
        return signInWithPopup(auth, provider)
    }

    const authInfo = { user, userWithEmailPass, loginEmailPass }




    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;