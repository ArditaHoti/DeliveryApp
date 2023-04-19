import { onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";
import { auth } from "../config/firebase";

export default function useAuth() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        setUser(user);
      } else {
        setUser(null);
      }
      return unsub
    });
  }, []);

  return { user };
}
