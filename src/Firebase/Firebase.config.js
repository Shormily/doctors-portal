// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyDCfoZhPZC7eFdjDp5jbvIfjMv5SAA8OgE",
  authDomain: "milstone-twelve.firebaseapp.com",
  projectId: "milstone-twelve",
  storageBucket: "milstone-twelve.appspot.com",
  messagingSenderId: "1027002864706",
  appId: "1:1027002864706:web:0d6add2e7eff7f6c6089db",
  imgbb:"c04caf4800a227a00009abdab2aa48ee",
  stripe:"pk_test_6pRNASCoBOKtIshFeQd4XMUh",

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;