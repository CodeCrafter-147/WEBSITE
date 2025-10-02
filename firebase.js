// firebase.js  — ES Module (อย่าใส่ <script> ในไฟล์นี้)

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import {
  getFirestore, enableIndexedDbPersistence, collection, doc, addDoc, getDoc, getDocs,
  setDoc, updateDoc, deleteDoc, query, where, serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";
import {
  getAuth, signInAnonymously, onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import {
  getStorage, ref as sref, uploadBytes, getDownloadURL
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-storage.js";

// TODO: ใส่ config ของโปรเจ็กต์คุณเอง
const firebaseConfig = {
  apiKey: "YOUR_KEY",
  authDomain: "YOUR_APP.firebaseapp.com",
  projectId: "YOUR_APP",
  storageBucket: "YOUR_APP.appspot.com",
  messagingSenderId: "XXXX",
  appId: "1:XXXX:web:XXXX"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

// เปิด offline cache (ถ้ารองรับ)
enableIndexedDbPersistence(db).catch(()=>{});

// ล็อกอิน anonymous อัตโนมัติ
if (!auth.currentUser) {
  signInAnonymously(auth).catch(console.error);
}

export {
  db, auth, storage,
  collection, doc, addDoc, getDoc, getDocs,
  setDoc, updateDoc, deleteDoc, query, where, serverTimestamp,
  sref, uploadBytes, getDownloadURL, onAuthStateChanged
};
