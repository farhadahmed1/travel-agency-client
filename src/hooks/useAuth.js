import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";

//useAuth hook from useFirebase
const useAuth = () => {
    return useContext(AuthContext)
}

export default useAuth;