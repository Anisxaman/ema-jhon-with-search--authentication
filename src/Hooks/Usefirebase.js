import React, { useEffect, useState } from 'react';
import { GoogleAuthProvider,getAuth,signInWithPopup,onAuthStateChanged,signOut   } from "firebase/auth";
import initializeAuthentication from '../firebase/firebase.init';

initializeAuthentication();
const Usefirebase = () => {

    const [user, setuser] = useState({});
    const auth = getAuth();



const googleProvider = new GoogleAuthProvider();

const signInUsingGoogle=()=>{
   return signInWithPopup(auth, googleProvider)
//   .then((result) => {
//       console.log(result.user);
  
//     // setuser(result.user); [module:59-8]
    
//   })
}


const logOut=()=>{
    signOut(auth).then(() => {
        setuser({})
      }).catch((error) => {
      });

}


//--------------------observe whether user auth state change or not-------------
useEffect(() => {

    onAuthStateChanged(auth, (user) => {
        if (user) {
            setuser(user)
        
        } else {
       
        }
      });
    
 
}, [])




    return {
        user,
        
        signInUsingGoogle,
        logOut,


    };
};

export default Usefirebase;