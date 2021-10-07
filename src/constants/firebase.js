
import firebase from "firebase/compat/app";
import { getFirestore } from "firebase/firestore";
/* import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'; */
import React,{useState, useEffect, useContext, createContext} from 'react'
import {getAuth} from 'firebase/auth'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBK88hrDK6jTy4154tjlFm_7QES-kvnm2g",
  authDomain: "greencab-80974.firebaseapp.com",
  projectId: "greencab-80974",
  storageBucket: "greencab-80974.appspot.com",
  messagingSenderId: "534334512091",
  appId: "1:534334512091:web:49540b1d8b13dc879ea5fe",
  measurementId: "G-G0MERQGRLP"
  };

  /*  process.env.REACT_APP_FB_API 
    process.env.REACT_APP_FB_DOMAIN 
    process.env.REACT_APP_FB_PROJECT
    process.env.REACT_APP_FB_BUCKET 
    process.env.REACT_APP_FB_SENDER 
    process.env.REACT_APP_FB_APP */
  
firebase.initializeApp(firebaseConfig)

  // Initialize Firebase
  /* export const app = initializeApp(firebaseConfig); */


  export default getFirestore()




const AuthContext = createContext()


// HOOK for child components to get the auth object...
// and re -render when it changes
export const useAuth = () => {
    return useContext(AuthContext)
}

// Provider hook that creates auth object and handles state
export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [isAuthenticating, setIsAuthenticating] = useState(true)

    const sendSignInLinkToEmail = email => {
        return firebase
        .auth()
        .sendSignInLinkToEmail(email, {
            url: 'http://localhost:3000/confirm',
            handleCodeInApp: true,

        }).then( () => {
            return true;
        });
    };

    const signInWithEmailLink = (email, code) => {
    return firebase
    .auth()
    .signInWithEmailLink(email, code)
    .then(result => {
        setUser(result.user)

        return true
    });
 
};

const logout = () => {
    return firebase
    .auth()
    .signOut()
    .then(() => {
        setUser(null); 
    });
}

// Subscribe to user on mount 
// Because this sets in the callback it will cause any...
// component that utilizes this hook to re-render with the...
// latest auth object.

    useEffect(() => {

        const unsubscribe = getAuth().onAuthStateChanged(user => {
            setUser(user)
            setIsAuthenticating(false)
        })

        //Cleanup subscription on unmount 
        return () => unsubscribe()
    },[])

    const values = {
        user,
        isAuthenticating,
        sendSignInLinkToEmail,
        signInWithEmailLink,
        logout
    }

return (
    <AuthContext.Provider value={values}>
        {!isAuthenticating && children}
    </AuthContext.Provider> 
)    
};


 