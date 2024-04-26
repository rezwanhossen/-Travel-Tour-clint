import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../Firbase/firbase.config";

//socal media provider
const googlepro = new GoogleAuthProvider();
const githubpro = new GithubAuthProvider();

export const AuthContext = createContext(null);

const FirbaseProvider = ({ children }) => {
  const [user, setuser] = useState(null);
  // user creation
  const creatUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //login user
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  //google login
  const googlelogin = () => {
    return signInWithPopup(auth, googlepro);
  };

  // github login
  const githublogin = () => {
    return signInWithPopup(auth, githubpro);
  };

  // logout
  const logout = () => {
    setuser(null);
    signOut(auth);
  };

  // objerver
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setuser(user);
      }
    });
  }, []);
  const allValue = {
    user,
    creatUser,
    login,
    googlelogin,
    githublogin,
    logout,
  };
  return (
    <AuthContext.Provider value={allValue}>{children}</AuthContext.Provider>
  );
};

export default FirbaseProvider;
