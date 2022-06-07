import * as Types from "./types";
import "../firebase";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  getAuth,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
export const registerAction =
  ({ name, email, password, ...rest }, router, setLoading) =>
  async (dispatch) => {
    try {
      const auth = getAuth();
      const db = getFirestore();
      const signup = async () => {
        await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(auth.currentUser, {
          displayName: name,
        });
        const _id = auth.currentUser.uid;
        await addDoc(collection(db, "users"), {
          name,
          _id,
          ...rest,
          email,
        });
      };
      await signup();
      setLoading(false);
      router.push("/donor");
    } catch (err) {
      console.log();
      alert(err.message);
      dispatch({
        type: Types.SET_ALERT,
        payload: { message: err.message, error: true },
      });
    }
  };

export const loginAction =
  ({ email, password }, history) =>
  async (dispatch) => {
    try {
      const auth = getAuth();
      const user = await signInWithEmailAndPassword(auth, email, password);
      const { displayName, uid } = user.user || {};
      dispatch({
        type: Types.SET_USER,
        payload: {
          user: {
            displayName,
            email,
            uid,
          },
        },
      });
      history.push("/donor");
      localStorage.setItem(
        "user",
        JSON.stringify({
          displayName,
          email,
          uid,
        })
      );
    } catch (error) {
      alert(error.message);

      // dispatch({
      //     type: Types.SET_ALERT,
      //     payload: {
      //         message: 'server side error',
      //         error: true
      //     }
      // })
    }
  };

export const logoutAction = () => (dispatch) => {
  const auth = getAuth();
  signOut(auth);
  localStorage.removeItem("user");
  dispatch({
    type: Types.SET_USER,
    payload: {
      user: {},
    },
  });
  dispatch({
    type: Types.SET_ALERT,
    payload: {
      message: "Logout successfully",
      error: false,
    },
  });
};
export const changePassAction = (user) => async (dispatch) => {
  try {
    const forgetPassword = async ({ email, password }) => {
      return await sendPasswordResetEmail(auth, email, {
        url: "http://localhost:3000/login",
      });
    };
    forgetPassword(user);
  } catch (error) {
    dispatch({
      type: Types.SET_ALERT,
      payload: {
        message: "Server Error",
        error: false,
      },
    });
  }
};
