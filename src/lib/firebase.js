import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBVRmidgNhnjTItKV8z3FToaT5cjZl1Oqk',
  authDomain: 'twitter-project-9e531.firebaseapp.com',
  projectId: 'twitter-project-9e531',
  storageBucket: 'twitter-project-9e531.appspot.com',
  messagingSenderId: '157951317393',
  appId: '1:157951317393:web:5bf8d9553c152e70a27630',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
