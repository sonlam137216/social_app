import React from "react";
import { StyleSheet } from "react-native";
import Header from "../../../shareComponents/Header";
import {SafeAreaView, ScrollView, FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Post from "../components/Post";

const data = [
  {
    avt: "https://res.cloudinary.com/wjbucloud/image/upload/v1651308420/j2team_girl_8_btpoep.jpg?fbclid=IwAR01uE7VTMQs5AJDzIvaele95PPnHLSvBCZQ_ztGNasfEEyLAQsgjjOboMg",
    img: "https://res.cloudinary.com/wjbucloud/image/upload/v1651308420/j2team_girl_8_btpoep.jpg?fbclid=IwAR01uE7VTMQs5AJDzIvaele95PPnHLSvBCZQ_ztGNasfEEyLAQsgjjOboMg",
    name: "Thai",
    time: "10min",
    content: "Hôm nay tôi buồn một mình trên phố đông người"
  },
  {
    avt: "https://res.cloudinary.com/wjbucloud/image/upload/v1651308420/j2team_girl_8_btpoep.jpg?fbclid=IwAR01uE7VTMQs5AJDzIvaele95PPnHLSvBCZQ_ztGNasfEEyLAQsgjjOboMg",
    img: "https://res.cloudinary.com/wjbucloud/image/upload/v1651308420/j2team_girl_8_btpoep.jpg?fbclid=IwAR01uE7VTMQs5AJDzIvaele95PPnHLSvBCZQ_ztGNasfEEyLAQsgjjOboMg",
    name: "Thai",
    time: "10min",
    content: "Hôm nay tôi buồn một mình trên phố đông người"
  },
  {
    avt: "https://res.cloudinary.com/wjbucloud/image/upload/v1651308420/j2team_girl_8_btpoep.jpg?fbclid=IwAR01uE7VTMQs5AJDzIvaele95PPnHLSvBCZQ_ztGNasfEEyLAQsgjjOboMg",
    img: "https://res.cloudinary.com/wjbucloud/image/upload/v1651308420/j2team_girl_8_btpoep.jpg?fbclid=IwAR01uE7VTMQs5AJDzIvaele95PPnHLSvBCZQ_ztGNasfEEyLAQsgjjOboMg",
    name: "Thai",
    time: "10min",
    content: "Hôm nay tôi buồn một mình trên phố đông người"
  },
  {
    avt: "https://res.cloudinary.com/wjbucloud/image/upload/v1651308420/j2team_girl_8_btpoep.jpg?fbclid=IwAR01uE7VTMQs5AJDzIvaele95PPnHLSvBCZQ_ztGNasfEEyLAQsgjjOboMg",
    img: "https://res.cloudinary.com/wjbucloud/image/upload/v1651308420/j2team_girl_8_btpoep.jpg?fbclid=IwAR01uE7VTMQs5AJDzIvaele95PPnHLSvBCZQ_ztGNasfEEyLAQsgjjOboMg",
    name: "Thai",
    time: "10min",
    content: "Hôm nay tôi buồn một mình trên phố đông người"
  }
];

const Home = () => {
  return (
    <>
      <Header screenName='Home' />

      <ScrollView>
        <FlatList data={data} renderItem={({ item, index }) => Post(item, index)} />

      </ScrollView>
      </>
  );
};

export default Home;
