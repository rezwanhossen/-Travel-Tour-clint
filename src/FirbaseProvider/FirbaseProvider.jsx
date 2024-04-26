import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import auth from "../Firbase/firbase.config";
const googlepro = new GoogleAuthProvider();

export const AuthContext = createContext(null);

const FirbaseProvider = ({ children }) => {
  const [user, setuser] = useState(null);
  console.log(user);
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
  };
  return (
    <AuthContext.Provider value={allValue}>{children}</AuthContext.Provider>
  );
};

export default FirbaseProvider;
