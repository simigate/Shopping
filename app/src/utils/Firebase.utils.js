import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, signInWithRedirect, GoogleAuthProvider, createUserWithEmailAndPassword } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC5tWLKYQKDW68_0YZZ0ZeajuW08woEAvI",
    authDomain: "fakestoredb.firebaseapp.com",
    projectId: "fakestoredb",
    storageBucket: "fakestoredb.appspot.com",
    messagingSenderId: "332039727805",
    appId: "1:332039727805:web:47947b4535c4adfc6925d4"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ promt: "select_account" })

export const auth = getAuth();
export const signInGooglePopUp = () => signInWithPopup(auth, provider)
export const db = getFirestore()
export const createUserDocFromAuth = async (userAuth, additionalInfo = {}) => {
    const userDocRef = doc(db, 'users', userAuth.uid)
    const userSnapShot = await getDoc(userDocRef)
    console.log(userSnapShot.exists())
    if (!userSnapShot.exists()) {
        const { displayName, email } = userAuth
        const createdDate = new Date()
        try {
            await setDoc(userDocRef, {
                displayName, email, createdDate, ...additionalInfo
            });
        } catch (error) {
            console.log("User was not created" + error.message);
        }
    }
    return userDocRef
}

export const createUserAuthFromEmailPassword = async (email, password) => {
    if (!email || !password) return
    return await createUserWithEmailAndPassword(auth, email, password)
}
