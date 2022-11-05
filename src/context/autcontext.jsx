import React, { useContext, useState } from 'react'

// firebase
import { auth } from '../firebase';

const Autcontext = React.createContext()

export function useauth(){
    return useContext(Autcontext);
}

export  function autoprovider({children}) {
 const [curruser,setcurruser] = useState();

 function signup(email,password) {

   
    auth.createUserWithEmailAndPassword()
    
 }

 const value = {
    curruser
 }

  return (
    <Autcontext.Provider value={value}>
        {children}
    </Autcontext.Provider>
  )
}
