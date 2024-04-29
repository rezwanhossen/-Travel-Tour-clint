import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../Firbase/firbase.config";

//socal media provider
const googlepro = new GoogleAuthProvider();
const githubpro = new GithubAuthProvider();

export const AuthContext = createContext(null);

const FirbaseProvider = ({ children }) => {
  const [user, setuser] = useState(null);
  const [loding, setloding] = useState(true);
  // user creation
  const creatUser = (email, password) => {
    setloding(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //updat profil
  const updatprofil = (fullname, img) => {
    return updateProfile(auth.currentUser, {
      displayName: fullname,
      photoURL: img,
    });
  };
  //login user
  const login = (email, password) => {
    setloding(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  //google login
  const googlelogin = () => {
    setloding(true);
    return signInWithPopup(auth, googlepro);
  };

  // github login
  const githublogin = () => {
    setloding(true);
    return signInWithPopup(auth, githubpro);
  };

  // logout
  const logout = () => {
    setuser(null);

    signOut(auth);
  };

  // objerver
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        setuser(user);
        setloding(false);
      }
    });
    return () => unsub();
  }, []);
  const allValue = {
    user,
    creatUser,
    login,
    googlelogin,
    githublogin,
    logout,
    loding,
    updatprofil,
  };
  return (
    <AuthContext.Provider value={allValue}>{children}</AuthContext.Provider>
  );
};

export default FirbaseProvider;
