// Config file
import * as firebase from "firebase";
import 'firebase/storage' // <- add

export const firebaseConfig = {
  apiKey: "AIzaSyAA4NTIsl_7RAAlW5wFPbkumIkKuJe2KK4",
  authDomain: "design-chart.firebaseapp.com",
  databaseURL: "https://design-chart.firebaseio.com",
  projectId: "design-chart",
  storageBucket: "design-chart.appspot.com",
  messagingSenderId: "103306183299",
  appId: "1:103306183299:web:b7ca18e53b833942ded1b6"
};

export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
