import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'

var firebaseConfig = {
  apiKey: "AIzaSyAj0XwVLZmPZKBPxtt2FiqC5MnQbEEZOvw",
  authDomain: "slack-clone-34543.firebaseapp.com",
  databaseURL: "https://slack-clone-34543-default-rtdb.firebaseio.com",
  projectId: "slack-clone-34543",
  storageBucket: "slack-clone-34543.appspot.com",
  messagingSenderId: "235418569207",
  appId: "1:235418569207:web:d0f0e1547f56c34abd46f2"
};
firebase.initializeApp(firebaseConfig);

export default firebase
