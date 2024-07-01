// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIEGX4rKafR_eQE8i2wws_TBq_dNcD87I",
  authDomain: "online-job-portal-9ab9b.firebaseapp.com",
  projectId: "online-job-portal-9ab9b",
  storageBucket: "online-job-portal-9ab9b.appspot.com",
  messagingSenderId: "72605221643",
  appId: "1:72605221643:web:b5c22b8fe5acb8cfc1180e",
  measurementId: "G-6LW66E3101"
};
export default firebaseConfig

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export{db};