import { createUserWithEmailAndPassword } from "firebase/auth";

export function signUp(auth, email, password) {
  const result = {};
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log('SignUp user', userCredential);
      console.log('2: ', userCredential.user);
      result.user = userCredential.user;
    })
    .catch((error) => {
      console.log('signUp - failed', error);
      console.log('code: ', error.code);
      console.log('message', error.message);
      result.errorCode = error.code;
      result.errorMessage = error.message;
    });
  return result;
}