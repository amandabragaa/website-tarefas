import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBq2_f3O6YsB7Xr4uRT-AL6QULKpM25f3Y",
  authDomain: "tarefasplus-c7f2e.firebaseapp.com",
  projectId: "tarefasplus-c7f2e",
  storageBucket: "tarefasplus-c7f2e.firebasestorage.app",
  messagingSenderId: "919945025537",
  appId: "1:919945025537:web:754daabbfb2bb9500f8800",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export { db };
