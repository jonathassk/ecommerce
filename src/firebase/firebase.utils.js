import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDRl0jUvUEX0V_dZ8WwZ6nwaWx5tyEALlw",
  authDomain: "ecommercetest-11ee0.firebaseapp.com",
  databaseURL: "https://ecommercetest-11ee0.firebaseio.com",
  projectId: "ecommercetest-11ee0",
  storageBucket: "ecommercetest-11ee0.appspot.com",
  messagingSenderId: "565402991332",
  appId: "1:565402991332:web:26793ecef4faf506248af1",
  measurementId: "G-C6TRRV370R"
};

export const createUserProfileDocument = async(userAuth, additionalData) => {
  if(!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if(!snapShot.exists) {
   const {displayName, email} = userAuth;
   const createdAt = new Date();
   try {
     await userRef.set({
       displayName,
       email,
       createdAt,
       ...additionalData
     })
   } catch (error) {
     console.log('error creating user', error.message);
   }
  }
  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const singInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;