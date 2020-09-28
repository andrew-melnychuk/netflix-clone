import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// import { seedDatabase } from "../seed"; - no need for it after it's been used once

//we need to seed the database

// we need a config here

const config = {
  apiKey: "AIzaSyAXRB7nDf7O4N1mws92JvW0M8vcEQuLqMY",
  authDomain: "am-netflix.firebaseapp.com",
  databaseURL: "https://am-netflix.firebaseio.com",
  projectId: "am-netflix",
  storageBucket: "am-netflix.appspot.com",
  messagingSenderId: "802101262014",
  appId: "1:802101262014:web:9524d20101be192f5250ef",
};

const firebase = Firebase.initializeApp(config);

// seed Database (firebase) - use it only once whe importing data to firebase and never again, or you'll have duplicate data

export { firebase };
