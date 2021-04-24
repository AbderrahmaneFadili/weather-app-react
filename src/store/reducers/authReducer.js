import {
  SIGN_UP_ERROR,
  SIGN_IN_ERROR,
  SIGN_IN_SUCCESS,
  SIGN_UP_SUCCESS,
} from "../types/authTypes";

const initialState = {
  signupError: "",
  signinError: "",
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        signupError: "",
        signinError: "",
      };
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        signupError: "",
        signinError: "",
      };
    case SIGN_IN_ERROR:
      return {
        ...state,
        signinError: payload.message,
        signupError: "",
      };
    case SIGN_UP_ERROR:
      return {
        ...state,
        signupError: payload.message,
        signinError: "",
      };
    default:
      return state;
  }
};

export default authReducer;
