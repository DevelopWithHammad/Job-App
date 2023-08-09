import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc, updateDoc, collection, query, where, getDocs, addDoc } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";




const firebaseConfig = {
    apiKey: "AIzaSyBeWe8S4QOhKRe3z_3iY9yjiBLEY_QKx38",
    authDomain: "fir-project-1-jobs.firebaseapp.com",
    projectId: "fir-project-1-jobs",
    storageBucket: "fir-project-1-jobs.appspot.com",
    messagingSenderId: "263441143564",
    appId: "1:263441143564:web:5057f0fc79bfacf1c2db29"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);



export {
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    db,
    doc,
    setDoc,
    getDoc,
    onAuthStateChanged,
    updateDoc,
    collection,
    query,
    where,
    getDocs,
    addDoc
}