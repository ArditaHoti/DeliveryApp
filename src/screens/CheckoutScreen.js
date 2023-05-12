import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { parameters, colors } from "../global/style";

const CheckoutScreen = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  const handlePlaceOrder = async () => {
    try {
      // TODO: Send the order details to the server and wait for the response
      const response = await fetch("https://example.com/api/place-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          address,
          city,
          state,
          zip,
          cardNumber,
          expiryDate,
          cvv,
          // TODO: Include the order details in the request body
        }),
      });

      if (response.ok) {
        //Handle the successful order placement
        Alert.alert("Order placed successfully!");
      } else {
        //Handle the failed order placement
        Alert.alert("Failed to place order");
      }
    } catch (error) {
      // Handle the error
      console.error(error);
      Alert.alert("An error occurred while placing the order");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Checkout</Text>
      <View style={styles.orderSummary}>
        <Text style={styles.summaryTitle}>Order Summary</Text>
        {/* TODO: Display the order summary */}
      </View>
      <View style={styles.shippingForm}>
        <Text style={styles.formTitle}>Shipping Address</Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Address"
          value={address}
          onChangeText={setAddress}
        />
        <TextInput
          style={styles.input}
          placeholder="City"
          value={city}
          onChangeText={setCity}
        />
        <TextInput
          style={styles.input}
          placeholder="State"
          value={state}
          onChangeText={setState}
        />
        <TextInput
          style={styles.input}
          placeholder="ZIP Code"
          value={zip}
          onChangeText={setZip}
        />
      </View>
      <View style={styles.paymentForm}>
        <Text style={styles.formTitle}>Payment Information</Text>
        <TextInput
          style={styles.input}
          placeholder="Card Number"
          value={cardNumber}
          onChangeText={setCardNumber}
        />
        <TextInput
          style={styles.input}
          placeholder="Expiry Date (MM/YY)"
          value={expiryDate}
          onChangeText={setExpiryDate}
        />
        <TextInput
          style={styles.input}
          placeholder="CVV"
          value={cvv}
          onChangeText={setCvv}
        />
      </View>
      <View style={styles.view18}>
        <TouchableOpacity onPress={handlePlaceOrder}>
          <Text style={styles.text10}>Place Order</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    paddingTop: 3,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  orderSummary: {
    marginBottom: 20,
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  shippingForm: {
    marginBottom: 20,
  },
  formTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 10,
    marginBottom: 10,
  },
  paymentForm: {
    marginBottom: 20,
  },
  placeOrderText: {
    fontSize: 18,
    fontWeight: "bold",
    // color: "#fff",
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

export default CheckoutScreen;
