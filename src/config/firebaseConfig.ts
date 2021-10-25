// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCBY8vXJkXw7OpiIRiSbw4W-pOg0M7Y8js',
  authDomain: 'simple-form-83fc2.firebaseapp.com',
  projectId: 'simple-form-83fc2',
  storageBucket: 'simple-form-83fc2.appspot.com',
  messagingSenderId: '885738498803',
  appId: '1:885738498803:web:f64bfcce9df38d02b4a586',
  measurementId: 'G-YNDMD9E9G3',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
