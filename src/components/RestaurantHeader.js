import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Animated,
} from "react-native";
import { React, useState, useEffect } from "react";
import { colors } from "../global/style";
import { Icon } from "@rneui/base";
import { restaurantsDataRef } from "../../config/firebase";
import { onValue } from "firebase/database";

// this code represents a header component for a restaurant screen,
// displaying an image background, navigation icons, and a like button with animation

export default function RestaurantHeader({ navigation, id }) {
  const [restaurantsData, setrestaurantsData] = useState([]);
  useEffect(() => {
    // Fetch restaurants data from the database
    onValue(restaurantsDataRef, (snapshot) => {
      const data = snapshot.val();
      const dataArray = Object.keys(data).map((key) => {
        return { ...data[key] };
      });
      setrestaurantsData(dataArray);
    });
  }, []);
  // Animation-related variables
  const index2 = 10;
  const currentValue = new Animated.Value(1);
  const [liked, setLiked] = useState(false);
  const [counter, setCounter] = useState(-2);
  const [visible, setVisible] = useState(false);

  const likeHander = () => {
    if (liked == false) setVisible(true);

    setLiked(!liked);
    setCounter(index2);
  };

  useEffect(() => {
    if (liked == true) {
      Animated.spring(currentValue, {
        toValue: 3,
        friction: 2,
        useNativeDriver: true,
      }).start(() => {
        Animated.spring(currentValue, {
          toValue: 1,
          useNativeDriver: true,
          friction: 2,
        }).start(() => {
          setVisible(false);
        });
      });
    }
  }, [liked]);
  // Check if restaurantsData has an object at index 'id'
  if (!restaurantsData[id]) {
    return null; // Return null or any other component to indicate loading/error state
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.container}
        source={{ uri: restaurantsData[id].images }}
      >
        <View style={styles.view1}>
          <View style={styles.view2}>
            <Icon
              name="arrow-left"
              type="material-community"
              color={colors.black}
              size={25}
              onPress={() => navigation.goBack()}
            />
          </View>
          <View style={styles.view3}>
            <Icon
              name={liked && index2 == counter ? "favorite" : "favorite-border"}
              type="material"
              color="red"
              size={30}
              onPress={likeHander}
            />
          </View>
        </View>
        <View style={styles.view4}>
          {visible && index2 == counter && (
            <Animated.View style={{ transform: [{ scale: currentValue }] }}>
              <Icon name="favorite" size={40} color="red" type="material" />
            </Animated.View>
          )}
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { height: 150 },

  view1: {
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",
  },

  view2: {
    margin: 10,
    width: 40,
    height: 40,
    backgroundColor: colors.cardbackground,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },

  view3: {
    marginTop: 0,
    margin: 10,
    width: 40,
    height: 40,
    backgroundColor: colors.cardbackground,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },

  view4: { marginTop: 0, alignItems: "center", justifyContent: "center" },
});
