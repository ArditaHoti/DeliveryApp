
//web 789475744481-14524hmt56dlqjvpubn78s5fk4esfo1t.apps.googleusercontent.com
// ios 789475744481-9cpap2hp01tp8mc0i2ek29t52vks1rif.apps.googleusercontent.com
//android 789475744481-cfdo95cmv8fac4jgtbqkogcnk56ktck5.apps.googleusercontent.com
import React from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import { colors } from "./src/global/style";
import RootNavigator from "./src/navigation/RootNavigator";
import { SignInContextProvider } from "./src/context/authContext";

export default function App() {
  return (
    <SignInContextProvider>
      <View style={styles.container}>
        <StatusBar
          barStyle={"light-content"}
          backgroundColor={colors.statusbar}
        />
        <RootNavigator />
      </View>
    </SignInContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
