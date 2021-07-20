import { firebase, googleAuthProvider } from "./../firebase/firebaseConfig";

export const login = () => {
  return firebase.auth().signInWithPopup(googleAuthProvider);
};

export const loginAction = userId => ({
  type: "LOGIN",
  userId,
});

export const logout = () => {
  return firebase.auth().signOut();
};

export const logoutAction = () => ({
  type: "LOGOUT",
});
