import { createContext,useContext,useState } from "react";
import {FacebookAuthProvider, GoogleAuthProvider,signInWithPopup} from "firebase/auth";

import { auth } from "./config";

const userAuthContext = createContext();
 export function UserAuthContextProvider ({children}){
    const [user,setUser] =useState({})
    function googleSignIn(){
        const googleAuthProvider = new GoogleAuthProvider();
        return signInWithPopup(auth,googleAuthProvider);
    }
    function fbSignIn(){
        const fbAuthProvider = new FacebookAuthProvider();
        return signInWithPopup(auth,fbAuthProvider);
    }
    return (
        <userAuthContext.Provider value={{user,googleSignIn,fbSignIn}}>
            {children}
        </userAuthContext.Provider>
    )
 }

 export function useUserAuth(){
    return useContext(userAuthContext);
 }