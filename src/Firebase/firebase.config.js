// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCwN3yMxshWWFx6PIYnuH1Av9z0NzFWKKQ",
//   authDomain: "real-state-platform-fe7da.firebaseapp.com",
//   projectId: "real-state-platform-fe7da",
//   storageBucket: "real-state-platform-fe7da.appspot.com",
//   messagingSenderId: "588826664923",
//   appId: "1:588826664923:web:b29f96964331064a95d1fe"
// };
const firebaseConfig = {
  apiKey:import.meta.env.VITE_apiKey,
  authDomain:import.meta.env.VITE_authDomain,
  projectId:import.meta.env.VITE_projectId,
  storageBucket:import.meta.env.VITE_storageBucket,
  messagingSenderId:import.meta.env.VITE_messagingSenderId,
  appId:import.meta.env.VITE_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;


