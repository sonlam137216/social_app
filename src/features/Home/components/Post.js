import React from "react";
import { StyleSheet } from "react-native";
import Header from "../../../shareComponents/Header";
import { Pressable, Image, Text, TouchableOpacity, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Popup from "./Popup";

const Post = () => {
  return (
    <View style={[styles.container]}>
      <View style={[styles.headContainer]}>
        <View style={{ display: "flex", flexDirection: "row",  }}>
          <View>
            <Image
              style={[styles.avatarStyle]}
              source={{
                uri: "https://res.cloudinary.com/wjbucloud/image/upload/v1651308420/j2team_girl_8_btpoep.jpg?fbclid=IwAR01uE7VTMQs5AJDzIvaele95PPnHLSvBCZQ_ztGNasfEEyLAQsgjjOboMg"
              }}
            />
          </View>
          <View style={{ margin: 10 }}>
            <Text style={[styles.name]}>Nguyen Huu Khang</Text>
            <Text style={[styles.time]}>1 hour ago</Text>
          </View>
        </View>
        <Pressable style={{ margin: 10}} onPress={() => Popup.setModalVisible(true)}>
          <Ionicons style={[styles.icon]} name="ios-settings-outline"></Ionicons>
        </Pressable>
      </View>

      <View>
        <Text style={[styles.contentStyle]}>Xin chao moi nguoi</Text>
      </View>

      <View>
        <Image
          style={[styles.postImgStyle]}
          source={{
            uri: "https://res.cloudinary.com/wjbucloud/image/upload/v1651308420/j2team_girl_8_btpoep.jpg?fbclid=IwAR01uE7VTMQs5AJDzIvaele95PPnHLSvBCZQ_ztGNasfEEyLAQsgjjOboMg"
          }}
        />
      </View>

      <View style={{ display: "flex", flexDirection: "row" }}>
        <Ionicons style={[styles.icon]} name="heart-outline"></Ionicons>
        <Ionicons style={[styles.icon]} name="chatbubble-outline"></Ionicons>
      </View>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  container: {
    margin: 20,
    backgroundColor: "#F3F9F0",
    marginBottom: 10,
    paddingTop: 20,
    paddingBottom: 20,
    position: "relative"
  },
  headContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent:'space-between',
    position: "relative"
  },
  avatarStyle: {
    height: 40,
    width: 40,
    position: "relative",
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
    borderRadius: 20
  },
  postImgStyle: {
    height: 400,
    width: 400,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
    marginBottom: 10
  },
  contentStyle: {
    fontSize: 14,
    color: "black",
    marginBottom: 10,
    marginLeft: 10
  },
  name: {
    fontSize: 16,
    color: "#5E5858",
    fontWeight: "bold"
  },
  time: {
    fontSize: 10,
    color: "#c3c7c3"
  },
  icon: {
    fontSize: 25
  }
});
