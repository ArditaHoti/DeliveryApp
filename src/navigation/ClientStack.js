import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SearchScreen from "../screens/searchScreen";
import SearchResultScreen from "../screens/searchResultScreen";
import RestaurantHomeScreen from "../screens/RestaurantHomeScreen";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import MenuProductScreen from "../screens/MenuProductScreen";
import PreferenceScreen from "../screens/PreferenceScreen";
import ViewCartScreen from "../screens/ViewCartScreen";
import CheckoutScreen from "../screens/CheckoutScreen";

//this code provides a multi-screen user interface for the client side of the food ordering app,
//with the ability to navigate between different screens and hide the tab bar as needed.

const ClientSearch = createNativeStackNavigator();

export function ClientStack({ navigation, route }) {
  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName === "RestaurantHomeScreen" || "MenuProductScreen") {
      navigation.setOptions({ tabBarVisible: false });
    } else {
      navigation.setOptions({ tabBarVisible: true });
    }
  }, [navigation, route]);

  return (
    <ClientSearch.Navigator>
      <ClientSearch.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={() => ({
          headerShown: false,
        })}
      />

      <ClientSearch.Screen
        name="SearchResultScreen"
        component={SearchResultScreen}
        options={() => ({
          headerShown: false,
        })}
      />

      <ClientSearch.Screen
        name="RestaurantHomeScreen"
        component={RestaurantHomeScreen}
        options={() => ({
          headerShown: false,
        })}
      />

      <ClientSearch.Screen
        name="MenuProductScreen"
        component={MenuProductScreen}
        options={() => ({
          headerShown: false,
        })}
      />

      <ClientSearch.Screen
        name="PreferenceScreen"
        component={PreferenceScreen}
        options={() => ({
          headerShown: false,
        })}
      />

      <ClientSearch.Screen
        name="ViewCartScreen"
        component={ViewCartScreen}
        options={() => ({
          headerShown: false,
        })}
      />

      <ClientSearch.Screen
        name="CheckoutScreen"
        component={CheckoutScreen}
        options={() => ({
          headerShown: false,
        })}
      />
    </ClientSearch.Navigator>
  );
}
