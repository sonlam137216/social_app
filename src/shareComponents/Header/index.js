import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { StyleSheet, TextInput, TouchableOpacity } from 'react-native-web';
import  {} from 'react-native-vector-icons/AntDesign'

const SearchBar = () => {
  return (
    <View style={{backgroundColor: 'white'}}>

      <TextInput placeholder='Search ...' />
    </View>
  )
}

const Header = ({screenName}) => {
  return (
    <SafeAreaView>
      
    </SafeAreaView>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Header;
