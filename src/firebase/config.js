import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDwV0FXo8XS6BOfTIYmuqi1e__-GHnX4Yk',
  authDomain: 'mymacros-bf1d9.firebaseapp.com',
  databaseURL: 'https://mymacros-bf1d9.firebaseio.com',
  projectId: 'mymacros-bf1d9',
  storageBucket: 'mymacros-bf1d9.appspot.com',
  messagingSenderId: '188693737149',
  appId: '1:188693737149:android:fd80805e2a776bd3ecd1d4',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export {firebase};
