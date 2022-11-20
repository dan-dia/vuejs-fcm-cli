// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
import 'firebase/firebase-messaging';
// import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyB8Fq4biIoF4WD1h6WoyyE7Yc8_sVrf28Q',
  authDomain: 'mahasiswa-login-30ab8.firebaseapp.com',
  projectId: 'mahasiswa-login-30ab8',
  storageBucket: 'mahasiswa-login-30ab8.appspot.com',
  messagingSenderId: '90732114267',
  appId: '1:90732114267:web:0699a9705cb9dab708ea7e',
  measurementId: 'G-9F7TGTHVJV',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const messaging = firebase.messaging();

export default messaging;
