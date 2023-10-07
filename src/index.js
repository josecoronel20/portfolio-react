import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { ProyectsFirebaseProvider } from "./context/ProyectsFirebaseContext";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBU9BFCCS-klSdpQr4HCXBIuu7Jrb3_etw",
  authDomain: "portfolio-react-cb5ad.firebaseapp.com",
  projectId: "portfolio-react-cb5ad",
  storageBucket: "portfolio-react-cb5ad.appspot.com",
  messagingSenderId: "327472696056",
  appId: "1:327472696056:web:44f0085829db68bacc890d",
  measurementId: "G-NPJ7CZ9NN9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ProyectsFirebaseProvider>
        <App />
    </ProyectsFirebaseProvider>
  </React.StrictMode>
);
