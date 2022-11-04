import firebase, { initializeApp } from 'firebase/app';
import { useEffect,useState  } from "react";
import {getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';

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

export function signup(email,password) {
  createUserWithEmailAndPassword(auth,email,password);
}

export function useaut() {
  const [currentuse, setcurrentuse] = useState();

    useEffect(() => {
  const unsub = onAuthStateChanged(auth,user => setcurrentuse(user));
  return unsub;
    }, []);

  return currentuse;
}