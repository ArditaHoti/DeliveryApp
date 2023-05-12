import { Button, Text } from "@rneui/base";
import { React, useState, useRef, useEffect, useContext } from "react";
import { View, StyleSheet, Image } from "react-native";
import { colors, parameters, title } from "../../global/style";
import Swiper from "react-native-swiper";
import { SignInContext } from "../../context/authContext";
import { auth, filterDataRef } from "../../../config/firebase";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getAuth } from "firebase/auth";

// The code is a React Native screen component that displays a welcome screen for a restaurant discovery app.
//It includes a Swiper component that displays images of restaurants, and buttons to either sign in or create an account.
//The component also checks if the user is already signed in, and navigates to the appropriate screen based on the result.
export default function SignInWelcomeScreen({ navigation }) {
  const { dispatchSignedIn } = useContext(SignInContext);
  const auth = getAuth();
  const user = auth.currentUser;
  const getPersistedAuth = async () => {
    const jsonValue = await AsyncStorage.getItem("auth");

    console.log("The value being returned from", jsonValue);

    if (jsonValue != null) {
      dispatchSignedIn({
        type: "UPDATE_SIGN_IN",
        payload: { userToken: "signed-in" },
      });
    } else {
      navigation.navigate("SignInScreen");
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 3,
          justifyContent: "flex-start",
          alignItems: "center",
          paddingTop: 20,
        }}
      >
        <Text
          style={{ fontSize: 26, color: colors.buttons, fontWeight: "bold" }}
        >
          DISCOVER RESTAURANTS
        </Text>
        <Text
          style={{ fontSize: 26, color: colors.buttons, fontWeight: "bold" }}
        >
          IN YOUR AREA
        </Text>
      </View>

      <View style={{ flex: 4, alignItems: "center" }}>
        <Swiper autoplay={true}>
          <View style={styles.slide1}>
            <Image
              source={{
                uri: "https://i.pinimg.com/564x/b5/44/18/b5441841c38e29488998cc986047c2ef.jpg",
              }}
              style={{ width: "100%", height: "100%" }}
            />
          </View>
          <View style={styles.slide2}>
            <Image
              source={{
                uri: "https://i.pinimg.com/236x/a7/26/95/a726954b53e068baf4583ba50e801f2f.jpg",
              }}
              style={{ width: "100%", height: "100%" }}
            />
          </View>
          <View style={styles.slide3}>
            <Image
              source={{
                uri: "https://i.pinimg.com/236x/cd/96/d6/cd96d6bb2d739a0b69500137ce23ea5c.jpg",
              }}
              style={{ width: "100%", height: "100%" }}
            />
          </View>
          <View style={styles.slide3}>
            <Image
              source={{
                uri: "https://i.pinimg.com/236x/57/78/f4/5778f4a3c1554a60a9673c14be613c70.jpg",
              }}
              style={{ width: "100%", height: "100%" }}
            />
          </View>
        </Swiper>
      </View>

      <View style={{ flex: 4, justifyContent: "flex-end", marginBottom: 20 }}>
        <View style={{ marginHorizontal: 20, marginTop: 30 }}>
          <Button
            title="SIGN IN"
            buttonStyle={parameters.styledButton}
            titleStyle={parameters.buttonTitle}
            onPress={() => {
              getPersistedAuth();
            }}
          />
        </View>
        <View style={{ marginHorizontal: 20, marginTop: 30 }}>
          <Button
            title={"Create an account"}
            buttonStyle={styles.createButton}
            titleStyle={styles.createButtonTitle}
            onPress={() => {
              navigation.navigate("SignUpScreen");
            }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9DD6EB",
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#97CAE5",
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#92BBD9",
  },
  createButton: {
    backgroundColor: "#fff",
    alignContent: "center",
    justifyContent: "center",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#ff5252",
    height: 50,
    paddingHorizontal: 20,
    borderColor: colors.buttons,
  },
  createButtonTitle: {
    color: colors.grey1,
    fontSize: 20,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
  },
});
