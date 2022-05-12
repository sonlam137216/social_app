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

const Tab = createBottomTabNavigator();

const RootNavigation = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Tab.Screen
            name="Login"
            component={RegisterScreen}
            options={{ headerShown: false }}
          />
          <Tab.Screen
            name="Notification"
            component={Notification}
            options={{ headerShown: false }}
          />
          <Tab.Screen
            name="Chat"
            component={Chat}
            options={{ headerShown: false }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default RootNavigation;
