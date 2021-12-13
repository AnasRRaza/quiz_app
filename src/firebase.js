import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyBoE_6BcgepNXkNftD5Wa4L8n6t3bPLmSk",
  authDomain: "quiz-app00.firebaseapp.com",
  projectId: "quiz-app00",
  storageBucket: "quiz-app00.appspot.com",
  messagingSenderId: "337682439494",
  appId: "1:337682439494:web:b2e028cabe36b07dd21947"
};
const privateKey = "BMKTP5TMZ3oSPax7SKZwG3b3jxFzxRxfMtL-VG2EJzNwSevFoUsp7AU_7ypQkIpYhLoxgdYLcYa7_V9qsglQ5kk";

initializeApp(firebaseConfig);

const messaging = getMessaging();

export function initNoti() {
  Notification.requestPermission().then((permission) => {
    console.log(permission);
    if (permission === "granted") {
      getToken(messaging, { vapidKey: privateKey, }).then((token) => {
        if (token) {
          console.log(token);
          return token;
        } else {
          console.log("No registration token available. Request permission to generate one.");
        }
      }).catch((err) => {
        console.log({ err });
      })
    }
  }).catch((err) => {
    console.log('An error occurred while retrieving token. ', err)
  })
}