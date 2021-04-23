import {
  SIGN_IN_ERROR,
  SIGN_UP_ERROR,
  SIGN_UP_SUCCESS,
} from "../types/authTypes";
export const signIn = (user) => (dispatch, getState, getFirebase) => {
  const firebase = getFirebase();

  firebase
    .auth()
    .signInWithEmailAndPassword(user.email, user.password)
    .then(() => dispatch({ type: SIGN_UP_SUCCESS }))
    .catch((error) => dispatch({ type: SIGN_IN_ERROR, payload: error }));
};

export const signUp = (user) => (dispatch, getState, getFirebase) => {
  const firebase = getFirebase();
  const { email, password } = user;

  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => dispatch({ type: SIGN_UP_SUCCESS }))
    .catch((error) => dispatch({ type: SIGN_UP_ERROR, payload: error }));
};

export const signOut = () => (dispatch, getState, getFirebase) => {
  const firebase = getFirebase();
  firebase.auth().signOut();
};
