import firebase from '@firebase/app'
import '@firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyAsZ06x3T_hnJPKFgCBSMlZEVK1pb7rp4A',
  authDomain: 'drop-and-store.firebaseapp.com',
  databaseURL: 'https://drop-and-store.firebaseio.com',
  projectId: 'drop-and-store',
  storageBucket: 'drop-and-store.appspot.com',
  messagingSenderId: '504711127626',
  appId: '1:504711127626:web:941749ee0ac773838abcb3',
  measurementId: 'G-02DB1LXDZ2',
}

// Make sure it hasn't already been initialized
if (!firebase.apps?.length) {
  firebase.initializeApp(firebaseConfig)
}

export default firebase
