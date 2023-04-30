import React, { useContext } from "react";

import { View, Text, Alert, Switch, StyleSheet, Touchable } from "react-native";

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";

import { Icon, Avatar } from "@rneui/base";

import { colors } from "../global/style";
import { SignInContext } from "../context/authContext";
import { TouchableOpacity } from "react-native-gesture-handler";
import { auth } from "../../config/firebase";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { useEffect } from "react";

// Define a default export function called DrawerContent that takes props as an argument
export default function DrawerContent(props) {
  // Create a state variable called isDarkMode with a default value of false, and a function called setIsDarkMode to update it
  const [isDarkMode, setIsDarkMode] = useState(false); // state variable to hold the value of the switch
  const [user, setUser] = useState({});
  useEffect(() => {
   getPersistedAuth();
  }, []);

  const getPersistedAuth = async () => {
    const jsonValue = await AsyncStorage.getItem("auth");

    console.log("The value being returned from", jsonValue);

    if (jsonValue != null) {
      setUser(user);
      console.log("the user:",user);
    } else {
      setUser({});
    }
  };

  // Define a function called handleDarkModeSwitch that toggles the value of isDarkMode when called
  function handleDarkModeSwitch() {
    setIsDarkMode((prevMode) => !prevMode); // update the value of the switch
  }
  // Get the dispatchSignedIn function from the SignInContext object using the useContext hook
  const { dispatchSignedIn } = useContext(SignInContext);
  // Define an asynchronous function called signOut that logs the user out and removes their authentication token from AsyncStorage
  async function signOut() {
    try {
      await auth.signOut().then(() => {
        console.log("USER SUCCESSFULLY SIGNED OUT");
        dispatchSignedIn({
          type: "UPDATE_SIGN_IN",
          payload: { userToken: null },
        });
        AsyncStorage.removeItem("auth");
      });
    } catch (error) {
      console.log(error);
    }
  }
  // Render the DrawerContent component with the following JSX
  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={{ backgroundColor: colors.buttons }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingLeft: 20,
              paddingVertical: 10,
            }}
          >
            <Avatar
              rounded
              avatarStyle={styles.avatar}
              size={75}
              source={{
                uri: "https://www.freepnglogos.com/uploads/food-png/food-grass-fed-beef-foodservice-products-grass-run-farms-4.png",
              }}
            />

            <View style={{ marginLeft: 10 }}>
              <Text
                style={{
                  fontWeight: "bold",
                  color: colors.cardbackground,
                  fontSize: 18,
                }}
              >
                {user.name + " " + user.family_name}
              </Text>
              <Text style={{ color: colors.cardbackground, fontSize: 14 }}>
                {/* Display user's email address here */}
                {user.email}
              </Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              paddingBottom: 5,
            }}
          >
            <View style={{ flexDirection: "row", marginTop: 0 }}>
              <View
                style={{
                  marginLeft: 10,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    color: colors.cardbackground,
                    fontSize: 18,
                  }}
                >
                  1
                </Text>
                <Text style={{ color: colors.cardbackground, fontSize: 14 }}>
                  My Favorites
                </Text>
              </View>
            </View>

            <View style={{ flexDirection: "row", marginTop: 0 }}>
              <View
                style={{
                  marginLeft: 10,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    color: colors.cardbackground,
                    fontSize: 18,
                  }}
                >
                  0
                </Text>
                <Text style={{ color: colors.cardbackground, fontSize: 14 }}>
                  My Cart
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Render the default DrawerItemList component*/}

        <DrawerItemList {...props} />

        <DrawerItem
          label="Payment"
          icon={({ color, size }) => (
            <Icon
              type="material-community"
              name="credit-card-outline"
              color={color}
              size={size}
            />
          )}
        />

        <DrawerItem
          label="Promotions"
          icon={({ color, size }) => (
            <Icon
              type="material-community"
              name="tag-heart"
              color={color}
              size={size}
            />
          )}
        />

        <DrawerItem
          label="Settings"
          icon={({ color, size }) => (
            <Icon
              type="material-community"
              name="cog-outline"
              color={color}
              size={size}
            />
          )}
        />

        <DrawerItem
          label="Help"
          icon={({ color, size }) => (
            <Icon
              type="material-community"
              name="lifebuoy"
              color={color}
              size={size}
            />
          )}
        />

        <View style={{ borderTopWidth: 1, borderTopColor: colors.grey5 }}>
          <Text style={styles.preferences}>Preferences</Text>

          <View style={styles.switchText}>
            <Text style={styles.darkthemeText}>Dark Theme</Text>
            <View style={{ paddingRight: 10 }}>
              <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor="#f4f3f4"
                value={isDarkMode} // set the value of the switch to the state variable
                onValueChange={handleDarkModeSwitch} // set the function to handle the switch value change
              />
            </View>
          </View>
        </View>
      </DrawerContentScrollView>

      <TouchableOpacity
        onPress={() => {
          signOut();
        }}
      >
        <DrawerItem
          label="Sign Out"
          icon={({ color, size }) => (
            <Icon
              type="material-community"
              name="logout-variant"
              color={color}
              size={size}
            />
          )}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  avatar: {
    borderWidth: 4,
    borderColor: colors.pagebackground,
  },

  preferences: {
    fontSize: 16,
    color: colors.grey2,
    paddingTop: 10,
    paddingLeft: 20,
  },

  switchText: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 20,
    paddingVertical: 5,
    paddingRight: 10,
  },
  darkthemeText: {
    fontSize: 16,
    color: colors.grey2,
    paddingTop: 10,
    paddingLeft: 0,
    fontWeight: "bold",
  },
});
