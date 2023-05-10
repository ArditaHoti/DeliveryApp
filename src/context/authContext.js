import React, { createContext, useReducer } from "react";
import { SignInReducer } from "../screens/reducers/authReducers";
// This code creates a new context for sign-in related data using React's createContext function.
// It also defines a SignInContextProvider component that uses the useReducer hook to manage state
// related to sign-in. It initializes the state with a userToken of null, and then provides the state
// and dispatch function to any descendants using the SignInContext.Provider component.
// This allows any child components to access the sign-in state and dispatch updates to it.

// Create a new context for sign-in related data
export const SignInContext = createContext();

export const SignInContextProvider = (props) => {
  // Use reducer to manage state related to sign-in
  const [signedIn, dispatchSignedIn] = useReducer(SignInReducer, {
    userToken: null,
  });

  return (
    // Provide the sign-in state and dispatch function to its descendants
    <SignInContext.Provider value={{ signedIn, dispatchSignedIn }}>
      {props.children}
    </SignInContext.Provider>
  );
};
