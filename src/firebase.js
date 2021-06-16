import firebase from 'firebase/app'
import "firebase/database";

var firebaseConfig = {
    apiKey: "AIzaSyBgVPoCwlm0oyjF2olNgr-VKBaDr3kkPNc",
    authDomain: "curd-react-f43c8.firebaseapp.com",
    databaseURL: "https://curd-react-f43c8-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "curd-react-f43c8",
    storageBucket: "curd-react-f43c8.appspot.com",
    messagingSenderId: "876183074936",
    appId: "1:876183074936:web:483c78a878b3307e49158d",
    measurementId: "G-VP6W7VDWPM"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;