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

const Header = () => {
  return (
    <SafeAreaView
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#504DE4',
        height: '125px',
        margin: '10px',
        borderTopLeftRadius: '50px',
        borderTopRightRadius: '50px',
        paddingLeft: '20px',
        paddingRight: '20px'
      }}
    >
      <View>
        <SearchBar />
      </View>
      <View>
        <TouchableOpacity></TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Header;
