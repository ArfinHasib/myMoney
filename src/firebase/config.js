import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBLlFsItFj2ou7wLixUFoW0gJUL3Rgz-ow',
  authDomain: 'mymoney-ad6a6.firebaseapp.com',
  projectId: 'mymoney-ad6a6',
  storageBucket: 'mymoney-ad6a6.appspot.com',
  messagingSenderId: '737039262282',
  appId: '1:737039262282:web:5e61e5f67117c4b29cbcb3',
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
