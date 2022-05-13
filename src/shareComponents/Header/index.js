
import React from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-web";
import {} from "react-native-vector-icons/AntDesign";

const SearchBar = () => {
  return (
    <View style={{ backgroundColor: "white" }}>
      <TextInput placeholder="Search ..." />
    </View>
  );
};

const Header = ({ screenName }) => {
  return (
    <SafeAreaView>
      <View style={styles.headerWrap}>
        <Text style={styles.headerContent}>{screenName}</Text>
      </View>
      <View style={styles.headerShadow} />
      <View style={styles.headerShadow1} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  headerWrap: {
    backgroundColor: "#504DE4",
    height: 80,

    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  headerShadow: {
    backgroundColor: "#DFDFDF",
    height: 6,
    marginLeft: 20,
    marginRight: 20,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },

  headerShadow1: {
    backgroundColor: "#000000",
    opacity: 0.05,
    height: 6,
    marginLeft: 40,
    marginRight: 40,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },

  headerContent: {
    color: "#ffffff",
    flex: 1,
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 25,
  },
});

export default Header;
