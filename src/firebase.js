import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAuiwk5_nGs5JucitLuf8wi96g0By1qQ7k",
    authDomain: "yt-bpnek.firebaseapp.com",
    projectId: "yt-bpnek",
    storageBucket: "yt-bpnek.appspot.com",
    messagingSenderId: "149577808507",
    appId: "1:149577808507:web:c6ea944753ac6b89dbc0de"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// Initialize Auth
const auth = firebase.auth();

export { app, auth };