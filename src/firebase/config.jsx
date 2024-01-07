import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA4Hwadm2umyw5wh1IBoqys4nGvXLxOyo0",
  authDomain: "miniblog-a4155.firebaseapp.com",
  projectId: "miniblog-a4155",
  storageBucket: "miniblog-a4155.appspot.com",
  messagingSenderId: "552233167557",
  appId: "1:552233167557:web:ca01e03afd82dde9741eac",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
