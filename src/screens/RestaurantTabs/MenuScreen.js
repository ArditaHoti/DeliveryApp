import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { Icon } from "@rneui/base";
import { colors } from "../../global/style";
import { menuDataRef, specialDataRef } from "../../../config/firebase";
import { onValue } from "firebase/database";

// A functional component called MenuScreen that takes in a prop called onPress.
// It uses the useState hook to initialize and update two arrays called specialData and menuData.
// The useEffect hook is used to fetch and set the data from two Firebase Realtime Database references
// called specialDataRef and menuDataRef respectively.

const MenuScreen = ({ onPress }) => {

  // Special Data Include Limited Offer, Go Chesse etc
  const [specialData, setspecialData] = useState([]);
  useEffect(() => {
    onValue(specialDataRef, (snapshot) => {
      const data = snapshot.val();
      const dataArray = Object.keys(data).map((key) => {
        return { ...data[key] };
      });
      setspecialData(dataArray);
    });
  }, []);
// menu data include Beef, Chicken etc
  const [menuData, setmenuData] = useState([]);
  useEffect(() => {
    onValue(menuDataRef, (snapshot) => {
      const data = snapshot.val();
      const dataArray = Object.keys(data).map((key) => {
        return { ...data[key] };
      });
      setmenuData(dataArray);
    });
  }, []);

  return (
    <View style={styles.container}>
      <View>
        {specialData.map((items) => (
          <View key={items.key} style={styles.view1}>
            <TouchableOpacity onPress={onPress}>
              <View style={styles.view2}>
                <Icon name="star" type="material-community" color="gold" />
                <Text style={styles.text1}>{items.title}</Text>
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </View>

      <View>
        {menuData.map((items) => (
          <View key={items.key} style={styles.view1}>
            <TouchableOpacity onPress={onPress}>
              <View style={styles.view2}>
                <Text style={styles.text1}>{items.title}</Text>
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
};

export default MenuScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  view1: { paddingHorizontal: 10 },

  view2: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    padding: 10,
    borderBottomColor: colors.grey5,
  },

  text1: {
    color: colors.grey3,
    fontSize: 18,
    fontWeight: "bold",
  },
});
