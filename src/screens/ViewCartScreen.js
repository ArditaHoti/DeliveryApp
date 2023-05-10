import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { menuDetailedDataRef } from "../../config/firebase";
import { onValue } from "firebase/database";
import { useEffect } from "react";
import { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import MenuCard from "../components/MenuCard";
import { colors } from "../global/style";

const ViewCartScreen = ({ navigation }) => {
  // Set up menuDetailedData state using the useState hook
  const [menuDetailedData, setmenuDetailedData] = useState([]);
  const [totalPrice, setTotalPrice] = useState();
  // Use the useEffect hook to fetch data from menuDetailedDataRef
  useEffect(() => {
    onValue(menuDetailedDataRef, (snapshot) => {
      const data = snapshot.val();
      const dataArray = Object.keys(data).map((key) => {
        return { ...data[key] };
      });
      setmenuDetailedData(dataArray);
      const totalPrice = dataArray.reduce((acc, curr) => acc + curr.price, 0);
      setTotalPrice(totalPrice);
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
            <TouchableOpacity>
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
      <View style={styles.footer}>
        <Text style={styles.total}>Total: £{totalPrice?.toFixed(2)}</Text>
        <View style={styles.view18}>
          <TouchableOpacity
            onPress={() => navigation.navigate("CheckoutScreen")}
          >
            <Text style={styles.text10}>Go to Checkout </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  list: {
    flex: 1,
    paddingHorizontal: 10,
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  itemPrice: {
    fontSize: 16,
  },
  footer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  total: {
    fontSize: 18,
    fontWeight: "bold",
  },

  view18: {
    backgroundColor: colors.buttons,
    alignItems: "center",
    paddingVertical: 5,
    marginBottom: 0,
    width: 200,
    borderRadius: 12,
  },
  text10: { padding: 10, fontWeight: "bold", fontSize: 18, color: "white" },
});

export default ViewCartScreen;
