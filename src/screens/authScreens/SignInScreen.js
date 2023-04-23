import { Button, Icon, Text, SocialIcon, ButtonGroup } from "@rneui/base";
import { React, useState, useRef, useContext } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import Header from "../../components/Header";
import { colors, parameters, title } from "../../global/style";
import * as Animatable from "react-native-animatable";
import { Formik } from "formik";
// import { auth } from "../../../config/firebase";
import { Alert } from "react-native";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { SignInContext } from "../../context/authContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import * as SecureStore from 'expo-secure-store';

export default function SignInScreen({ navigation }) {
  const { dispatchSignedIn } = useContext(SignInContext);
  const [textInput2Focussed, setTextInput2Focussed] = useState(false);
  const auth = getAuth()
  const textInput1 = useRef(1);
  const textInput2 = useRef(2);

  async function signIn(data) {
    try {
      const { email, password } = data;
      const user = await signInWithEmailAndPassword(auth, email, password);
      if (user) {
        console.log("USER SIGNED-IN");
        dispatchSignedIn({
          type: "UPDATE_SIGN_IN",
          payload: { userToken: "signed-in" },
        });

        const persistAuth = async () => {
          console.log("This is the data being saved in storage", data);
          await AsyncStorage.setItem("auth", JSON.stringify(data));
        };

        persistAuth();
      }
    } catch (error) {
      Alert.alert(error.name, error.message);
    }
  }
  // useEffect(() => {
  //   getPersistedAuth();
  // }, []);

  // const getPersistedAuth = async () => {
  //   const jsonValue = await AsyncStorage.getItem("userToken");
  //   return jsonValue;
  // };

  return (
    <View style={styles.container}>
      <Header title="MY ACOONUT" type="arrow-left" navigation={navigation} />
      <View style={{ marginLeft: 20, marginTop: 10 }}>
        <Text style={{ ...title }}>Sign In</Text>
      </View>

      <View style={{ alignItems: "center", marginTop: 10 }}>
        <Text style={styles.text1}>Please enter the email and password</Text>
        <Text style={styles.text1}>registered with your account</Text>
      </View>

      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          console.log("values", values);
          signIn(values);
        }}
      >
        {(props) => (
          <View>
            <View style={{ marginTop: 20 }}>
              <View>
                <TextInput
                  style={styles.TextInput1}
                  placeholder="Email"
                  ref={textInput1}
                  onChangeText={props.handleChange("email")}
                  value={props.values.email}
                />
              </View>

              <View style={styles.TextInput2}>
                <Animatable.View
                  animation={textInput2Focussed ? "" : "fadeInLeft"}
                  duration={400}
                >
                  <Icon
                    name="lock"
                    iconStyle={{ color: colors.grey3 }}
                    type="material"
                  />
                </Animatable.View>
                <TextInput
                  style={{ width: "60%" }}
                  placeholder="Password"
                  ref={textInput2}
                  secureTextEntry
                  onFocus={() => {
                    setTextInput2Focussed(false);
                  }}
                  onBlur={() => {
                    setTextInput2Focussed(true);
                  }}
                  onChangeText={props.handleChange("password")}
                  value={props.values.password}
                />
                <Animatable.View
                  animation={textInput2Focussed ? "" : "fadeInLeft"}
                  duration={400}
                >
                  <Icon
                    name="visibility-off"
                    iconStyle={{ color: colors.grey3 }}
                    type="material"
                    style={{ marginRight: 10 }}
                  />
                </Animatable.View>
              </View>
            </View>
            <View style={{ marginHorizontal: 20, marginTop: 30 }}>
              <Button
                title="SIGN IN"
                buttonStyle={parameters.styledButton}
                titleStyle={parameters.buttonTitle}
                onPress={props.handleSubmit}
              />
            </View>
          </View>
        )}
      </Formik>

      <View style={{ alignItems: "center", marginTop: 15 }}>
        <Text style={{ ...styles.text1, textDecorationLine: "underline" }}>
          Forgot your password ?
        </Text>
      </View>

      <View style={{ alignItems: "center", marginTop: 30, marginBottom: 30 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Or</Text>
      </View>

      <View
        style={{ alignItems: "center", marginHorizontal: 20, marginTop: 10 }}
      >
        <SocialIcon
          title="Sign In With Facebook"
          button
          type="facebook"
          style={styles.SocialIcon}
          onPress={() => {}}
        />
      </View>

      <View
        style={{ alignItems: "center", marginHorizontal: 20, marginTop: 10 }}
      >
        <SocialIcon
          title="Sign In With Gmail"
          button
          type="google"
          style={styles.SocialIcon}
          onPress={() => {}}
        />
      </View>

      <View style={{ marginLeft: 25, marginTop: 25 }}>
        <Text style={{ ...styles.text1 }}>New on FoodDelivery ?</Text>
      </View>

      <View style={{ alignItems: "flex-end", marginHorizontal: 20 }}>
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text1: {
    color: colors.grey3,
    fontSize: 16,
  },

  TextInput1: {
    borderWidth: 1,
    borderColor: "#86939e",
    marginHorizontal: 20,
    borderRadius: 12,
    marginBottom: 20,
    height: 50,
    paddingLeft: 15,
  },
  TextInput2: {
    borderWidth: 1,
    borderColor: "#86939e",
    marginHorizontal: 20,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
    paddingLeft: 15,
    height: 50,
  },

  SocialIcon: {
    borderRadius: 12,
    height: 50,
    width: "100%",
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
  },
  createButtonTitle: {
    color: "#ff5252",
    fontSize: 16,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
    marginTop: -3,
  },
});
