// auth.js
import { auth } from './firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

export const doCreateUserWithEmailAndPassword = async (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
}

export const doSignUserWithEmailAndPassword = async (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
}

export const doSignWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  return result;
}

export const doSignOut = () => {
  return auth.signOut();
}