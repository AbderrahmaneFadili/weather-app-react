import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
//store
import store from "./store";
import { createFirestoreInstance } from "redux-firestore";
import firebase from "./database/firebase";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const rrfProps = {
  firebase,
  config: {},
  dispatch: store.dispatch,
  createFirestoreInstance, // <- needed if using firestore
};

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.querySelector("#root"),
);
