import React, { Children, useEffect } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';
import { useState } from 'react';

export const AuthContext = createContext();

const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)


    // Signup with email password
    const userWithEmailPass = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    };
    //Login With email pass
    const loginEmailPass = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    };

    // login with Google
    const signUpGoogle = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    // Login with Github
    const signupGitHub = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider)

    };

    const logOut = () => {
        setLoading(true)
        signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('user change', currentUser)
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = { user, loading, userWithEmailPass, loginEmailPass, signUpGoogle, logOut, signupGitHub }




    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;