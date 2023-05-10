import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./authNavigators";
import { AppStack } from "./appStack";
import { SignInContext } from "../context/authContext";
import useAuth from "../../hooks/useAuth";
import AsyncStorage from "@react-native-async-storage/async-storage";

// This component renders the appropriate stack navigator depending on whether the user is signed in or not
export default function RootNavigator() {
  // Access the sign-in state from the context using the useContext hook
  const { signedIn } = useContext(SignInContext);

  // If user is not signed in, render the authentication stack, otherwise render the application stack
  return (
    <NavigationContainer>
      {signedIn.userToken == null ? <AuthStack /> : <AppStack />}
    </NavigationContainer>
  );
}
