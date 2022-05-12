import React from 'react';
import { SafeAreaView, Text } from 'react-native-web';
import Header from '../../../shareComponents/Header';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NewPost from '../components/NewPost';
import Home from './Home';

const HomeStack = createNativeStackNavigator();

const HomeStackScreen = ({ navigation }) => {
    return (
        <SafeAreaView>
            <HomeStack.Navigator>
                <HomeStack.Screen name="Home" component={Home} />
                <HomeStack.Screen name="NewPost" component={NewPost} />
            </HomeStack.Navigator>
        </SafeAreaView>
    );
};

export default HomeStackScreen;
