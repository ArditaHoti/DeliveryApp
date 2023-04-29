import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import {
  Route1,
  Route2,
  Route3,
  Route4,
  Route5,
  Route6,
  Route7,
  Route8,
} from "./MenuTabs";
import { TabView, TabBar } from "react-native-tab-view";
import { colors } from "../global/style";
import { Icon } from "@rneui/base";
import { menuRef } from "../../config/firebase";
import { onValue } from "firebase/database";

// Get the screen width to set the initial layout for the TabView component
const SCREEN_WIDTH = Dimensions.get("window").width;
const useMenuData = () => {
  // State to hold the fetched menu data
  const [menu, setMenu] = useState([]);

  // Fetch the menu data from Firebase and set it to the state
  useEffect(() => {
    onValue(menuRef, (snapshot) => {
      const data = snapshot.val();
      const dataArray = Object.keys(data).map((key) => {
        return { ...data[key] };
      });
      setMenu(dataArray);
    });
  }, []);
  return menu;
};

const MenuProductScreen = ({ navigation, route }) => {
  const menu = useMenuData();
  // State to keep track of the active tab index
  const [index, setIndex] = useState(0);
  // Set the menu data as the initial routes for the TabView component
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    setRoutes(
      menu.map((item) => {
        return {
          key: item.key,
          title: item.title,
        };
      })
    );
  }, [menu]);

  // Render the TabBar component with custom styles
  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: colors.cardbackground }}
      tabStyle={styles.tabStyle}
      scrollEnabled={true}
      style={styles.tab}
      labelStyle={styles.tabLabel}
      contentContainerStyle={styles.tabContainer}
    />
  );
  // Render the scene based on the active tab index
  const renderScene = ({ route }) => {
    switch (route.key) {
      case 1:
        return <Route1 navigation={navigation} />;
      case 2:
        return <Route2 name={navigation} />;
      case 3:
        return <Route3 name={navigation} />;
      case 4:
        return <Route4 name={navigation} />;
      case 5:
        return <Route5 name={navigation} />;
      case 6:
        return <Route6 name={navigation} />;
      case 7:
        return <Route7 name={navigation} />;
      case 8:
        return <Route8 name={navigation} />;

      default:
        return null;
    }
  };
  // Render the component
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Icon
          name="arrow-left"
          type="material-community"
          color={colors.black}
          size={25}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.text1}>Menu</Text>
      </View>

      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={SCREEN_WIDTH}
        renderTabBar={renderTabBar}
        tabBarPosition="top"
        navigation={navigation}
        route={route}
      />
    </View>
  );
};

export default MenuProductScreen;

// Styles
const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },

  container: { flex: 1, top: 0, left: 0, right: 0 },

  view1: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: colors.buttons,
    top: 0,
    left: 0,
    right: 0,
    paddingTop: 25,
  },

  text1: {
    fontWeight: "bold",
    marginLeft: 40,
    color: colors.black,
    fontSize: 18,
  },

  view2: { marginTop: 5, paddingBottom: 20 },

  tab: {
    paddingTop: 0,
    backgroundColor: colors.buttons,
    justifyContent: "space-between",
    // alignItems:"center"
  },

  tabContainer: {
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
  },

  tabLabel: { fontWeight: "bold", color: colors.cardbackground },

  tabStyle: { width: SCREEN_WIDTH / 4, maxHeight: 45 },
  scene2: { backgroundColor: "#673ab7" },
});
