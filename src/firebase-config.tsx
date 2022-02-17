import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

require("dotenv").config({ path: ".env" });
const secret_keys = process.env;

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: secret_keys.APIKEY,
  authDomain: secret_keys.AUTHDOMAIN,
  databaseURL: secret_keys.DATABASEURL,
  projectId: secret_keys.PROJECTID,
  storageBucket: secret_keys.STORAGEBUCKET,
  messagingSenderId: secret_keys.MESSAGINGSENDERID,
  appId: secret_keys.APPID,
  measurementId: secret_keys.MEASUREMENTID,
};

console.log(firebaseConfig);

export const app = initializeApp(firebaseConfig);
