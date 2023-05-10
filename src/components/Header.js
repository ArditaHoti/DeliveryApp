import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { colors, parameters } from "../global/style";
import { Icon } from "@rneui/base";

// this code creates a reusable header component that displays a title and an icon,
// allowing users to navigate back when the icon is pressed.

export default function Header({ title, type, navigation }) {
  return (
    <View style={styles.header}>
      <View style={{ marginLeft: 20 }}>
        <Icon
          type="material-community"
          name={type}
          color={colors.heaherText}
          size={28}
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
      <View>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    backgroundColor: colors.buttons,
    height: parameters.headerHeight,
  },

  headerText: {
    color: colors.heaherText,
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: 30,
  },
});
