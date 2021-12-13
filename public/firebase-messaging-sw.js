
importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-messaging-compat.js');

const firebaseConfig = {
  apiKey: "AIzaSyBoE_6BcgepNXkNftD5Wa4L8n6t3bPLmSk",
  authDomain: "quiz-app00.firebaseapp.com",
  projectId: "quiz-app00",
  storageBucket: "quiz-app00.appspot.com",
  messagingSenderId: "337682439494",
  appId: "1:337682439494:web:b2e028cabe36b07dd21947"
};

firebase.initializeApp(firebaseConfig);
firebase.messaging();