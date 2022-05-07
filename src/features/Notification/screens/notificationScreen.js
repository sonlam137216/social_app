import React from 'react';
import { StyleSheet } from 'react-native';
import {
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native-web';
import NotificationItem from '../components/NotificationItem';

const data = [
  {
    img: 'https://i.ibb.co/GPP0Grs/bill-gates.jpg',
    name: 'Thai',
    time: '10min',
    content: 'Hôm nay tôi buồn một mình trên phố đông người',
  },
  {
    img: 'https://i.ibb.co/GPP0Grs/bill-gates.jpg',
    name: 'Thai',
    time: '10min',
    content: 'Hôm nay tôi buồn một mình trên phố đông người',
  },
  {
    img: 'https://i.ibb.co/GPP0Grs/bill-gates.jpg',
    name: 'Thai',
    time: '10min',
    content: 'Hôm nay tôi buồn một mình trên phố đông người',
  },
  {
    img: 'https://i.ibb.co/GPP0Grs/bill-gates.jpg',
    name: 'Thai',
    time: '10min',
    content: 'Hôm nay tôi buồn một mình trên phố đông người',
  },
];

const renderItem = (todo, index) => {
  return (
    <TouchableOpacity style={[styles.container]}>
      <Image source={{ uri: todo.img }} style={[styles.imageStyle]} />
      <View style={[styles.contentStyle]}>
        <Text style={[styles.name]}>{todo.name}</Text>
        <Text>{todo.content}</Text>
      </View>
    </TouchableOpacity>
  );
};

const Notification = () => {
  return (
    <View style={{ padding: 30 }}>
      <View>
        <Text>Notifications</Text>
      </View>
      <View>
        <FlatList
          data={data}
          renderItem={({ item, index }) => renderItem(item, index)}
        />
      </View>
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#F3F9F0',
    marginBottom: 10,
    shadowColor: '#000',
    paddingTop: 20,
    paddingBottom: 20,
    position: 'relative',
  },
  imageStyle: {
    flex: 1,
    height: 50,
    width: 50,
    resizeMode: 'contain',
    position: 'absolute',
    top: '30%',
    left: 10,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
    borderRadius: 10,
  },
  contentStyle: {
    flex: 3,
    marginLeft: 30,
    fontSize: 15,
    color: '#7D7C7C',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    borderRadius: 20,
    padding: 10,
    paddingLeft: 40,
  },
  name: {
    fontSize: 16,
    color: '#5E5858',
    fontWeight: 'bold',
  },
});
