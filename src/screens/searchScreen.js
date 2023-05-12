import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ImageBackground,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import SearchComponent from "../components/SearchComponent";
import { onValue } from "firebase/database";
import { colors } from "../global/style";
import { filterData2Ref } from "../../config/firebase";
// This code displays a list of categories. It fetches the category data from Firebase and displays it in a FlatList component.
// Each item in the list is a clickable image that takes the user to a search result screen for that category.
// The screen also includes a search component and a footer section that displays more categories.
// The code also includes styles for the components used in the screen.

const SCREEN_WIDTH = Dimensions.get("window").width;

export default function SearchScreen({ navigation }) {
  const [filterData2, setFilterData2] = useState([]);
  useEffect(() => {
    onValue(filterData2Ref, (snapshot) => {
      const data = snapshot.val();
      const dataArray = Object.keys(data).map((key) => {
        return { ...data[key] };
      });
      setFilterData2(dataArray);
    });
  }, []);

  return (
    <View style={{ flex: 1, marginBottom: 10, paddingTop: 20 }}>
      <SearchComponent />
      <View style={{ marginTop: 10 }}>
        <View>
          <FlatList
            style={{}}
            data={filterData2}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => (
              <TouchableWithoutFeedback
                onPress={() => {
                  navigation.navigate("SearchResultScreen", {
                    item: item.name,
                  });
                }}
              >
                <View style={styles.imageView}>
                  <ImageBackground style={styles.image} source={item.image}>
                    <View style={styles.textView}>
                      <Text style={{ color: colors.cardbackground }}>
                        {item.name}
                      </Text>
                    </View>
                  </ImageBackground>
                </View>
              </TouchableWithoutFeedback>
            )}
            horizontal={false}
            showsverticalScrollIndicator={false}
            numColumns={2}
            ListHeaderComponent={
              <Text style={styles.listHeader}>Top Categories</Text>
            }
            ListFooterComponent={<Footer navigation={navigation} />}
          />
        </View>
      </View>
    </View>
  );
}

const Footer = ({ navigation }) => {
  const [filterData2, setFilterData2] = useState([]);
  useEffect(() => {
    onValue(filterData2Ref, (snapshot) => {
      const data = snapshot.val();
      const dataArray = Object.keys(data).map((key) => {
        return { ...data[key] };
      });
      setFilterData2(dataArray);
    });
  }, []);
  return (
    <View style={{ marginTop: 20, marginBottom: 30 }}>
      <View style={{}}>
        <FlatList
          style={{ marginBottom: 10 }}
          data={filterData2}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (
            <TouchableWithoutFeedback
              onPress={() => {
                navigation.navigate("SearchResultScreen", {
                  item: item.name,
                });
              }}
            >
              <View style={styles.imageView}>
                <ImageBackground style={styles.image} source={item.image}>
                  <View style={styles.textView}>
                    <Text style={{ color: colors.cardbackground }}>
                      {item.name}
                    </Text>
                  </View>
                </ImageBackground>
              </View>
            </TouchableWithoutFeedback>
          )}
          horizontal={false}
          showsverticalScrollIndicator={false}
          numColumns={2}
          ListHeaderComponent={
            <Text style={styles.listHeader}>More categories</Text>
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageView: {
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    width: SCREEN_WIDTH * 0.4475,
    height: SCREEN_WIDTH * 0.4475,
    marginLeft: SCREEN_WIDTH * 0.035,
    marginBottom: SCREEN_WIDTH * 0.035,
  },

  image: {
    height: SCREEN_WIDTH * 0.4475,
    width: SCREEN_WIDTH * 0.4475,
    borderRadius: 10,
  },

  listHeader: {
    fontSize: 16,
    color: colors.grey2,
    paddingBottom: 10,
    marginLeft: 12,
  },

  textView: {
    height: SCREEN_WIDTH * 0.4475,
    width: SCREEN_WIDTH * 0.4475,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(52, 52, 52,0.3)",
  },
});
