import firebase from 'firebase'
require("@firebase/firestore")


// Initialize Firebase
var firebaseConfig = {
      apiKey: "AIzaSyAyWyXDxdXuWSFgaC3sIHsmaFTXTT-Wt_w",
  authDomain: "project-75-64ab8.firebaseapp.com",
  projectId: "project-75-64ab8",
  storageBucket: "project-75-64ab8.appspot.com",
  messagingSenderId: "1018433117905",
  appId: "1:1018433117905:web:97fc5231624ce97a24eff0"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default  firebase.firestore()
