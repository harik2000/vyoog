import * as firebase from "firebase/app";
import "firebase/auth";
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyDunP2LU6sXpBEzLtf4HsdHLXRx4WmoqEw",
  authDomain: "vyoog-156cf.firebaseapp.com",
  databaseURL: "https://vyoog-156cf.firebaseio.com",
  projectId: "vyoog-156cf",
  storageBucket: "vyoog-156cf.appspot.com",
  messagingSenderId: "879481208161",
  appId: "1:879481208161:web:29567c430a30ee66fe1920",
  measurementId: "G-ZFJTVS76XF"
};

firebase.initializeApp(config)

const db = firebase.firestore();

export default db;
