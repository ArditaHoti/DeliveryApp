import { StyleSheet, View, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import MenuCard from "../components/MenuCard";
import { menuDetailedDataRef } from "../../config/firebase";
import { useState, useEffect } from "react";
import { onValue } from "firebase/database";

// The Route1 function returns a View component with a child FlatList.
// The FlatList renders each item in the menuDetailedData array as a
// MenuCard component wrapped in a TouchableOpacity. When a MenuCard is pressed,
// the navigation.navigate function is called to navigate to the
// PreferenceScreen screen with the current index passed as a parameter.

export function Route1({ navigation }) {
  // Set up menuDetailedData state using the useState hook
  const [menuDetailedData, setmenuDetailedData] = useState([]);
  // Use the useEffect hook to fetch data from menuDetailedDataRef
  useEffect(() => {
    onValue(menuDetailedDataRef, (snapshot) => {
      const data = snapshot.val();
      const dataArray = Object.keys(data).map((key) => {
        return { ...data[key] };
      });
      setmenuDetailedData(dataArray);
    });
  }, []);

  
  // Return the FlatList containing the menu data, wrapped in a View
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.view2}>
        <FlatList
          style={{ backgroundColor: "white" }}
          data={menuDetailedData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("PreferenceScreen", { index });
              }}
            >
              <MenuCard
                productName={item.meal}
                image={item.image}
                price={item.price}
                productDetails={item.details}
              />
            </TouchableOpacity>
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}

// The following functions simply return a View with a style of 'scene'
export const Route2 = () => <View style={styles.scene} />;
export const Route3 = () => <View style={styles.scene} />;
export const Route4 = () => <View style={styles.scene} />;
export const Route5 = () => <View style={styles.scene} />;
export const Route6 = () => <View style={styles.scene} />;
export const Route7 = () => <View style={styles.scene} />;
export const Route8 = () => <View style={styles.scene} />;

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    backgroundColor: "#673ab7",
  },

  view2: { marginTop: 5, paddingBottom: 20 },

  scene2: { backgroundColor: "#673ab7" },
});
