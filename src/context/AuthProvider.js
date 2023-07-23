import React, { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../Firebase/Firebase.config";
import issueToken from "../lib/issueToken";

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) =>{
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }
  const logOut = () =>{
    setLoading(true);
    return signOut(auth);
  }
  const signInUsingGoogle = () => {
    setLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
        issueToken(result.user.email)
      })
      .catch((error) => {
        
        setError(error.message);
      });
  };

  useEffect(() =>{
  const unsubscribe = onAuthStateChanged(auth, currentUser =>{
        console.log('user observing');
        setUser(currentUser);
        issueToken(currentUser.email);
        setLoading(false)
    })
    return () => unsubscribe();
  }, [])

  const updateUser = (userInfo) =>{
    return updateProfile(auth.currentUser, userInfo);
  }

  const authInfo = {
    createUser,
    signIn,
    logOut,
    updateUser,
    signInUsingGoogle,
    user,
    loading
  };

  return (
    <>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </>
  );
};

export default AuthProvider;
