import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { Button, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import {} from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SearchBar = () => {
    return (
        <View style={{ backgroundColor: 'white' }}>
            <TextInput placeholder="Search ..." />
        </View>
    );
};

const Header = ({ screenName, navigation }) => {
    return (
        <SafeAreaView>
            <Text>SKTK</Text>
            <Button
                onPress={() => navigation.navigate('NewPost')}
                title={<Ionicons name="add-circle-outline" onPress={navigation.navigate('NewPost')} />}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default Header;
