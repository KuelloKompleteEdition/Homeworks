import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/config.js";
import { register, login, logout } from "./authSlice";

export const registerUser = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      if (response) {
        dispatch(register({ email: response.user.email }));
        return Promise.resolve(response);
      } else {
        throw new Error('Error al registrar usuario');
      }
    } catch (error) {
      return Promise.reject(error);
    }
  };
};

export const loginUser = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      if (response) {
        dispatch(login({ email: response.user.email, uid: response.user.uid, displayName: response.user.displayName, photoURL: response.user.photoURL }));
        return Promise.resolve(response);
      } else {
        throw new Error('Error al iniciar sesión');
      }
    } catch (error) {
      return Promise.reject(error);
    }
  };
};

export const loginGoogle = () => {
  return async (dispatch) => {
    const provider = new GoogleAuthProvider();
    try {
      const response = await signInWithPopup(auth, provider);
      dispatch(login({ email: response.user.email, uid: response.user.uid, displayName: response.user.displayName, photoURL: response.user.photoURL }));
      return Promise.resolve(response);
    } catch (error) {
      return Promise.reject(error);
    }
  };
};

export const logoutUser = () => {
  return async (dispatch) => {
    try {
      await signOut(auth);
      dispatch(logout());
    } catch (error) {
      return Promise.reject(error);
    }
  };
};