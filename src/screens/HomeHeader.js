import React from "react";

import { View, Text, StyleSheet } from "react-native";
import { Icon, withBadge } from "@rneui/base";
import { colors, parameters } from "../global/style";


//HomeHeader displays a header with a navigation menu icon, the app name, 
//and a shopping cart icon with a badge. The navigation prop is used to toggle the 
//drawer menu when the menu icon is pressed. The withBadge function is used to add 
//a badge with a count of 0 to the shopping cart icon. 
export default function HomeHeader({ navigation }) {
  const BadgeIcon = withBadge(0)(Icon);

  return (
    <View style={styles.header}>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginLeft: 15,
        }}
      >
        <Icon
          type="material-community"
          name="menu"
          color={colors.cardbackground}
          size={32}
          onPress={() => {
            navigation.toggleDrawer();
          }}
        />
      </View>

      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Text
          style={{
            color: colors.cardbackground,
            fontSize: 25,
            fontWeight: "bold",
          }}
        >
          FoodDelivery
        </Text>
      </View>

      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginRight: 15,
        }}
      >
        <BadgeIcon
          type="material-community"
          name="cart"
          size={35}
          color={colors.cardbackground}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    backgroundColor: colors.buttons,
    height: parameters.headerHeight,
    justifyContent: "space-between",
  },
});
