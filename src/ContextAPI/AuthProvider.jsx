import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { GoogleAuthProvider, GithubAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import auth from '../Firebase/firebase.config';
import useAxios from '../CustomHooks/useAxios';

export const Context = createContext(null)
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const AuthProvider = ({ children }) => {
    const axiosSecure = useAxios()
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

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            const userEmail = currentUser?.email || user?.email
            setUser(currentUser);
            setLoading(false);
            const loggedUser = { email: userEmail }
            if (currentUser) {
                axiosSecure.post('/jwt', loggedUser)
                    .then(res => {
                        console.log(res.data)
                    })
            } else {
                axiosSecure.post('/logout', loggedUser)
                    .then(res => {
                        console.log(res.data)
                    })
            }

        })
        return () => {
            unSubscribe()
        }
    }, [axiosSecure, user])

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