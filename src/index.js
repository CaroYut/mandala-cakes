import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAB2NDBVSmMDbX9JkmdnTy4xSxbNsv9gYU",
  authDomain: "mandala-cakes.firebaseapp.com",
  projectId: "mandala-cakes",
  storageBucket: "mandala-cakes.appspot.com",
  messagingSenderId: "873147769485",
  appId: "1:873147769485:web:e2e0c19c78c58d10bd78c4"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

