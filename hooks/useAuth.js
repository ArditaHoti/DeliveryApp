import { onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";
import { auth } from "../config/firebase";

export default function useAuth() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Set up an event listener for authentication state changes
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user); // Log the user object to the console
        setUser(user); // Update the user state with the authenticated user
      } else {
        setUser(null); // Set the user state to null when there is no authenticated user
      }
      
      return unsub; // Cleanup function to unsubscribe from the event listener
    });
  }, []);

  return { user }; // Return the user state
}
