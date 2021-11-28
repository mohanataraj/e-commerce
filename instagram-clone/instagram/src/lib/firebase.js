import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

//import { seedDatabase } from '../seed';

//const config = {};
const config = {
    apiKey: "AIzaSyCHTu91Om_oVRgRpFHI7NQI32Zucyehy2g",
    authDomain: "instagram-clone-33812.firebaseapp.com",
    projectId: "instagram-clone-33812",
    storageBucket: "instagram-clone-33812.appspot.com",
    messagingSenderId: "1065745829469",
    appId: "1:1065745829469:web:65fdf4589be1230585c7b4"
  };
const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

//console.log('firebase --?', firebase);

// call the seed file only once
//seedDatabase(firebase);

export { firebase, FieldValue };