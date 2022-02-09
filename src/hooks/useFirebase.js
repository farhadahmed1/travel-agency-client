import {
    getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup,
    signOut
} from "@firebase/auth";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import initializeAuthentication from "../firebase/firebase.init";

// this hook is for firebase authentication
initializeAuthentication();

const useFirebase = () => {
    const auth = getAuth();
    const [isLoading, setIsLoading] = useState(true)
    const [user, setUser] = useState({});

    //update user on state change
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser("");
            }
            setIsLoading(false)
        });
    }, [auth, user, isLoading]);

    //function for sign in with google
    const signInWithGoogle = () => {
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
    };

    // this function is for log out
    const logOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            setUser({})
            Swal.fire({
                icon: 'success',
                title: 'Logged Out',
                text: 'Yor Logged Out Successfully',
            })
        }).catch((error) => {
            Swal.fire({
                icon: 'error',
                title: 'Something Went Wrong',
                text: error.message,
            })
        }).finally(() => {
            setIsLoading(false)
        });

    }
    return {
        user,
        setUser,
        signInWithGoogle,
        logOut,
        isLoading,
        setIsLoading
    }
};

export default useFirebase;