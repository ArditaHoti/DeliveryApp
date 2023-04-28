import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./authNavigators";
import { AppStack } from "./appStack";
import { SignInContext } from "../context/authContext";
import useAuth from "../../hooks/useAuth";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function RootNavigator() {
   const {signedIn} = useContext(SignInContext);
    console.log("userToken in RootNavigator",signedIn.userToken);

    return (
      <NavigationContainer>
        {(signedIn.userToken == null ) ? <AuthStack /> : <AppStack />}
      </NavigationContainer>
    );
}
