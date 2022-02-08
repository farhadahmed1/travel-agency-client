import { initializeApp } from "firebase/app";
import firebaseConfig from './firebase.config';


// initialize firebase authentication
const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
}
export default initializeAuthentication;