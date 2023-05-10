import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Icon } from "@rneui/base";
import { colors } from "../global/style";

export default function FoodCard({
  OnPressFoodCard, // Function to handle the press event of the food card
  restaurantName, // Name of the restaurant
  deliveryAvailable, // Boolean indicating if delivery is available
  discountAvailable, // Boolean indicating if a discount is available
  discountPercent, // Percentage of discount
  numberOfReview, // Number of reviews
  businessAddress, // Address of the business
  farAway, // Time it takes to reach the location
  averageReview, // Average review rating
  images, // Array of image URLs
  screenWidth, // Width of the screen
}) {
  return (
    //this code defines a reusable food card component that can be used to display information about a
    //restaurant, including its image, name, address, distance, average review rating, and number of reviews.
    <TouchableOpacity>
      <View style={{ ...styles.cardView, width: screenWidth }}>
        <Image
          style={{ ...styles.image, width: screenWidth }}
          source={{ uri: images }}
        />

        <View>
          <View>
            <Text style={styles.restaurantName}>{restaurantName}</Text>
          </View>

          <View style={{ flex: 1, flexDirection: "row" }}>
            <View style={styles.distance}>
              <Icon
                name="place"
                type="material"
                color={colors.grey2}
                size={18}
                iconStyle={{
                  marginTop: 3,
                }}
              />
              <Text style={styles.Min}> {farAway} Min</Text>
            </View>

            <View style={{ flex: 9, flexDirection: "row" }}>
              <Text style={styles.address}>{businessAddress}</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.review}>
        <Text style={styles.average}>{averageReview}</Text>
        <Text style={styles.numberOfReview}>{numberOfReview} reviews</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardView: {
    marginHorizontal: 9,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    borderWidth: 1,
    borderColor: colors.grey4,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  image: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    height: 150,
  },

  restaurantName: {
    fontSize: 17,
    fontWeight: "bold",
    color: colors.grey1,
    marginTop: 5,
    marginLeft: 10,
  },

  distance: {
    flex: 4,
    flexDirection: "row",
    borderRightColor: colors.grey4,
    paddingHorizontal: 5,
    borderRightWidth: 1,
  },
  Min: {
    fontSize: 12,
    fontWeight: "bold",
    paddingTop: 5,
    color: colors.grey3,
  },

  address: {
    fontSize: 12,
    paddingTop: 5,
    color: colors.grey2,
    paddingHorizontal: 10,
  },

  review: {
    position: "absolute",
    top: 0,
    right: 10,
    backgroundColor: "rgba(52, 52, 52,0.3)",
    padding: 2,
    alignItems: "center",
    justifyContent: "center",
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 12,
  },

  average: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: -3,
  },
  numberOfReview: {
    color: "white",
    fontSize: 13,
    marginRight: 0,
    marginLeft: 0,
  },
});
