import { fireBaseApp } from "../firebase";
import { signIn } from "./methods/signIn";
import { signOut } from "./methods/signOut";
import { signUp } from "./methods/signUp";

const { auth } = fireBaseApp;

export const authMethods = {
  signIn: signIn.bind(null, auth),
  signUp: signUp.bind(null, auth),
  signOut: signOut.bind(null, auth),
}