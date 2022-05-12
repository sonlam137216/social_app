import { NavigationContainer, StackActions } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, Text } from 'react-native-web';
import Header from '../../../shareComponents/Header';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NewPost from '../components/NewPost';

const Home = ({ navigation }) => {
    return (
        <SafeAreaView>
            <Header navigation={navigation} />
        </SafeAreaView>
    );
};

export default Home;
