import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignInScreen from "../screens/authScreens/SignInScreen";
import SignInWelcomeScreen from "../screens/authScreens/SignInWelcomeScreen";
import SignUpScreen from "../screens/authScreens/SignUpScreen";

// This code defines a stack navigator for the authentication screens of the app.
// It imports the necessary components from the screens directory and
// creates a navigator using createNativeStackNavigator.
const Auth = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Auth.Navigator>
      <Auth.Screen
        name="SignInWelcomeScreen"
        component={SignInWelcomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Auth.Screen
        name="SignInScreen"
        component={SignInScreen}
        options={{
          headerShown: false,
        }}
      />

      <Auth.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{
          headerShown: false,
        }}
      />
    </Auth.Navigator>
  );
}
