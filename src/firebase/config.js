import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  projectId: 'hideaway-43135',
  appId: '1:52968234278:android:b66616c3b1a33aaa6f35e7',
  databaseURL:
    'https://hideaway-43135-default-rtdb.asia-southeast1.firebasedatabase.app',
  storageBucket: 'hideaway-43135.appspot.com',
  locationId: 'asia-northeast3',
  apiKey: 'AIzaSyA94voK4B0VgbTgsGoZyqaO9XaI6pHH2vM',
  authDomain: 'hideaway-43135.firebaseapp.com',
  messagingSenderId: '52968234278'
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth(app);

export { auth, db };
