import React, { useEffect, useState } from 'react';
import { onSnapshot } from 'firebase/firestore';
import { chatCollectionRef } from '../../../../config/firestore.collection';

const chatList = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(chatCollectionRef, snapshot => {
        setMessages(snapshot.docs.map(doc => ({id: doc.id, data: doc.data()})))
    });

    return () => {
        unsubscribe()
    }
  }, []);

  return <>
    <ul>
        {messages.map((message, index) => (
            <li key={index}>{message.data.text}</li>
        ))}
    </ul>
  </>;
};

export default chatList;
