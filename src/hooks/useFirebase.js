import { getAuth, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from './../firebase/firebase.init';
import Swal from 'sweetalert2';



// init firebase authentication

initializeAuthentication();


const useFirebase = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [user, setUser] = useState({});

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // sign  in with google 
    const signInWithGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider)


    }

    // updata user  on state

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {

            if (user) {
                setUser(user);
            }
            else {
                setUser("");
            }
            setIsLoading(false)
        });

    }, [auth, user, isLoading]);



    const logout = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {

                setUser({})
                Swal.fire({
                    icon: 'success',
                    title: "Logged Out",
                    text: "You Successfully Logged Out"
                })

            })
            .catch((error) => {

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
        setIsLoading,
        setUser,
        logout,
        isLoading,
        signInWithGoogle

    }
};

export default useFirebase;