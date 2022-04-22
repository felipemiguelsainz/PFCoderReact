import * as firebase from 'firebase/app';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAYAS8WEyeK36GGDFexKxuaWHPWAv0oPvg",
  authDomain: "reactpf.firebaseapp.com",
  projectId: "reactpf",
  storageBucket: "reactpf.appspot.com",
  messagingSenderId: "853961914289",
  appId: "1:853961914289:web:16c89ae38be245a7af2f90"
};



  const app = firebase.initializeApp(firebaseConfig);

  const db = getFirestore(app);

  export { db };
