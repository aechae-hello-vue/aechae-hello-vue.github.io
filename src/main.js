import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdBQJHS5Aajvq1sEaswZ2NfcvzF5WrVBI",
  authDomain: "chae-a7eed.firebaseapp.com",
  databaseURL: "https://chae-a7eed-default-rtdb.firebaseio.com",
  projectId: "chae-a7eed",
  storageBucket: "chae-a7eed.appspot.com",
  messagingSenderId: "77505652198",
  appId: "1:77505652198:web:37a9b43240d2bb7c152227",
  measurementId: "G-LNS1L16ESE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
