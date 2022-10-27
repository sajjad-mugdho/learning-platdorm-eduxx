import React, { Children, useEffect } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';
import { useState } from 'react';

export const AuthContext = createContext();

const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState()


    // Signup with email password
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

    // Login with Github
    const signupGitHub = (provider) => {
        return signInWithPopup(auth, provider)
    };

    const logOut = () => {
        signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('user change', currentUser)
            setUser(currentUser)
        })
        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = { user, userWithEmailPass, loginEmailPass, signUpGoogle, logOut, signupGitHub }




    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;