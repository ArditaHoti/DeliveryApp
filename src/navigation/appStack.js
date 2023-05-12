import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RestaurantMapScreen from "../screens/RestaurantMapScreen";
import DrawerNavigator from "../navigation/DrawerNavigator";
//This code imports the necessary components to create a stack navigator and the screens to be used in the app.
const App = createNativeStackNavigator();

export function AppStack() {
  return (
    <App.Navigator>
      <App.Screen
        name="App"
        component={DrawerNavigator}
        options={{
          headerShown: false,
        }}
      />

      <App.Screen
        name="RestaurantMapScreen"
        component={RestaurantMapScreen}
        options={{
          headerShown: false,
        }}
      />
    </App.Navigator>
  );
}
