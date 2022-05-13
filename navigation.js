import React from "react";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginScreen from "./src/features/Auth/screens/loginScreen";
import store from "./src/app/store";
import Home from "./src/features/Home/screens/Home";
// import RegisterScreen from './src/features/Auth/screens/registerScreen';

import Chat from "./src/features/Chat/screens/chatScreen";
import Notification from "./src/features/Notification/screens/notificationScreen";
import RegisterScreen from "./src/features/Auth/screens/registerScreen";

import Ionicons from "react-native-vector-icons/Ionicons";
import ProfileScreen from "./src/features/Profile/screens/ProfileScreen";

const Tab = createBottomTabNavigator();

const RootNavigation = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              let routeName = route.name;
              if (routeName === "Home") {
                iconName = focused ? "home" : "home-outline";
              } else if (routeName === "Chat") {
                iconName = focused
                  ? "ios-chatbubble-ellipses-sharp"
                  : "ios-chatbubble-ellipses-outline";
              } else if (routeName === "Notification") {
                iconName = focused
                  ? "ios-notifications-sharp"
                  : "ios-notifications-outline";
              } else if (routeName === "NewPost") {
                iconName = focused ? "add-circle-sharp" : "add-circle-outline";
              } else if (routeName === "Login") {
                iconName = focused ? "person" : "person-outline";
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: "blue",
            inactiveTintColor: "black",
            labelStyle: { paddingBottom: 10, fontSize: 10 },
            style: { padding: 10, height: 70 },
          }}
        >
          <Tab.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Tab.Screen
            name="Chat"
            component={Chat}
            options={{ headerShown: false }}
          />
          <Tab.Screen
            name="Notification"
            component={Notification}
            options={{ headerShown: false }}
          />
          <Tab.Screen
            name="Login"
            component={ProfileScreen}
            options={{ headerShown: false }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default RootNavigation;
