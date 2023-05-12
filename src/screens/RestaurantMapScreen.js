import React from "react";
import { View } from "react-native";
import MapView from "react-native-maps";

// This component renders a MapView using the "react-native-maps" library.
// The MapView is configured with an initial region that specifies the starting coordinates 
//and zoom level of the map.

export default function RestaurantMapScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <MapView
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
}
