import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

require("dotenv").config();
const secret_keys = process.env;

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: secret_keys.apiKey,
  authDomain: secret_keys.authDomain,
  databaseURL: secret_keys.databaseURL,
  projectId: secret_keys.projectId,
  storageBucket: secret_keys.storageBucket,
  messagingSenderId: secret_keys.messagingSenderId,
  appId: secret_keys.appId,
  measurementId: secret_keys.measurementId,
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
