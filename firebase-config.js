// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getDatabase, ref, set, get, update } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js";

// Your Firebase configuration

  const firebaseConfig = {
    apiKey: "AIzaSyDU0SP7tNXZH0BkrKIMOOn79wbMaqnNkQk",
    authDomain: "student-hub-b3030.firebaseapp.com",
    databaseURL: "https://student-hub-b3030-default-rtdb.firebaseio.com",
    projectId: "student-hub-b3030",
    storageBucket: "student-hub-b3030.firebasestorage.app",
    messagingSenderId: "522518100168",
    appId: "1:522518100168:web:9a9ae617ef6688ca758dfd"
  };



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, ref, set, get, update };
