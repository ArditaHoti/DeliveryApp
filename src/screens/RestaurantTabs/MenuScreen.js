import { StyleSheet, Text, View , TouchableOpacity} from "react-native";
import React, { useEffect, useState } from "react";
import { Icon } from "@rneui/base";
//import { specialData, menuData} from "../../global/data";
import { colors } from "../../global/style";
import { menuDataRef, specialDataRef } from "../../../config/firebase";
import { onValue } from "firebase/database";

const MenuScreen = ({navigation,restaurant,onPress}) => {



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
  const handlePress = () => {
    // navigation.navigate("PrductSec")
  }
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
