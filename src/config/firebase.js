import firebase from "firebase";

const config = {
  apiKey: "AIzaSyBPYDYk6ayXakkaPhl33laHQvjsfw9ln34",
  authDomain: "fortn1te-1e81c.firebaseapp.com",
  databaseURL: "https://fortn1te-1e81c.firebaseio.com",
  projectId: "fortn1te-1e81c",
  storageBucket: "",
  messagingSenderId: "330950068691"
};

const auth = firebase.initializeApp(config);
export default auth;
//Export a firebase instance with our config object configuration.
