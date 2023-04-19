import React from "react";
import {
  createNativeStackNavigator
} from "@react-navigation/native-stack";
import RestaurantMapScreen from "../screens/RestaurantMapScreen"
import DrawerNavigator from "../navigation/DrawerNavigator"

const App = createNativeStackNavigator();

export function AppStack() {
  return (
    <App.Navigator>
      <App.Screen
        name="App"
        component={DrawerNavigator}
        options={{
          headerShown: false
        }}
      />

      <App.Screen
        name="RestaurantMapScreen"
        component={RestaurantMapScreen}
        options={{
          headerShown: false
        }}
      />
    </App.Navigator>
  );
}
