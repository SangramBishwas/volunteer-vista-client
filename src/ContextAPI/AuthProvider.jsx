import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { GoogleAuthProvider, GithubAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import auth from '../Firebase/firebase.config';
import axios from 'axios';
// import useAxios from '../CustomHooks/useAxios';

export const Context = createContext()
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const AuthProvider = ({ children }) => {
    // const axiosSecure = useAxios()
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const creatUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    //-------By email and password-------
    const userLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    //-------By google------
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }
    //-------Login with github------
    const githubLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider);
    }
    //-------Update User Profile----
    const updateUserProfile = (name, image) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image
        })
    }
    //------------Log Out-----------
    const LogOut = () => {
        setLoading(true)
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
            const loggedUser = { email: currentUser?.email }
            if (currentUser) {
                axios.post('https://volunteer-vista-server.vercel.app/jwt', loggedUser, { withCredentials: true })
                    .then()
            } else {
                axios.post('https://volunteer-vista-server.vercel.app/logout', loggedUser, { withCredentials: true })
                    .then()
            }

        })
        return () => {
            return unSubscribe()
        }
    }, [])

    const authInfo = {
        user,
        loading,
        creatUser,
        userLogin,
        googleLogin,
        githubLogin,
        updateUserProfile,
        LogOut
    }
    return (
        <Context.Provider value={authInfo}>
            {children}
        </Context.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
};

export default AuthProvider;