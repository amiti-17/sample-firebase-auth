import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBitp3XNPy7Byxp56HzGSzc2cB1B8iupxk",
  authDomain: "sample-auth-404dc.firebaseapp.com",
  projectId: "sample-auth-404dc",
  storageBucket: "sample-auth-404dc.appspot.com",
  messagingSenderId: "966647756346",
  appId: "1:966647756346:web:5617387b9daadc4c26e703",
  measurementId: "G-EJC3BE5HSM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseApp = {
  app,
  analytics: getAnalytics(app),
  auth: getAuth(),
}