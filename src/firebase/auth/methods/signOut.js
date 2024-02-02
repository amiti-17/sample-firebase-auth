import { getAuth, signOut as signOutFireBase } from "firebase/auth";

export function signOut(auth) {
  signOutFireBase(auth).then(() => {
    // Sign-out successful.
    console.log('SignOut successful');
  }).catch((error) => {
    // An error happened.
    console.log('SignOut successful', error);
  });
}
