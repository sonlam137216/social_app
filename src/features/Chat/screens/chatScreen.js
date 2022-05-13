import React, {
  useState,
  useEffect,
  useLayoutEffect,
  useCallback,
} from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import {
  collection,
  addDoc,
  orderBy,
  query,
  onSnapshot,
} from 'firebase/firestore';
import { signOut } from 'firebase/auth';
// import { auth, database } from '../config/firebase';
import { database } from '../../../config/firebase';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const navigation = useNavigation();

  const userId = useSelector((state) => state.auth._id);
  const guestId = 'id_guest'

  const onSignOut = () => {
    // signOut(auth).catch(error => console.log('Error logging out: ', error));
    console.log('log out');
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={{
            marginRight: 10,
          }}
          onPress={onSignOut}
        >
          {/* <AntDesign name="logout" size={24} style={{marginRight: 10}}/> */}
          <Text>Log out</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  useLayoutEffect(() => {
    const collectionRef = collection(database, 'chats');
    const q = query(collectionRef, orderBy('createdAt', 'desc'));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const listMessage = []        
      querySnapshot.docs.forEach((doc) => {
          if(doc.data().members.includes(userId)) {
            const message =  {
              _id: doc.data()._id,
              createdAt: doc.data().createdAt.toDate(),
              text: doc.data().text,
              user: doc.data().user,
            };
            listMessage.push(message)
          }
        })
      setMessages(listMessage)
    });
    return unsubscribe;
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
    console.log(messages[0]);
    const { _id, createdAt, text, user } = messages[0];
    addDoc(collection(database, 'chats'), {
      _id,
      createdAt,
      text,
      user,
      members: [userId, guestId]
    });
  }, []);

  return (
    <GiftedChat
      messages={messages}
      showAvatarForEveryMessage={false}
      showUserAvatar={false}
      onSend={(messages) => onSend(messages)}
      messagesContainerStyle={{
        backgroundColor: '#fff',
      }}
      textInputStyle={{
        backgroundColor: '#fff',
        borderRadius: 20,
      }}
      user={{
        _id: userId,
        avatar: 'https://i.pravatar.cc/300',
      }}
    />
  );
};

export default ChatScreen;
