import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { colors } from "../global/style";
import { Icon } from "@rneui/base";
import HomeScreen from "../screens/Homescreen";
import MyOrdersScreen from "../screens/myOrdersScreen";
import MyAccountScreen from "../screens/myAccountScreen";
import SearchScreen from "../screens/searchScreen";
import { ClientStack } from "./ClientStack";
import Checkout from "../screens/CheckoutScreen";

const ClientTabs = createBottomTabNavigator();

export default function RootClientTabs() {
  return (
    <ClientTabs.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.buttons,
        tabBarStyle: [
          {
            display: "flex",
            headerShown: false,
          },
          null,
        ],
      }}
  

    >
      <ClientTabs.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" type="material" color={color} size={size} />
          ),
        }}
      />

      <ClientTabs.Screen
        name="SearchScreen"
        component={ClientStack}
        options={{
          tabBarLabel: "Search",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="search" type="material" color={color} size={size} />
          ),
        }}
      />


      <ClientTabs.Screen
        name="MyOrderScreen"
        component={MyOrdersScreen}
        options={{
          tabBarLabel: "My Orders",
          tabBarIcon: ({ color, size }) => (
            <Icon name="view-list" type="material" color={color} size={size} />
          ),
        }}
      />

      <ClientTabs.Screen
        name="MyAccountScreen"
        component={MyAccountScreen}
        options={{
          tabBarLabel: "My Account",
          tabBarIcon: ({ color, size }) => (
            <Icon name="person" type="material" color={color} size={size} />
          ),
        }}
      />
      <ClientTabs.Screen
        name="CheckoutScreen"
        component={Checkout}
        options={{
          tabBarLabel: "My Account",
          tabBarIcon: ({ color, size }) => (
            <Icon name="person" type="material" color={color} size={size} />
          ),
        }}
      />
    </ClientTabs.Navigator>
  );
}
