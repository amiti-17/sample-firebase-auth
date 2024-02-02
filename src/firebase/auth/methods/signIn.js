import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export function signIn(auth, email, password) {
  const result = {};
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log('SignIn user', userCredential);
      console.log('2: ', userCredential.user);
      result.user = userCredential.user;
      // ...
    })
    .catch((error) => {
      console.log('signIn - failed', error);
      console.log('code: ', error.code);
      console.log('message', error.message);
      result.errorCode = error.code;
      result.errorMessage = error.message;
    });
  return result;
}
