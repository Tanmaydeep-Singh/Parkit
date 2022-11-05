import  { initializeApp,} from 'firebase/app';
import { useEffect,useState  } from "react";
import {getFirestore,setDoc,getDocs, doc} from 'firebase/firestore';
import {getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut , signInWithEmailAndPassword, } from 'firebase/auth';


const firebaseconfig = {
    apiKey: "AIzaSyAZNsYjdGO4006yNZ4ubOZLKw5Va5j5ZEA",
  authDomain: "login-test-98bcc.firebaseapp.com",
  databaseURL: "https://login-test-98bcc-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "login-test-98bcc",
  storageBucket: "login-test-98bcc.appspot.com",
  messagingSenderId: "338591940938",
  appId: "1:338591940938:web:12cd54ec629b531b2fc1b3",
  measurementId: "G-GHY4CQWKZG"
};

const app = initializeApp(firebaseconfig);
const auth = getAuth();
const db = getFirestore(app);

export async function signup(email,password,name) {
  var files;
  var user;
   try {
     user =  await createUserWithEmailAndPassword(auth,email,password);
   console.log(user);
   } catch (error) {
    alert("error1");
   }
   
  
  if(user){
    try {
      
      files =  setDoc(doc(db,"users", user.user.uid),{
        name:name,
        email:email,
        transections:[]
      } )
    
      console.log(files);
    } catch (error) {
      alert("error");
    
   }
  }

}

export async function  signin (email,password) {
 signInWithEmailAndPassword(auth,email,password);


}

export function useAut() {
  const [currentuse, setcurrentuse] = useState();

    useEffect(() => {
  const unsub = onAuthStateChanged(auth,user => setcurrentuse(user));
  return unsub;
    }, []);

  return currentuse;
}
export function signout() {
  signOut(auth);
}