import { collection } from 'firebase/firestore'
import { database } from './firebase'

export const chatCollectionRef = collection(database, 'chats')