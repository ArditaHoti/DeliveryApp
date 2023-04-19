import React from "react";
import {createDrawerNavigator } from "@react-navigation/drawer";
import RootClientTabs from "./clientTabs";
import { Icon } from "@rneui/base";
import { colors } from "../global/style";
import DrawerContent from "../components/DrawerContent";
import BusinessConsoleScreen from "../screens/BusinessConsoleScreen";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen
        name="RootClientTabs"
        component={RootClientTabs}
        options={{
          headerShown: false,
          title: "Client",
          drawerIcon: ({ focussed, size }) => (
            <Icon
              type="material-community"
              name="home"
              color={focussed ? "#7cc" : colors.grey2}
              size={size}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Business consoleScreen"
        component={BusinessConsoleScreen}
        options={{
          title: "Business console",
          drawerIcon: ({ focussed, size }) => (
            <Icon
              type="material"
              name="business"
              color={focussed ? "#7cc" : colors.grey2}
              size={size}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
