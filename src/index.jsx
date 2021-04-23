import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
//store
import store from "./store";
import { useSelector } from "react-redux";
import { createFirestoreInstance } from "redux-firestore";
import firebase from "./database/firebase";
import { ReactReduxFirebaseProvider, isLoaded } from "react-redux-firebase";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "./components/layout/Loader/Loader";

const rrfProps = {
  firebase,
  config: {},
  dispatch: store.dispatch,
  createFirestoreInstance,
};

function AuthIsLoaded({ children }) {
  const auth = useSelector((state) => state.firebase.auth);
  if (!isLoaded(auth))
    return (
      <div style={{ width: "100vw", height: "100vh" }}>
        <Loader />;
      </div>
    );

  return children;
}

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <AuthIsLoaded>
        <App />
      </AuthIsLoaded>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.querySelector("#root"),
);
