import { initializeApp } from "firebase/app";
import firebaseConfig from './firebase.config';


// initialize firebase authentication
const initializeFirebase = () => {
    initializeApp(firebaseConfig);
}
export default initializeFirebase;