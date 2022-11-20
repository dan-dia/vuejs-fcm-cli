// Import the functions you need from the SDKs you need
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts(
  'https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js'
);
// import firebase from 'firebase';
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

// const messaging =  ? firebase.messaging() : null
const messaging = firebase.messaging();

// messaging.onBackgroundMessage((payload) => {
//   // Customize notification here
//   const notificationTitle = payload.notification.title;
//   const notificationOptions = {
//     body: payload.notification.body + ' BACKGROUND',
//   };
//   self.registration.showNotification(notificationTitle, notificationOptions);
// });
